const RoundedFrameCard = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      {/* Frame background with clipped border */}
      <svg className="absolute inset-0 w-full h-full z-0">
        <defs>
          <clipPath id="clip-frame" clipPathUnits="objectBoundingBox">
            <path
              d="
                  M 0.05,0
                  Q 0,0 0,0.05
                  L 0,0.95
                  Q 0,1 0.05,1
                  L 0.25,1
                  L 0.25,0.95
                  L 0.05,0.95
                  L 0.05,0.05
                  L 0.25,0.05
                  L 0.25,0
                  
                  L 0.75,0
                  L 0.75,0.05
                  L 0.95,0.05
                  L 0.95,0.95
                  L 0.75,0.95
                  L 0.75,1
                  L 0.95,1
                  Q 1,1 1,0.95
                  L 1,0.05
                  Q 1,0 0.95,0
                  Z
                "
            />
          </clipPath>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="20"
          ry="20"
          fill="none"
          stroke="#141416"
          strokeWidth="4"
          clipPath="url(#clip-frame)"
        />
      </svg>

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default RoundedFrameCard;
