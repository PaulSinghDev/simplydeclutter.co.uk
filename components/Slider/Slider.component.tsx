import { siteInfo } from "data";
import {
  HTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  ComponentType,
  FC,
} from "react";
import styled from "styled-components";

const isSlideInterface = (slide: any): slide is SlideInterface =>
  !!(slide as SlideInterface).component;

export interface SlideInterface {
  component: ComponentType;
  wrapperAttributes?: HTMLAttributes<HTMLLIElement>;
}

interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  slides: ComponentType[] | SlideInterface[];
}

const Slider: React.FC<SliderProps> = ({ slides, ...rest }) => {
  // Set a state for our active slide
  const _wrapper = useRef<any>();
  const _slides = useRef<any>([]);
  const _buttons = useRef<any>([]);

  useEffect(() => {
    // Set the disabled attr on the first button
    !!_buttons?.current[0] &&
      _buttons?.current.some(
        (button: any) =>
          button.dataset.index === "0" && button.setAttribute("disabled", "")
      );

    // Set the height on the wrapper
    if (_slides.current?.length > 0 && !!_wrapper?.current) {
      const height = _slides.current.reduce((output: number, slide: any) => {
        if (slide.clientHeight > output) {
          output = slide.clientHeight;
        }
        return output;
      }, 0);
      _wrapper.current.style.height = `${height + 24}px`;
    }
  });

  const handleSlideChange: MouseEventHandler<HTMLButtonElement> = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    // Get the index of the slide associated with this button
    const associatedSlide = Number(e.currentTarget.dataset.index);

    _slides.current.some((slide: Element, i: number) =>
      i === associatedSlide
        ? (slide.classList.add("active"),
          slide.setAttribute("aria-hidden", "false"))
        : (slide.classList.remove("active"),
          slide.setAttribute("aria-hidden", "true"))
    );

    _buttons.current.some((buttons: Element, i: number) => {
      if (i === associatedSlide) {
        buttons.setAttribute("disabled", "");
      } else {
        buttons.removeAttribute("disabled");
      }
    });
  };

  return (
    <StyledSlider className="slider__wrapper" {...rest}>
      <ul className="slider__list" ref={_wrapper}>
        {slides.map((Slide: ComponentType | SlideInterface, i: number) =>
          isSlideInterface(Slide) ? (
            <li
              className={i === 0 ? "slide__item active" : "slide__item "}
              key={`${Math.random().toString(36).substring(2, 7)}`}
              ref={(el: HTMLLIElement) => {
                _slides.current[i] = el;
              }}
              aria-hidden={i !== 0}
              {...Slide.wrapperAttributes}
            >
              <Slide.component />
            </li>
          ) : (
            <li
              className={i === 0 ? "slide__item active" : "slide__item "}
              key={`${Math.random().toString(36).substring(2, 7)}`}
              ref={(el: HTMLLIElement) => {
                _slides.current[i] = el;
              }}
              aria-hidden={i !== 0}
            >
              <Slide />
            </li>
          )
        )}
      </ul>
      <ul className="slider__nav">
        {slides.map((_s, i) => (
          <li key={`${Math.random().toString(36).substring(2, 7)}`}>
            <button
              ref={(element: any) => {
                _buttons.current[i] = element;
              }}
              className="slide__nav-button"
              data-index={i}
              aria-label={`Switch to slide ${i}`}
              onClick={handleSlideChange}
            ></button>
          </li>
        ))}
      </ul>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .slider__list {
    height: 100%;
    margin: auto 0;
    width: 100%;
    display: flex;
    position: relative;

    .slide__item {
      padding: 14px;
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

      > *:first-child {
        margin: auto;
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

export { Slider };
