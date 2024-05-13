import { createCustomer as  createCustomerApi } from "../services/apiServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from 'react-hot-toast';




export function useCreateCustomer() {
  const queryClient = useQueryClient();

	const { isLoading: isCreating, mutate: createCustomer } = useMutation({
		mutationFn: (data) => createCustomerApi(data),
		onSuccess: () => {
			console.log('Create customer but toast not showing');
			
			queryClient.invalidateQueries({
				queryKey: ["customers"],
			});
		},
		onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCustomer }
}