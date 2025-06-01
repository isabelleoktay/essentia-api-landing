import React, { useEffect, useState } from "react";

const BpmCircle = ({ data = { bpm: 100 }, color = "#e53845" }) => {
  const [ripples, setRipples] = useState([]);

  // Calculate the interval for the ripple effect based on BPM
  const rippleInterval = (60 / data.bpm) * 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples((prev) => [...prev, Date.now()]);
    }, rippleInterval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [rippleInterval]);

  // Remove ripples after animation ends
  useEffect(() => {
    const cleanup = setInterval(() => {
      setRipples((prev) => prev.filter((time) => Date.now() - time < 2000)); // Keep ripples for 2 seconds
    }, 100);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center w-24 h-24 shrink-0 grow-0 rounded-full m-8"
      style={{
        backgroundColor: color,
      }}
    >
      {/* Ripples */}
      {ripples.map((time) => (
        <span
          key={time}
          className="absolute w-full h-full aspect-square rounded-full border opacity-50 animate-[ripple_2s_ease-out]"
          style={{
            borderColor: color,
          }}
        ></span>
      ))}

      {/* BPM Text */}
      <span className="text-white font-bold z-10">{data.bpm}</span>

      {/* Ripple Animation */}
      <style>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BpmCircle;
