import { useCallback, useEffect, useRef, useState } from "react";

function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef<Function>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function Count() {
  const [time, setTime] = useState([
    Math.floor(
      (new Date("2023-08-26 20:00").getTime() - new Date().getTime()) /
        1000 /
        60 /
        60 /
        24
    ),
    Math.floor(
      ((new Date("2023-08-26 20:00").getTime() - new Date().getTime()) /
        1000 /
        60 /
        60) %
        24
    ),
    Math.floor(
      ((new Date("2023-08-26 20:00").getTime() - new Date().getTime()) /
        1000 /
        60) %
        60
    ),
    Math.floor(
      ((new Date("2023-08-26 20:00").getTime() - new Date().getTime()) / 1000) %
        60
    ),
  ]);
  const setGap = useCallback(() => {
    const gap = new Date("2023-08-26 20:00").getTime() - new Date().getTime();
    setTime([
      Math.floor(gap / 1000 / 60 / 60 / 24),
      Math.floor((gap / 1000 / 60 / 60) % 24),
      Math.floor((gap / 1000 / 60) % 60),
      Math.floor((gap / 1000) % 60),
    ]);
  }, []);
  useInterval(() => setGap(), 1000);
  return (
    <div className="flex gap-3 lg:gap-5">
      <div>
        <span className="countdown font-mono text-xl lg:text-4xl">
          {/* @ts-ignore */}
          <span style={{ "--value": time[0] }}></span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono text-xl lg:text-4xl">
          {/* @ts-ignore */}
          <span style={{ "--value": time[1] }}></span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono text-xl lg:text-4xl">
          {/* @ts-ignore */}
          <span style={{ "--value": time[2] }}></span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-xl lg:text-4xl">
          {/* @ts-ignore */}
          <span style={{ "--value": time[3] }}></span>
        </span>
        sec
      </div>
    </div>
  );
}
