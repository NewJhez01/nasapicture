"use client"

import DatePicker from "react-datepicker";
import { Button } from "./components/button";
import { Headline } from "./components/headline";
import { Subline } from "./components/subline";
import { useState } from "react";
import { useFetchPictureForDate } from "./hooks/useFetchPictureForData";

export default function Home() {
  const currenDate = new Date()
  const [date, setDate] = useState(currenDate)
  function handleDatePickerChange(date: Date | null) {
    if (date != null) {
      setDate(date);
    }
  }

  function onSubmit() {
    const url = useFetchPictureForDate(date)
    window.location.href = url;
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
          onClick={onSubmit}
        />
      </div>
    </div>
  );
}
