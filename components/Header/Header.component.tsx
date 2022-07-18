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
    const heightToUse =
      _fullHeight === true
        ? `calc(100 * var(--vh) - var(--nav-height))`
        : "auto";
    return `
      height: ${heightToUse};
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 12px;
      padding-top: var(--nav-height);
        
        h1 {
            padding: 12px;
            text-align: center;
            opacity: 0.9;
            font-size: 2rem;
            font-weight: 100;
            text-align: center;
        }

        .hero-image {
            text-align: center;
            max-width: 400px;
            width: 80%;
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
