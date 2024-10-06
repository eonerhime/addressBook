import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { PAGE_SIZE } from "../../utils/constants";
import fetchContacts from "../../services/apiContacts";

export function useContacts(){
  const queryClient = useQueryClient();
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

  // Query
  const {
    isLoading,
    data: {data: contacts, count} = {},
  } = useQuery({
    queryKey: ['contacts', sortBy, page],
    queryFn: () => fetchContacts({sortBy, page}),
  });

  // Prefetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  // Next page
  if (page < pageCount)
  queryClient.prefetchQuery({
    queryKey: ['contacts', sortBy, page + 1],
    queryFn: () => fetchContacts({sortBy, page: page + 1}),
  })

  // Previous page
  if (page > 1)
  queryClient.prefetchQuery({
    queryKey: ['contacts', sortBy, page - 1],
    queryFn: () => fetchContacts({sortBy, page: page - 1}),
  })

  return { isLoading, contacts, count };
}