import { createCustomer as  createCustomerApi } from "../services/apiServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export function useCreateCustomer() {
  const queryClient = useQueryClient();

	const { isLoading: isCreating, mutate: createCustomer } = useMutation({
		mutationFn: (data) => createCustomerApi(data),
		onSuccess: () => {
			console.log('Create customer');

			queryClient.invalidateQueries({
				queryKey: ["customers"],
			});
		},
		onError: (err) => console.error(err.message),
  });

  return { isCreating, createCustomer }
}