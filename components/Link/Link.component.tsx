import styled from "styled-components";
import NextLink from "next/link";
import { HTMLAttributes } from "react";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  url: string;
  asButton?: boolean;
}

const Link: React.FC<LinkProps> = ({
  asButton = false,
  url,
  children,
  ...rest
}) => (
  <NextLink href={url} passHref>
    <StyledLink asButton={asButton} {...rest}>
      {children}
    </StyledLink>
  </NextLink>
);

const StyledLink = styled.a<{ asButton: boolean }>`
  ${({ asButton }) => {
    const buttonStyle = `
      background-color: var(--blue);
      color: #fff;
      font-weight: bold;
      padding: 12px 24px;
      border-radius: 24px;
      margin: 8px;
      transition: 0.3s ease;

      &:hover {
        background-color: var(--off-black);
      }
    `;
    const linkStyle = ``;
    return asButton ? buttonStyle : linkStyle;
  }}
`;

export { Link };
