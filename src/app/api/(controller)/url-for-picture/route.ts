import { pictureUrlQuery } from "@/server/core/query/pictureUrlQuery";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const date = url.searchParams.get("date");

  if (date === null) {
    return NextResponse.json({ error: "Missing date parameter" }, { status: 400 })
  }

  try {
    const url = await pictureUrlQuery(date)
    return NextResponse.json({ url }, { status: 200 })
  } catch {
    return NextResponse.json({ error: "Failed to fetch url from database" }, { status: 404 })
  }
}
