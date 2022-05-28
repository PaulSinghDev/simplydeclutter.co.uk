import { HTMLAttributes } from "react";
import styled from "styled-components";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = (props) => <StyledCard {...props} />;

const StyledCard = styled.div``;

export { Card };
