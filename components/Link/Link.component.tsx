import styled from "styled-components";
import NextLink from "next/link";
import { HTMLAttributes } from "react";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  url: string;
}

const Link: React.FC<LinkProps> = ({ url, children, ...rest }) => (
  <NextLink href={url} passHref>
    <StyledLink {...rest}>{children}</StyledLink>
  </NextLink>
);

const StyledLink = styled.a``;

export { Link };
