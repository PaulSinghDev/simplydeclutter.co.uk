import React, { forwardRef, HTMLAttributes, MouseEventHandler } from "react";
import styled from "styled-components";

interface CtaInterface
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  label: string;
  href?: string;
  callback?: MouseEventHandler;
}

type TextProps = {
  color?: string;
  size?: number;
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string[];
  cta?: CtaInterface;
  background?: string;
  text?: TextProps;
  shadow?: boolean;
  image?: string;
  ref?: React.Ref<any>;
}

const Cta: React.FC<CtaInterface> = ({ href, label, callback, ...rest }) => {
  if (!!callback) {
    return (
      <button onClick={callback} {...rest}>
        {label}
      </button>
    );
  } else {
    return (
      <a href={href as string} {...rest}>
        {label}
      </a>
    );
  }
};

const Card: React.FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
  ({ title, content, cta, image, ...rest }, ref) => {
    return (
      <StyledCard ref={ref} {...rest}>
        {!!image ? <img src={image} /> : null}
        <h3>{title}</h3>
        {content.map((line) => (
          <p key={Math.random().toString(36).substring(2, 7)}>{line}</p>
        ))}
        {!!cta ? <Cta {...cta} /> : null}
      </StyledCard>
    );
  }
);

const StyledCard = styled.div<{
  background?: string;
  text?: TextProps;
  shadow?: boolean;
}>`
  ${({ background, text, shadow }) => `
    background-color: ${!!background ? `${background}` : "transparent"};
    padding: 24px;
    border-radius: 24px;
    margin: 16px;
    max-width: 320px;
    color: ${!!text && !!text.color ? text.color : "var(--off-black)"};
    ${!!shadow ? "box-shadow: 0 0 0.8rem rgba(0,0,0, 0.1);" : ""}

    img {
      height: 170px;
      width: 100%;
      border-radius: 18px;
      margin-bottom: 12px;
      opacity: 0.85;
      object-fit: cover;
    }

    h3 {
      font-size: 1.5rem;
      margin: 8px 0;
    }

    p {
      margin-top: 0;
      margin-bottom: 8px;
    }

    @media screen and (min-width: 400px) {
      min-width: 320px;
      width: 320px;
      flex-grow: 0;
      flex-shrink: 0;
    }
  `}
`;

export { Card };
