import { NasaPictureOfTheDayResponse } from "@/server/data/pictureOfTheDayRepository";

export interface PictureOfTheDayReadDto {
  copyright: string;
  date: string;
  explanation: string;
  hdUrl: string;
  title: string;
  url: string;
}

export function createFromResponse(response: NasaPictureOfTheDayResponse): PictureOfTheDayReadDto {

  return {
    copyright: response.copyright,
    date: response.date,
    explanation: response.explanation,
    hdUrl: response.hdurl,
    title: response.title,
    url: response.url,
  }
}
