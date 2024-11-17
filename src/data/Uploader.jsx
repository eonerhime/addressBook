import { useState } from "react";
import supabase from "../services/supabase";
import Button from "../ui/Button";
import { contacts } from "./data-contacts";

async function deleteContacts() {
  const { error } = await supabase.from("contacts").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deleteTrashed() {
  const { error } = await supabase.from("trash").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createContacts() {
  const { error } = await supabase.from("contacts").insert(contacts);
  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    await deleteContacts();
    await deleteTrashed();
    await createContacts();

    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        padding: "4px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload Contacts
      </Button>
    </div>
  );
}

export default Uploader;
