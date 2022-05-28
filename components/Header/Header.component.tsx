import { HTMLAttributes } from "react";
import styled from "styled-components";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = (props) => <StyledHeader {...props} />;

const StyledHeader = styled.header``;

export { Header };
