import { getUrlForDate } from "@/server/data/pictureOfTheDayRepository";

export async function pictureUrlQuery(date: string) {
  const url = await getUrlForDate(date)
  return url;
}
