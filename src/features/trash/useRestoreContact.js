import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import fetchContacts from "../../services/apiContacts";
import { restoreContact as restoreContactApi } from "../../services/apiContacts";

export function useRestoreContact() {
  const queryClient = useQueryClient();

  const { isSuccess, mutate: restoreContact } = useMutation({
    mutationFn: restoreContactApi,
    fetchContacts,
    onSuccess: () => {
      toast.success("Contact successfully restored");
      queryClient.invalidateQueries({
        queryKey: ["trash"]["contacts"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isSuccess, restoreContact };
}
