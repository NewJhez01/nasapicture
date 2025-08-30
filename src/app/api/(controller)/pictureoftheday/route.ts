import { savePictureOfTheDayCommand } from "@/server/core/command/savePictureofTheDayCommand";
import { pictureOfTheDayQuery } from "@/server/core/query/pictureOfTheDayQuery";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const readDto = await pictureOfTheDayQuery();
    savePictureOfTheDayCommand(readDto);
  } catch (error) {
    return NextResponse.error()
  }
  return new NextResponse(null, { status: 200 });
}
