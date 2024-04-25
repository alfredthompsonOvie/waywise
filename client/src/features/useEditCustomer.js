import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCustomer as editCustomerApi } from "../services/apiServices";


export function useEditCustomer() {
  
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editCustomer } = useMutation({
    mutationFn: (data) => {
      console.log("use editCustomer", data);
      return editCustomerApi(data);
    },
    onSuccess: () => {
  
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
    onError: (err) => {
      console.log(err)
    },
  });

  return { isEditing, editCustomer };
}