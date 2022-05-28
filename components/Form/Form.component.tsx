import { FormEventHandler, HTMLAttributes } from "react";
import styled from "styled-components";

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  submitHandler: FormEventHandler;
}

const Form: React.FC<FormProps> = ({ submitHandler, ...rest }) => {
  return <StyledForm onSubmit={submitHandler} {...rest} />;
};

const StyledForm = styled.form``;

export { Form };
