import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {}

const Modal: React.FC<ModalProps> = (props) => <StyledModal {...props} />;

const StyledModal = styled.aside``;

export { Modal };
