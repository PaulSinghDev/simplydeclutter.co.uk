import { HTMLAttributes } from "react";
import styled from "styled-components";

interface OptionProps extends HTMLAttributes<HTMLOptionElement> {}

const Option: React.FC<OptionProps> = (props) => <StyledOption {...props} />;

const StyledOption = styled.option``;

export { Option };
