import React from "react";
import TextHighlight from "../text/TextHighlight";

const WHITE_KEYS = ["C", "D", "E", "F", "G", "A", "B"];
const BLACK_KEYS = [
  { note: "C#", leftIndex: 0 },
  { note: "D#", leftIndex: 1 },
  { note: "F#", leftIndex: 3 },
  { note: "G#", leftIndex: 4 },
  { note: "A#", leftIndex: 5 },
];

const keyGradient = (
  <linearGradient id="highlight-gradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#e53845" />
    <stop offset="100%" stopColor="#320bff" />
  </linearGradient>
);

const PianoChart = ({ data, className }) => {
  const keyW = 32;
  const keyH = 120;
  const gap = 2;
  const highlight = data?.key;
  const SVG_W = keyW * 7;
  const SVG_H = keyH;

  const topPadding = 50;

  return (
    <div
      className={`flex-1 w-full h-full flex flex-col items-center justify-center p-2 ${className}`}
    >
      <div className="w-full h-full relative">
        {/* Padding spacer */}
        <div style={{ height: topPadding }} />

        {/* SVG container that fills the rest */}
        <div
          className="w-full"
          style={{ height: `calc(100% - ${topPadding}px)` }}
        >
          <div className="w-full h-full aspect-[224/120]">
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full"
            >
              <defs>{keyGradient}</defs>

              {WHITE_KEYS.map((note, i) => (
                <rect
                  key={note}
                  x={i * keyW + gap / 2}
                  y={0}
                  width={keyW - gap}
                  height={keyH}
                  rx={2}
                  fill={
                    note === highlight ? "url(#highlight-gradient)" : "#f7f8f9"
                  }
                />
              ))}

              {BLACK_KEYS.map(({ note, leftIndex }) => (
                <rect
                  key={note}
                  x={(leftIndex + 1) * keyW - 20 / 2 + gap / 2}
                  y={0}
                  width={20 - gap}
                  height={70}
                  rx={2}
                  fill={
                    note === highlight ? "url(#highlight-gradient)" : "#141416"
                  }
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
      <TextHighlight
        color="multigradient"
        className="font-sans font-semibold text-2xl mt-2 capitalize"
      >
        {data?.key} {data?.scale}
      </TextHighlight>
    </div>
  );
};

export default PianoChart;
