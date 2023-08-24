import { useCallback, useEffect, useRef, useState } from "react";

const THE_TIME: number = Date.parse("2023-08-26T20:00+09:00");

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
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function Count({now}: {now: number}) {
  const [time, setTime] = useState([
    Math.max(
      0,
      Math.floor(
        (THE_TIME - now) /
          1000 / 60 / 60 / 24
      )
    ),
    Math.max(
      0,
      Math.floor(
        (THE_TIME - now) /
          1000 / 60 / 60 % 24
      )
    ),
    Math.max(
      0,
      Math.floor(
        (THE_TIME - now) /
          1000 / 60 % 60
      )
    ),
    Math.max(
      0,
      Math.floor(
        (THE_TIME - now) /
          1000 % 60
      )
    ),
  ]);
  const setGap = useCallback(() => {
    const gap = THE_TIME - Date.now();
    setTime([
      Math.max(0, Math.floor(gap / 1000 / 60 / 60 / 24)),
      Math.max(0, Math.floor(gap / 1000 / 60 / 60 % 24)),
      Math.max(0, Math.floor(gap / 1000 / 60 % 60)),
      Math.max(0, Math.floor(gap / 1000 % 60)),
    ]);
  }, []);
  useInterval(setGap, 1000);
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
