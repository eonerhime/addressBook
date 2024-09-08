import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUpdateContact } from "../../services/apiContacts";

export function useUpdateContact(){
  const queryClient = useQueryClient();

  // useMutation allows us modify existing records
  const { mutate: updateContact, isPending: isEditing } = useMutation({
    mutationFn: ({ newContactData, id }) => createUpdateContact(newContactData, id),
    onSuccess: () => {
      toast.success("Contact successfully updated!");
      queryClient.invalidateQueries({queryKey:["contacts"]});
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, updateContact };
}