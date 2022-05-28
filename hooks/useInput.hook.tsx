import { useEffect, useState } from "react";

const useInput = (_type: "text" | "number", _value: string | number) => {
  const [value, setValue] = useState<string | number>(_value);

  // Default value
  useEffect(() => {
    if (value === _value) {
      setValue(_value);
    }
  });

  const handleInput = (inputValue: string) => {
    if (inputValue !== _value) {
      setValue(inputValue);
    }
  };

  return { value, handleInput };
};

export { useInput };
