import { PAGE_SIZE } from "../utils/constants";
import supabase, { supabaseUrl } from "./supabase";

export default async function fetchContacts({ sortBy, page }) {
  let query = supabase.from("contacts").select("*", { count: "exact" });

  // Filter
  // if (filter) query = query.eq(filter?.field, filter?.value);

  // Sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + (PAGE_SIZE - 1);

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Contacts could not be loaded");
  }

  return { data, count };
}

export async function createUpdateContact(newContact, id) {
  // For existing imgage, get image path
  const hasImagePath = newContact.image?.startsWith?.(supabaseUrl);

  // For new image, create image name
  const imageName = `${Math.random()}-${newContact.image?.name}`.replace(
    "/",
    "",
  );

  const imagePath = hasImagePath
    ? newContact.image
    : `${supabaseUrl}/storage/v1/object/public/contacts-images/${imageName}`;

  // 1. Create/ edit contact
  let query = supabase.from("contacts");

  // 1A. Create contact
  if (!id) query = query.insert([{ ...newContact, image: imagePath }]);

  // 1B. Edit contact
  if (id)
    query = query.update({ ...newContact, image: imagePath }).eq("id", id);

  // .single() removed
  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("Contact could not be created");
  }

  // Happens if there's no error
  // 2. Upload image
  const { error: storageError } = await supabase.storage
    .from("contacts-images")
    .upload(imageName, newContact.image);

  // Prevent a new cabin from being created in case the file didn't upload correctly
  // 3. Delete the cabin if there was an error

  if (storageError) {
    await supabase.from("contacts").delete().eq("id", data.id);

    console.error(storageError);
    throw new Error(
      "Contact image could not be uploaded and the contact was not created",
    );
  }

  return data;
}

export async function deleteContact(id) {
  // debugger; // eslint-disable-line no-debugger

  await trashContact(id);

  const { data, error } = await supabase.from("contacts").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Contact could not be deleted");
  }

  return data;
}

export async function deleteTrashedContact(id) {
  const { error: trashError } = await supabase
    .from("trash")
    .delete()
    .eq("id", id);

  if (trashError) throw new Error("Failed to delete trashed contact");

  const { data, error, count } = await supabase
    .from("trash")
    .select("*", { count: "exact" });

  if (error) throw new Error("Failed to read trashed contacts");

  return { data, count };
}

export async function deleteAllTrashedContacts() {
  const { error } = await supabase.from("trash").delete().neq("id", 0);

  if (error) throw new Error(error.message);
}

export async function restoreContact(id) {
  let { error: restoreError, data: restoredContact } = await supabase
    .from("trash")
    .select("*")
    .eq("id", id);

  if (restoreError) {
    console.error(restoreError);
    throw new Error("Contact could not be retrieved");
  }

  // Extract object out of the array
  restoredContact = restoredContact.at(0);

  // Remove field not required by the contacts table from the object
  delete restoredContact.deleted_at;
  delete restoredContact.contact_id;

  // Remove contact from trashed records
  const { error: trashError } = await supabase
    .from("trash")
    .delete()
    .eq("id", id);

  if (trashError) {
    console.error(error);
    throw new Error("Contact could not be removed from trashed contacts");
  }

  // Insert restored record back to the contacts
  await supabase
    .from("contacts")
    .insert([{ ...restoredContact, deleted: false }]);

  // let query
  const { error, data, count } = await supabase
    .from("contacts")
    .select("*", { count: "exact" });

  // const { error, data, count } = query;

  if (error) {
    console.error(error);
    throw new Error("Contacts could not be loaded");
  }

  return { data, count };
}

export async function trashContact(id) {
  // debugger; // eslint-disable-line no-debugger

  let query = supabase.from("trash");

  if (id) {
    let { data: deletedContact } = await supabase
      .from("contacts")
      .select("*")
      .eq("id", id);

    // Extract first item (returned object) of the array
    deletedContact = deletedContact.at(0);

    // Get date contact was trashed
    const deletedDate = new Date().toISOString();

    query = query.insert([
      {
        ...deletedContact,
        deleted_at: deletedDate,
        deleted: true,
      },
    ]);

    await query.select();
  }

  // Return all trashed contacts and count
  const {
    error: trashError,
    data: trashedContactsList,
    count,
  } = await supabase.from("trash").select("*", { count: "exact" });

  if (trashError) {
    console.error(trashError);
    throw new Error("Trashed contacts couldn't be fetched");
  }

  return { trashedContactsList, count };
}

export async function fetchTrashedContacts({ sortBy, page }) {
  let query = supabase.from("trash").select("*");

  const { count } = await supabase
    .from("trash")
    .select("*", { count: "exact" });

  // Sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + (PAGE_SIZE - 1);

    query = query.range(from, to);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Trashed contacts could not be loaded");
  }
  return { data, count };
}
