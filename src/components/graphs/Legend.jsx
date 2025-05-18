const Legend = ({ data, className }) => {
  return (
    <div className={`flex flex-col justify-start ${className}`}>
      <ul className="space-y-2">
        {data.map((d, i) => (
          <li key={i} className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: d.color }}
            />
            <span className="text-offwhite font-medium">{d.label}</span>
            <span className="text-offwhite/50">
              {typeof d.value === "number"
                ? `${Math.round(d.value * 100)}%`
                : d.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Legend;
