import { HTMLAttributes } from "react";
import styled from "styled-components";

interface NavProps extends HTMLAttributes<HTMLDivElement> {}

const Nav: React.FC<NavProps> = (props) => <StyledNav {...props} />;

const StyledNav = styled.nav``;

export { Nav };
