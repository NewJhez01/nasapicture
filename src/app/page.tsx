"use client"

import DatePicker from "react-datepicker";
import { Button } from "./components/button";
import { Headline } from "./components/headline";
import { Subline } from "./components/subline";
import { useState } from "react";
import { useFetchPictureMutation } from "./hooks/useFetchPictureMutation";

export default function Home() {
  const currenDate = new Date()
  const [date, setDate] = useState(currenDate)
  const pictureMutation = useFetchPictureMutation()
  function handleDatePickerChange(date: Date | null) {
    if (date != null) {
      setDate(date);
    }
  }

  console.log("DB URL", process.env.DATABASE_URL);
  async function onSubmit(date: Date) {
    const data = await pictureMutation.mutateAsync(date);

    if (!data || !data.url) {
      throw new Error("query returned undefined url");
    }
    window.location.href = data?.url;
  }

  return (
    <div className="bg-indigo-50 flex justify-center items-center min-h-screen flex-col mt-4">
      <Headline />
      <Subline />
      <div className="flex items-center relative">
        <div className="mr-4 w-40">
          <DatePicker
            selected={date}
            onChange={handleDatePickerChange}
            dateFormat="yyyy-MM-dd"
            className="text-black w-40 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            calendarClassName="shadow-lg rounded z-50 bg-white"
            wrapperClassName="w-auto"
          />
        </div>
        <Button
          children={<span>submit</span>}
          onClick={() => onSubmit(date)}
        />
      </div>
    </div>
  );
}
