import { QueryClient } from "@tanstack/react-query";

const BASE_URL = "http://localhost:4000";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
    },
  },
});

export async function fetchQuery<T>(
  path: string,
  init: RequestInit,
  queryKey: string[]
): Promise<T> {
  return queryClient.ensureQueryData({
    queryKey: ["reset", ...queryKey],
    queryFn: async () => {
      const url = BASE_URL + path;
      const response = await fetch(url, init);
      return response.json();
    },
  });
}
