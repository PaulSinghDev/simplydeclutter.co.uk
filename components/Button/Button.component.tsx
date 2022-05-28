import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => <StyledButton {...props} />;

const StyledButton = styled.button``;

export { Button };
