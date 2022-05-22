import { HTMLAttributes } from "react";
import styled from "styled-components";

interface FormProps extends HTMLAttributes<HTMLFormElement> {}

const Form: React.FC<FormProps> = (props) => <StyledForm {...props} />;

const StyledForm = styled.form``;

export { Form };
