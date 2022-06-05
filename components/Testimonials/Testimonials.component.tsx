import { siteInfo } from "data";
import {
  HTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

export interface Testimonial {
  author: string;
  comment: string;
  platform: string;
  url: string;
}

interface TestimonialsProps extends HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  ...rest
}) => {
  // Set a state for our active slide
  const [activeSlide, setActiveSlide] = useState<number>(0);
  // Get the reference to the active slide
  const activeSlideRef = useRef<HTMLLIElement>(null);
  // Effect to handle slide changing
  useEffect(() => {
    if (activeSlideRef.current) {
    }
  }, [activeSlide]);

  const handleSlideChange: MouseEventHandler<HTMLButtonElement> = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    const associatedSlide = Number(e.currentTarget.dataset.index);
    if (associatedSlide !== activeSlide) {
      setActiveSlide(associatedSlide);
    }
  };

  return (
    <StyledTestimonials className="testimonials__wrapper" {...rest}>
      <ul className="testimonials__list">
        {testimonials.map((testimonial, i) => (
          <li
            ref={i === activeSlide ? activeSlideRef : null}
            className="testimonial__item"
            key={`${Math.random().toString(36).substring(2, 7)}`}
            data-index={i}
            data-active={activeSlide === i}
            aria-hidden={i !== activeSlide}
            aria-label={`Testimonial for ${siteInfo.siteName} by ${testimonial.author} on ${testimonial.platform}`}
          >
            <blockquote>
              <p>{testimonial.comment}</p>
              <footer>
                <a
                  href={testimonial.url}
                  title={`Read more about ${testimonial.author}'s comment on ${testimonial.platform}`}
                >
                  Read more
                </a>
                <cite>{testimonial.author}</cite>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
      <ul className="testimonials__nav">
        {testimonials.map((_t, i) => (
          <li key={`${Math.random().toString(36).substring(2, 7)}`}>
            <button
              data-active={i === activeSlide}
              className="testimonial__nav-button"
              data-index={i}
              aria-label={`Slide to testimonial ${i}`}
              onClick={handleSlideChange}
              disabled={i === activeSlide}
            ></button>
          </li>
        ))}
      </ul>
    </StyledTestimonials>
  );
};

const StyledTestimonials = styled.div`
  padding: 24px;
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

  .testimonials__list {
    height: 100%;
    margin: auto 0;
    width: 100%;

    .testimonial__item {
      &[aria-hidden="true"] {
        display: none;
      }

      > blockquote {
        margin: 24px 0;
        color: var(--purple);

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
            left: 0;
          }

          &::after {
            right: 0;
          }
        }

        > footer {
          display: flex;
          justify-content: space-between;

          > a {
            font-weight: bold;
            margin-right: 8px;
            text-decoration: underline;
          }
          > cite {
            margin-left: 8px;
          }
        }
      }
    }
  }

  .testimonials__nav {
    display: flex;
    margin: 24px;
    justify-content: center;
    margin-top: auto;

    .testimonial__nav-button {
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

        &::after {
          background: var(--off-black);
        }
      }
    }
  }
`;

export { Testimonials };
