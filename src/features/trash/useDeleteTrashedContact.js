import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import fetchContacts from "../../services/apiContacts";
import { deleteTrashedContact as deleteTrashedContactApi } from "../../services/apiContacts";

export function useDeleteTrashedContact() {
  const queryClient = useQueryClient();

  const { isSuccess, mutate: deleteTrashedContact } = useMutation({
    mutationFn: deleteTrashedContactApi,
    fetchContacts,
    onSuccess: () => {
      toast.success("Contact successfully deleted permanently");
      queryClient.invalidateQueries({
        queryKey: ["trash"]["contacts"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isSuccess, deleteTrashedContact };
}
