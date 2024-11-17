import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import fetchContacts from "../../services/apiContacts";
import { deleteAllTrashedContacts as deleteAllTrashedContactApi } from "../../services/apiContacts";

export function useDeleteAllTrashedContact() {
  const queryClient = useQueryClient();

  const { isSuccess, mutate: deleteAllTrashedContact } = useMutation({
    mutationFn: deleteAllTrashedContactApi,
    fetchContacts,
    onSuccess: () => {
      toast.success("Contact successfully deleted permanently");
      queryClient.invalidateQueries({
        queryKey: ["trash"]["contacts"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isSuccess, deleteAllTrashedContact };
}
