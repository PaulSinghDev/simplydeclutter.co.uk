import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ListProps extends HTMLAttributes<HTMLUListElement> {}

const List: React.FC<ListProps> = (props) => <StyledList {...props} />;

const StyledList = styled.ul``;

export { List };
