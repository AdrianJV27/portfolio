import { useState } from "react";
import { FaRegClock } from "react-icons/fa";

export function CurrentTime() {
    const [time, setTime] = useState<string>()

  setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-AU', {
        timeZone: 'Australia/Sydney'}).toLocaleUpperCase())
    }, 1000);
    
    return <span className="flex items-center gap-1.5"><FaRegClock className=""/>{time}</span>
}