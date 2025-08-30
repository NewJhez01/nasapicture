import { getPictureOfTheDay } from "@/server/data/pictureOfTheDayRepository";
import { createFromResponse } from "../factory/pictureOfTheDayDtoFactory";

export async function pictureOfTheDayQuery() {
  const data = await getPictureOfTheDay();
  return createFromResponse(data);
}
