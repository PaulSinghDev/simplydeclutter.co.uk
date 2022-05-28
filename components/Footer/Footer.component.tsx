import { HTMLAttributes } from "react";
import styled from "styled-components";

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = (props) => <StyledFooter {...props} />;

const StyledFooter = styled.div``;

export { Footer };
