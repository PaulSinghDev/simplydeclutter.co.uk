import { useInput } from "hooks/useInput.hook";
import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type: "text" | "number" | "email";
  initialValue: string | number;
}

const Input: React.FC<InputProps> = ({ type, initialValue, ...rest }) => {
  const { value, handleInput, isValid } = useInput(type, initialValue);

  const handleChangeEvent: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleInput(e.currentTarget.value);
  };

  return (
    <StyledInput
      type={type}
      value={value}
      onChange={handleChangeEvent}
      data-valid={isValid}
      {...rest}
    />
  );
};

const StyledInput = styled.input``;

export { Input };
