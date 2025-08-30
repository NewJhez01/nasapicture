import { getUrlForDate } from "@/server/data/pictureOfTheDayRepository";

export async function pictureUrlQuery(date: string) {
  return await getUrlForDate(date);
}
