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
      <div>
        <DatePicker
          className="text-black"
          selected={date}
          onChange={handleDatePickerChange}
          dateFormat="yyyy-MM-dd"
        />
        <Button
          children={<span>submit</span>}
          onClick={() => onSubmit(date)}
        />
      </div>
    </div>
  );
}
