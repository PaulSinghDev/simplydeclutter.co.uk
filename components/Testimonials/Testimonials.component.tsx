import { ComponentType, HTMLAttributes } from "react";
import styled from "styled-components";
import { Slider } from "components/Slider";
import { TestimonialInterface } from "types";

interface TestimonialsProps extends HTMLAttributes<HTMLDivElement> {
  testimonials: TestimonialInterface[];
}

const Testimonial: React.FC<TestimonialInterface> = ({
  comment,
  url,
  platform,
  author,
}) => {
  return (
    <blockquote>
      <p>{comment}</p>
      <footer>
        <a
          href={url}
          title={`Read more about ${author}'s comment on ${platform}`}
        >
          Read more
        </a>
        <cite>{author}</cite>
      </footer>
    </blockquote>
  );
};

const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  ...rest
}) => {
  return (
    <StyledTestimonials
      className="testimonials__wrapper"
      slides={testimonials.map((testimonial) => () => (
        <Testimonial {...testimonial} />
      ))}
      {...rest}
    />
  );
};

const StyledTestimonials = styled(Slider)`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  > .slider__list {
    height: 100%;
    margin: auto 0;
    width: 100%;
    display: flex;
    position: relative;

    .slide__item {
      text-align: center;
      flex-basis: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      transform: translateX(-100%);
      opacity: 0;
      visibility: hidden;
      z-index: -1;
      transition: transform 0.5s ease-in-out, opacity 0.3s ease,
        visibility 0s 0.5s, z-index 0s 0.5s;

      &.active {
        opacity: 1;
        visibility: visible;
        z-index: 1;
        transform: translateX(0);
        transition: transform 0.5s ease-in-out 0.1s, opacity 0.3s ease 0.1s,
          visibility 0s 0s, z-index 0s 0s;
      }

      > blockquote {
        margin: 24px auto;
        color: var(--purple);
        max-width: 900px;
        display: inline-block;

        > p {
          font-weight: bold;
          text-align: center;
          font-size: 1.2rem;
          position: relative;
          display: block;
          max-width: 80%;
          margin: 24px auto;

          &::before,
          &::after {
            position: absolute;
            content: "“";
            font-size: 2rem;
            height: 20px;
            top: 0;
            transform: translateY(-50%);
            content: "“";
          }

          &::before {
            left: -0.5rem;
          }

          &::after {
            right: -0.5rem;
          }
        }

        > footer {
          display: flex;
          justify-content: space-around;
          margin: auto;
          white-space: nowrap;

          > a {
            color: var(--purple);
            font-weight: bold;
            margin-right: 8px;
            text-decoration: underline;

            &:hover {
              color: var(--off-white);
            }
          }
          > cite {
            margin-left: 8px;
          }
        }
      }
    }
  }

  .slider__nav {
    display: flex;
    margin: 24px;
    justify-content: center;
    margin-top: auto;

    .slide__nav-button {
      position: relative;
      width: 30px;
      height: 30px;

      &::after {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 5px;
        left: 5px;
        background: var(--purple);
        content: "";
        transition: 0.3s ease;
      }

      &:hover {
        &::after {
          background-color: var(--off-black);
        }
      }

      &[disabled] {
        opacity: 0.3;
        cursor: initial;

        &::after {
          background: var(--off-black);
        }
      }
    }
  }
`;

export { Testimonials };
