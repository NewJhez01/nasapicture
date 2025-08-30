import { saveDto } from "@/server/data/pictureOfTheDayRepository";
import { PictureOfTheDayReadDto } from "../factory/pictureOfTheDayDtoFactory";
import { createFromReadDto } from "../factory/pictureOfTheDayWriteDto";

export function savePictureOfTheDayCommand(dto: PictureOfTheDayReadDto) {
  const writeDto = createFromReadDto(dto);
  saveDto(writeDto);
}
