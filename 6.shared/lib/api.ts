import { QueryClient } from "@tanstack/react-query";

const BASE_URL = "http://localhost:4000";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 25,
    },
  },
});

export async function fetchQuery(
  path: string,
  init: RequestInit,
  queryKey: string[]
) {
  return queryClient.ensureQueryData({
    queryKey: ["reset", ...queryKey],
    queryFn: async () => {
      const url = BASE_URL + path;
      return fetch(url, init);
    },
  });
}
