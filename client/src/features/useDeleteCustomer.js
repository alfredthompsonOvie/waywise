import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCustomer as deleteCustomerApi } from "../services/apiServices";


export function useDeleteCustomer() {
  
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCustomer } = useMutation({
    mutationFn: (id)=>deleteCustomerApi(id),
    onSuccess: () => {
  
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
    onError: (err) => {
      console.log(err)
    },
  });

  return { isDeleting, deleteCustomer };
}