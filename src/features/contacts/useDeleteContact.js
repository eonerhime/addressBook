import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  deleteContact as deleteContactAPI,
  trashContact as trashContactApi,
} from "../../services/apiContacts";

export function useDeleteContact() {
  const queryClient = useQueryClient();

  const { isSuccess, mutate: deleteContact } = useMutation({
    mutationFn: deleteContactAPI,
    trashContactApi,
    onSuccess: () => {
      toast.success("Contact successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["contacts"]["trash"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isSuccess, deleteContact };
}
