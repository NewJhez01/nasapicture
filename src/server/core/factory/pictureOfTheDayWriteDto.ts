import { Prisma } from "@/generated/prisma";
import { PictureOfTheDayReadDto } from "./pictureOfTheDayDtoFactory";

export type PictureOfTheDayWriteDto = Prisma.PictureCreateInput

export function createFromReadDto(dto: PictureOfTheDayReadDto): PictureOfTheDayWriteDto {

  return {
    copyright: dto.copyright,
    date: dto.date,
    explanation: dto.explanation,
    hdUrl: dto.hdUrl,
    title: dto.title,
    url: dto.url,
  }
}
