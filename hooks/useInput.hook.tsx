import { useEffect, useState } from "react";

const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const TEXT_REGEX = /^[\w\d\s,()./*%$@£!_&-]+$/;
const NUMBER_REGEX = /^[.,\d]+$/;

const useInput = (
  _type: "text" | "number" | "email",
  _value: string | number,
  required?: boolean
) => {
  const [value, setValue] = useState<string | number>(_value);
  const [isValid, setIsValid] = useState<boolean>(required !== true);

  // Default value
  useEffect(() => {
    if (value === _value) {
      setValue(_value);
    }
  });

  const handleInput = (inputValue: string) => {
    if (inputValue !== _value) {
      validateInput(inputValue);
      setValue(inputValue);
    }
  };

  const validateInput = (toValidate: string | number) => {
    if (_type === "text") {
      setIsValid(TEXT_REGEX.test(`${toValidate}`));
    } else if (_type === "email") {
      setIsValid(EMAIL_REGEX.test(`${toValidate}`));
    } else {
      setIsValid(NUMBER_REGEX.test(`${toValidate}`));
    }
  };

  return { value, handleInput, isValid, validateInput };
};

export { useInput };
