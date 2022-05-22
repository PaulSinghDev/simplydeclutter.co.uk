import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {}

const ListItem: React.FC<ListItemProps> = (props) => (
  <StyledListItem {...props} />
);

const StyledListItem = styled.li``;

export { ListItem };
