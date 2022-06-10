import React, { HTMLAttributes, MouseEventHandler } from "react";
import styled from "styled-components";

interface CtaInterface
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  label: string;
  href?: string;
  callback?: MouseEventHandler;
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string[];
  cta?: CtaInterface;
  background?: "pink" | "blue";
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

const Card: React.FC<CardProps> = ({ title, content, cta, ...rest }) => {
  return (
    <StyledCard {...rest}>
      <h3>{title}</h3>
      {content.map((line) => (
        <p key={Math.random().toString(36).substring(2, 7)}>{line}</p>
      ))}
      {!!cta ? <Cta {...cta} /> : null}
    </StyledCard>
  );
};

const StyledCard = styled.div<{ background?: string }>`
  ${({ background }) => `
    background-color: ${!!background ? `var(--${background})` : "transparent"};
    padding: 16px;
    border-radius: 24px;
    margin: 16px;
    color: #fff;

    h3 {
      font-size: 1.5rem;
      margin: 8px 0;
    }

    p {
      margin-top: 0;
      margin-bottom: 8px;
    }
  `}
`;

export { Card };
