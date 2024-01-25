"use client";

import Countdown from "react-countdown";

const endingDate = new Date("2024-02-11");

const CountDown = () => {
  return (
    <Countdown date={endingDate} className="text-4xl sm:text-6xl font-bold text-orange-500 tracking-widest"/>
  )
}

export default CountDown