import { HTMLAttributes } from "react";
import styled from "styled-components";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {}

const Section: React.FC<SectionProps> = ({ ...rest }) => (
  <StyledSection {...rest} />
);

const StyledSection = styled.section`
  width: 100%;
  padding: 72px 24px;

  &.image-with-text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: transparent;

    > .image {
      width: 100%;
      max-width: 400px;
      margin: 14px;

      picture {
        display: inline-flex;
        overflow: hidden;
        max-width: 100%;
        border-radius: 20px;
        justify-content: center;
        align-items: center;

        > img {
          border-radius: 20px;
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
    }

    > .text {
      color: var(--purple);
      text-align: center;
      max-width: 400px;
      margin: 24px;

      button {
        margin: 24px 0;
      }
    }
  }
`;

export { Section };
