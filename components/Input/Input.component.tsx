import { HTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends HTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => <StyledInput {...props} />;

const StyledInput = styled.input``;

export { Input };
