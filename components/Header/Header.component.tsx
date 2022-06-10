import { useDeviceSize } from "hooks";
import { HTMLAttributes } from "react";
import styled from "styled-components";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  fullHeight?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fullHeight, ...rest }) => {
  return <StyledHeader fullHeight={fullHeight} {...rest}></StyledHeader>;
};

const StyledHeader = styled.header<{ fullHeight?: boolean }>`
  ${({ fullHeight: _fullHeight }) => {
    const heightToUse = _fullHeight === true ? `calc(100 * var(--vh))` : "auto";
    return `
        height: ${heightToUse};
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 12px;
        
        h1 {
            padding: 12px;
            text-align: center;
            opacity: 0.9;
            font-size: 2rem;
            font-weight: 100;
            text-align: center;
        }

        picture {
            text-align: center;
        }
        
        img {
            max-width: calc(100% - 24px);
            margin: auto;
            width: 400px;
        }

        button {
            margin-top: 2rem;
        }

    `;
  }}
`;

export { Header };
