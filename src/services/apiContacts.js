import { PAGE_SIZE } from "../utils/constants";
import supabase, { supabaseUrl } from "./supabase";

export default async function fetchContacts ({sortBy, page} ) {
 
 let query = supabase.from('contacts')
  .select('*', {count: "exact"});

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

  const  { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Contacts could not be loaded");
  }

  return {data, count};  
}

export async function createUpdateContact(newContact, id){
  // For existing imgage, get image path
  const hasImagePath = newContact.image?.startsWith?.(supabaseUrl);

   // For new image, create image name
  const imageName = `${Math.random()}-${newContact.image?.name}`.replace("/","");

  const imagePath = hasImagePath 
    ? newContact.image 
    : `${supabaseUrl}/storage/v1/object/public/contacts-images/${imageName}`;

  // 1. Create/ edit contact 
  let query = supabase.from('contacts')

  // 1A. Create contact
  if (!id) query = query.insert([{...newContact, image: imagePath}]);

  // 1B. Edit contact
  if (id)  query = query.update({ ...newContact, image: imagePath }).eq("id", id);

  // .single() removed
  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("Contact could not be created");
  }

  // Happens if there's no error
  // 2. Upload image
  const { error: storageError } = await supabase
  .storage
  .from('contacts-images')
  .upload(imageName, newContact.image);

   // Prevent a new cabin from being created in case the file didn't upload correctly
  // 3. Delete the cabin if there was an error

  if(storageError){
    await supabase.from('contacts').delete().eq('id', data.id);
    
    console.error(storageError);
    throw new Error(
      "Contact image could not be uploaded and the contact was not created"
    );
  }

  return data;
}

export async function deleteContact(id){
  
  const { data, error } = await supabase
  .from('contacts')
  .delete()
  .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error("Contact could not be deleted");
  }

  return data;
}
export async function deleteAllContacts(){}
