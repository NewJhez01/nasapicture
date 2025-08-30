import { QueryClient, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
})

export function useFetchPictureForDate(date: Date) {
  return useQuery({
    queryKey: ['fetch pic for provided date'],
    queryFn: // will be created in next ticket when the backend endpoint exists
  })
}
