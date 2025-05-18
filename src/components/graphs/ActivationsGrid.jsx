const ActivationsGrid = ({ data, className }) => {
  return (
    <div
      className={`grid grid-cols-8 auto-rows-fr gap-4 items-stretch w-full h-full ${className}`}
    >
      {data.map((d) => {
        const isActive = typeof d.activation === "number";

        return (
          <div
            key={d.name}
            className={`w-full h-full flex items-center justify-center rounded-xl text-sm text-offwhite text-center p-2 font-medium font-sans transition duration-300 relative overflow-hidden`}
          >
            {/* Background layer with dynamic opacity */}
            <div
              className={`absolute inset-0 rounded-xl z-0 ${
                isActive
                  ? "bg-linear-to-b from-brightblue to-coral"
                  : "bg-offwhite/25"
              }`}
              style={isActive ? { opacity: d.activation / 100 } : {}}
            />
            {/* Content layer */}
            <div className="flex flex-col items-center justify-center w-full z-10 relative">
              <div className="lowercase">{d.name}</div>
              {isActive && (
                <div className="text-xs opacity-50">{d.activation}%</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivationsGrid;
