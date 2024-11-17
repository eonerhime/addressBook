import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { PAGE_SIZE } from "../../utils/constants";
import { fetchTrashedContacts } from "../../services/apiContacts";

export function useTrashed() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Sort
  const sortByRaw = searchParams.get("sortBy") || "lastName-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Query
  const { isLoading, data: { data: trashedContacts, count } = {} } = useQuery({
    queryKey: ["trash", sortBy, page],
    queryFn: () => fetchTrashedContacts({ sortBy, page }),
  });

  // Prefetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  // Next page
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["trash", sortBy, page + 1],
      queryFn: () => fetchTrashedContacts({ sortBy, page: page + 1 }),
    });

  // Previous page
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["trash", sortBy, page - 1],
      queryFn: () => fetchTrashedContacts({ sortBy, page: page - 1 }),
    });

  return { isLoading, trashedContacts, count };
}
