const BinaryBarChart = ({
  data,
  gradientId = "arrangement-gradient",
  className,
}) => {
  return (
    // make this container fill its grid‐cell
    <div className={`flex flex-row w-full h-full gap-4 ${className}`}>
      {data.map(({ label, value }) => {
        const pct = Math.min(Math.max(value, 0), 100);
        // since our viewBox is 100×100, the "triangle height" is just pct
        const triH = pct;

        return (
          // each bar gets equal flex‐1, so they all spread evenly
          <div key={label} className="flex flex-col justify-end items-center">
            <svg
              // grow to fill available space above the label
              className="w-full flex-1"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e53845" />
                  <stop offset="100%" stopColor="#320bff" />
                </linearGradient>
              </defs>
              {/* background rounded rect */}
              <path
                d="
                    M0,8
                    A8,8 0 0,1 8,0
                    H92
                    A8,8 0 0,1 100,8
                    V100
                    H0
                    Z
                "
                fill="rgb(247,248,249,0.1)"
              />
              {/* triangle/bar */}
              <polygon
                points={`0,100 100,100 50,${100 - triH}`}
                fill={`url(#${gradientId})`}
              />
            </svg>
            <div className="mt-2 text-offwhite font-sans font-medium">
              {label} <span className="opacity-50">{pct}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BinaryBarChart;
