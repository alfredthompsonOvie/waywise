import { getCustomers } from "../services/apiServices";
import { useQuery } from "@tanstack/react-query";

export function useCustomers() {
	const {
		isLoading,
		error,
		data: customers,
	} = useQuery({
		queryKey: ["Customers"],
		queryFn: getCustomers,
	});

	return {
		isLoading,
		error,
		customers,
	};
}
