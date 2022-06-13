import { SlideInterface, Slider } from "components";
import { ComponentType } from "react";
import { fireEvent, render } from "utils";

const TEST_ID = "slider";
const SLIDE_1_ID = "component-1";
const SLIDE_2_ID = "component-2";
const SLIDE_3_ID = "component-3";
const SLIDES = [SLIDE_1_ID, SLIDE_2_ID, SLIDE_3_ID];

const SLIDES_COMPONENTS: ComponentType[] = [
  () => <div data-testid={SLIDE_1_ID}>One</div>,
  () => <div data-testid={SLIDE_2_ID}>Two</div>,
  () => <div data-testid={SLIDE_3_ID}>Three</div>,
];
const SLIDES_INTERFACE: SlideInterface[] = [
  { component: () => <div data-testid={SLIDE_1_ID}>One</div> },
  { component: () => <div data-testid={SLIDE_2_ID}>Two</div> },
  { component: () => <div data-testid={SLIDE_3_ID}>Three</div> },
];

const setupTest = (type?: string) => {
  const utils = render(
    <Slider
      data-testid={TEST_ID}
      slides={type === "slide" ? SLIDES_COMPONENTS : SLIDES_INTERFACE}
    />
  );
  const element = utils.getByTestId(TEST_ID);
  return { utils, element };
};

describe("<Slider />", () => {
  it("will render component type slides", () => {
    const { element } = setupTest("component");
    expect(element).toBeInTheDocument();
  });

  it("will render interface type slides", () => {
    const { element } = setupTest();
    expect(element).toBeInTheDocument();
  });

  it("will render slides", () => {
    const { utils } = setupTest();
    SLIDES.forEach((slide) => {
      expect(utils.getByTestId(slide)).toBeInTheDocument();
    });
  });

  it("will render a toggle button for each slide", () => {
    const { element } = setupTest();
    SLIDES.forEach((_slide, i) => {
      expect(element.querySelector(`[data-index="${i}"]`)).toBeInTheDocument();
    });
  });

  it("will set the first slide as aria-hidden false and the rest as false", () => {
    const { utils } = setupTest();
    SLIDES.forEach((slide, i) => {
      expect(
        utils.getByTestId(slide)?.closest("li")?.getAttribute("aria-hidden")
      ).toBe(i === 0 ? "false" : "true");
    });
  });

  it("will set the first nav button as disabled the rest not", () => {
    const { element } = setupTest();
    SLIDES.forEach((slide, i) => {
      expect(
        element.querySelector(`[data-index="${i}"]`)?.hasAttribute("disabled")
      ).toBe(i === 0 ? true : false);
    });
  });

  it("disabled the button when it is clicked", () => {
    const { element } = setupTest();
    const button = element.querySelector(
      '[data-index="1"]'
    ) as HTMLButtonElement;
    expect(button.hasAttribute("disabled")).toBe(false);
    fireEvent.click(button);
    expect(button.hasAttribute("disabled")).toBe(true);
  });

  it("will make slide aria-hidden false when its trigger is clicked", () => {
    const { element, utils } = setupTest();
    const button = element.querySelector(
      '[data-index="1"]'
    ) as HTMLButtonElement;
    const slide = utils.getByTestId(SLIDE_2_ID)?.closest("li");
    expect(slide?.getAttribute("aria-hidden")).toBe("true");
    fireEvent.click(button);
    expect(slide?.getAttribute("aria-hidden")).toBe("false");
  });
});
