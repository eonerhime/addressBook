import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteContact as deleteContactAPI} from "../../services/apiContacts";

export function useDeleteContact(){

  
  const queryClient = useQueryClient();
  
  const { isSuccess, mutate:  deleteContact } = useMutation({
    mutationFn: deleteContactAPI,
    onSuccess: () => {
      toast.success("Contact successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  
  return { isSuccess, deleteContact }

}