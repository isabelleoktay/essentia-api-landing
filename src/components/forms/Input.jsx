const Input = ({
  label,
  placeholder,
  type = "text",
  labelColor = "white",
  value,
  onChange,
  className,
}) => {
  const labelColorClasses = {
    white: "text-offwhite",
    coral: "text-coral",
    blue: "text-brightblue",
    black: "text-blueblack",
    gray: "text-gray-400",
  };

  const labelClasses = `text-sm ${labelColorClasses[labelColor]}`;

  return (
    <div
      className={`flex w-full ${
        type === "checkbox" ? "items-center gap-2" : "flex-col gap-2"
      }`}
    >
      {/* Render the label */}
      {type !== "checkbox" && label && (
        <label className={labelClasses}>{label}</label>
      )}
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-2 text-sm text-offwhite bg-blueblack border border-gray-500 rounded-md focus:outline-none resize-none ${className}`}
          rows={4} // Default number of rows for the textarea
        ></textarea>
      ) : type === "checkbox" ? (
        <>
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="
                relative peer shrink-0
                appearance-none w-4 h-4 border border-blueblack rounded-sm bg-offwhite
                checked:bg-blueblack checked:border-blueblack
                focus:outline-none
                disabled:border-steel-400 disabled:bg-steel-400"
          />
          {label && <label className={labelClasses}>{label}</label>}
          <svg
            className="
                absolute 
                w-4 h-4 
                hidden peer-checked:block
                pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f7f8f9"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-2 text-sm text-offwhite bg-blueblack border border-gray-500 rounded-md focus:outline-none ${className}`}
        />
      )}
    </div>
  );
};

export default Input;
