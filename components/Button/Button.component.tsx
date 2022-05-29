import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonStyle?: "primary" | "secondary" | "tertiary" | "transparent";
}

const Button: React.FC<ButtonProps> = ({
  buttonStyle = "primary",
  ...rest
}) => <StyledButton buttonStyle={buttonStyle} {...rest} />;

const StyledButton = styled.button<{ buttonStyle: string }>`
  ${({ buttonStyle }) => {
    let bgColor;
    let color;
    switch (buttonStyle) {
      case "primary":
        bgColor = "var(--light-purple)";
        color = "#fff";
        break;
      case "secondary":
        bgColor = "var(--purple)";
        color = "#fff";
        break;
      case "tertiary":
        bgColor = "var(--blue)";
        color = "#fff";
        break;
      case "transparent":
        bgColor = "transparent";
        color = "inherit";
      default:
        break;
    }
    return `
        background-color: ${bgColor};
        color: ${color};
        padding: 12px 24px;
        border-radius: 24rem;
        font-weight: bold;
        transition: 0.3s ease;
        &:hover {
            background-color: var(--off-black);
            color: var(--off-white-pink);
        }
      `;
  }}
`;

export { Button };
