interface ColorProps {
  color: "blue" | "red";
  selectedColor: "blue" | "red";
  onColorChange: (color: "blue" | "red") => void;
}

const colorClasses: Record<ColorProps["color"], string> = {
  blue: "bg-blue-300",
  red: "bg-red-400",
};

const Color: React.FC<ColorProps> = ({
  color,
  selectedColor,
  onColorChange,
}) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        name="color"
        className="hidden"
        onChange={() => onColorChange(color)}
        checked={selectedColor === color}
      />
      <span
        className={`w-5 h-5 rounded-full flex items-center justify-center ${
          selectedColor === color ? "ring-2 ring-gray-800" : ""
        }`}
      >
        <span className={`w-4 h-4 rounded-full ${colorClasses[color]}`}></span>
      </span>
    </label>
  );
};

export default Color;
