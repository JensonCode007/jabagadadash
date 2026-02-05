"use client";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const eventDate = new Date("2026-02-19T00:00:00").getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center font-cormorant">
      <div className="flex items-center">
        <div className="flex flex-col items-center rounded-2xl p-4 md:p-4 min-w-[80px] md:min-w-[100px]">
          <span className="text-3xl md:text-4xl font-bold text-[#efdb92]">
            {timeLeft.days}
          </span>
          <span className="text-sm md:text-base text-gray-400 mt-2">Days</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="w-1 h-1 bg-[#efdb92] rounded-full"></span>
          <span className="w-1 h-1 bg-[#efdb92] rounded-full"></span>
        </div>
        <div className="flex flex-col items-center rounded-2xl p-4 md:p-4 min-w-[80px] md:min-w-[100px]">
          <span className="text-3xl md:text-4xl font-bold text-[#efdb92]">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className="text-sm md:text-base text-gray-400 mt-2">Hours</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="w-1 h-1 bg-[#efdb92] rounded-full"></span>
          <span className="w-1 h-1 bg-[#efdb92] rounded-full"></span>
        </div>

        <div className="flex flex-col items-center rounded-2xl p-4 md:p-4 min-w-[80px] md:min-w-[100px]">
          <span className="text-3xl md:text-4xl font-bold text-[#efdb92]">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className="text-sm md:text-base text-gray-400 mt-2">Minutes</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="w-1 h-1 bg-[#efdb92] rounded-full"></span>
          <span className="w-1 h-1 bg-[#efdb92] rounded-full"></span>
        </div>

        <div className="flex flex-col items-center rounded-2xl p-4 md:p-4 min-w-[80px] md:min-w-[100px]">
          <span className="text-3xl md:text-4xl font-bold text-[#efdb92]">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="text-sm md:text-base text-gray-400 mt-2">Seconds</span>
        </div>
      </div>
    </div>
  );
}
