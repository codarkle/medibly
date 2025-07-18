import React from "react";

type MonthPickerProps = {
  value?: string; // yyyy-MM
  onChange?: (value: string) => void;
};

const MonthPicker: React.FC<MonthPickerProps> = ({ value, onChange }) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = String(now.getMonth() + 1).padStart(2, "0");
  const maxMonth = `${currentYear}-${currentMonth}`;

  // If no value passed, use current month
  const defaultValue = value ?? maxMonth;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      type="month"
      value={defaultValue}
      onChange={handleChange}
      max={maxMonth}  
      className="
        border border-gray-300 rounded-md px-4 py-2
        text-gray-800 text-base
        focus:outline-none focus:ring-2 focus:ring-blue-500
        appearance-none
      "
      style={{ 
        MozAppearance: "textfield",
      }}
    />
  );
};

export default MonthPicker;
