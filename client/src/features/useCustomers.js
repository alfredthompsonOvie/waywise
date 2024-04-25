import { getCustomers } from "../services/apiServices";
import { useQuery } from "@tanstack/react-query";

export function useCustomers() {
	const {
		isLoading,
		error,
		data: customers,
	} = useQuery({
		queryKey: ["customers"],
		queryFn: getCustomers,
	});

	return {
		isLoading,
		error,
		customers,
	};
}
