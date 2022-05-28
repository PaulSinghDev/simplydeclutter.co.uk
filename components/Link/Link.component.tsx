import styled from "styled-components";
import NextLink from "next/link";
import { HTMLAttributes } from "react";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {}

const Link: React.FC<LinkProps> = (props) => <StyledLink {...props} />;

const StyledLink = styled.a``;

export { Link };
