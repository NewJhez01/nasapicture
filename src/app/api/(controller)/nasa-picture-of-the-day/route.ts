import { savePictureOfTheDayCommand } from "@/server/core/command/savePictureofTheDayCommand";
import { pictureOfTheDayQuery } from "@/server/core/query/pictureOfTheDayQuery";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const readDto = await pictureOfTheDayQuery();
    console.log({ readDto })
    savePictureOfTheDayCommand(readDto);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch Picture from Nasa Api" }, { status: 404 })
  }
  return new NextResponse(null, { status: 200 });
}
