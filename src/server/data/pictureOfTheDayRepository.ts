import { PrismaClient } from "@/generated/prisma";
import { PictureOfTheDayWriteDto } from "../core/factory/pictureOfTheDayWriteDto";

export interface NasaPictureOfTheDayResponse {
  copyright: string | undefined;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string
  title: string;
  url: string
}

export async function getPictureOfTheDay() {
  const apiKey = process.env.NASA_API_KEY;
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);

  if (res.ok === false) {
    throw new Error(`nasa api return error code ${res.status} ${res.statusText}`)
  }

  const data: NasaPictureOfTheDayResponse = await res.json()
  return data;
}

export async function saveDto(dto: PictureOfTheDayWriteDto) {
  const prisma = new PrismaClient;
  await prisma.picture.create({ data: dto });
  await prisma.$disconnect();
}

export async function getUrlForDate(date: string) {
  const prisma = new PrismaClient;
  const picture = await prisma.picture.findUniqueOrThrow({
    where: {
      date: date
    }
  })
  return picture.url;
}
