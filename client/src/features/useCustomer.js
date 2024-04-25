import { useParams } from "react-router-dom";
import { getCustomer } from "../services/apiServices";
import { useQuery } from "@tanstack/react-query";

export function useCustomer() {
  const {id } = useParams();
	const {
		isLoading,
		error,
		data: customer,
	} = useQuery({
		queryKey: ["customer", id],
    queryFn: () => getCustomer(id),
    retry: false
	});

	return {
		isLoading,
		error,
		customer,
	};
}
