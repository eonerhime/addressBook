import { useQuery } from "@tanstack/react-query";
import fetchContacts from "../../services/apiContacts";
import { useSearchParams } from "react-router-dom";

export function useContacts(){
  const [searchParams] = useSearchParams();
  
  // Filter
  // const filterValue = 'id';
  // const filter = {field: 'id', value: 'id'};
  // const filter = !filterValue || filterValue === 'id' ? null : { field: 'status', value: filterValue };

  // Sort
  const sortByRaw = searchParams.get('sortBy') || "lastName-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

  const {
    isLoading,
    data: {data: contacts, count} = {},
  } = useQuery({
    queryKey: ['contacts', sortBy, page],
    queryFn: () => fetchContacts({sortBy, page}),
  });

  return { isLoading, contacts, count };
}