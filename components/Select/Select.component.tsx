import { HTMLAttributes } from "react";
import styled from "styled-components";

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {}

const Select: React.FC<SelectProps> = (props) => <StyledSelect {...props} />;

const StyledSelect = styled.select``;

export { Select };
