import {
  MouseEvent,
  MouseEventHandler,
  TouchEventHandler,
  TouchEvent,
} from "react";
export const isTouchDevice = () =>
  "ontouchstart" in window || navigator.maxTouchPoints > 0;

const useSwipe = <T extends HTMLElement>(
  leftCallback: any,
  rightCallback: any
) => {
  let isTouching = false;
  let initialTouch: number | undefined;
  let currentTouch: number | undefined;

  const handleTouchMove = (event: any) => {
    currentTouch = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: any) => {
    isTouching = false;

    if (currentTouch && initialTouch && initialTouch - currentTouch < -25) {
      leftCallback(event);
    } else if (
      currentTouch &&
      initialTouch &&
      initialTouch - currentTouch > 25
    ) {
      rightCallback(event);
    }
    initialTouch = undefined;
    currentTouch = undefined;
    event.currentTarget.removeEventListener("touchmove", handleTouchMove);
    event.currentTarget.removeEventListener("touchend", handleTouchEnd);
  };

  const handleMouseMove = (event: any) => {
    currentTouch = event.clientX;
  };

  const handleMouseUp = (event: any) => {
    if (currentTouch && initialTouch && initialTouch - currentTouch < -25) {
      leftCallback(event);
    } else if (
      currentTouch &&
      initialTouch &&
      initialTouch - currentTouch > 25
    ) {
      rightCallback(event);
    }
    event.currentTarget.removeEventListener("pointermove", handleMouseMove);
    event.currentTarget.removeEventListener("pointerup", handleMouseUp);
    isTouching = false;
  };

  const handleTouchStart: TouchEventHandler<T> = (event: TouchEvent<T>) => {
    if (!isTouchDevice()) return;
    if (isTouching) return;
    isTouching = true;
    initialTouch = event.touches[0].clientX;
    event.currentTarget.addEventListener("touchmove", handleTouchMove);
    event.currentTarget.addEventListener("touchend", handleTouchEnd);
  };

  const handleMouseDown: MouseEventHandler<T> = (event: MouseEvent<T>) => {
    if (isTouchDevice()) return;
    if (isTouching) return;
    isTouching = true;
    initialTouch = event.clientX;
    currentTouch = event.clientX;
    event.currentTarget.addEventListener("pointermove", handleMouseMove);
    event.currentTarget.addEventListener("pointerup", handleMouseUp);
  };

  return {
    handleTouchStart,
    handleMouseDown,
  };
};

export { useSwipe };
