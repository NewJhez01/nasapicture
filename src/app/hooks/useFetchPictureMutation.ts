import { useMutation } from "@tanstack/react-query"

type UrlResponse = {
  url: string
}

export function useFetchPictureMutation() {
  return useMutation<UrlResponse, Error, Date>({
    mutationFn: async (date: Date) => {
      const res = await fetch(`/api/url-for-picture?date=${date.toISOString().split("T")[0]}`);
      if (res.ok === false) {
        throw new Error("failed to fetch url");
      }
      return res.json() as Promise<UrlResponse>;
    }
  })
}
