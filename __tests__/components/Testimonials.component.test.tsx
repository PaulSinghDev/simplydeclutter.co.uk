import { Testimonials } from "components/Testimonials/Testimonials.component";
import { TestimonialInterface } from "types";
import { fireEvent, render, screen } from "utils";

const WRAPPER_CLASS = "testimonials__wrapper";
const LIST_CLASS = "testimonials__list";
const ITEM_CLASS = "testimonial__item";
const NAV_CLASS = "testimonials__nav";
const NAV_BUTTON_CLASS = "testimonial__nav-button";
const TEST_ID = "Testimonials";
const TESTIMONIALS: TestimonialInterface[] = [
  {
    author: "H. Someone",
    comment: "This is my review",
    platform: "Tripadvisor",
    url: "https://tripadvisor.com/",
  },
  {
    author: "H. Someone Else",
    comment: "This is my other review",
    platform: "Facebook",
    url: "https://facebook.com/",
  },
];
const MODAL_COMPONENT = (
  <Testimonials
    data-testid={TEST_ID}
    testimonials={TESTIMONIALS}
  ></Testimonials>
);

const setupTest = () => {
  const utils = render(MODAL_COMPONENT);
  const element = utils.getByTestId(TEST_ID);
  return { element, utils };
};

describe("<Testimonials />", () => {
  it("will render in the dom", () => {
    const { element } = setupTest();
    expect(element).toBeInTheDocument();
  });

  it("will render a fully formed quote element for each testimonial passed", () => {
    const { element, utils } = setupTest();
    TESTIMONIALS.forEach((testimonial) => {
      // Has a url
      expect(
        element.querySelector(`a[href="${testimonial.url}"]`)
      ).toBeInTheDocument();
      // Has the comment
      expect(utils.getByText(testimonial.comment)).toBeInTheDocument();
      // Has the author
      expect(utils.getByText(testimonial.author)).toBeInTheDocument();
    });
  });

  it("will render a toggle button for each testimonial", () => {
    const { element } = setupTest();
    TESTIMONIALS.forEach((_t, i) => {
      expect(
        element.querySelector(`.${NAV_BUTTON_CLASS}[data-index="${i}"]`)
      ).toBeInTheDocument();
      expect(
        element.querySelector(`.${ITEM_CLASS}[data-index="${i}"]`)
      ).toBeInTheDocument();
    });
  });

  it("will have index 0 as the active slide by default", () => {
    const { element } = setupTest();
    expect(
      element.querySelector(
        `.${NAV_BUTTON_CLASS}[data-active="true"][data-index="0"]`
      )
    ).toBeInTheDocument();
    expect(
      element.querySelector(
        `.${ITEM_CLASS}[data-active="true"][data-index="0"]`
      )
    ).toBeInTheDocument();
  });

  it("will change the active slide according to the index of the trigger which is clicked", () => {
    const { element } = setupTest();
    // Fire the click event on the button with index 1
    fireEvent.click(
      element.querySelector(
        `.${NAV_BUTTON_CLASS}[data-index="1"]`
      ) as HTMLButtonElement
    );
    // Check that the button now is data-active="true"
    expect(
      element.querySelector(
        `.${NAV_BUTTON_CLASS}[data-index="1"][data-active="true"]`
      )
    ).toBeInTheDocument();
    // Check that the associated testimonial now is data-active="true"
    expect(
      element.querySelector(
        `.${ITEM_CLASS}[data-index="1"][data-active="true"]`
      )
    ).toBeInTheDocument();
    // Check that the original button now is data-active="false"
    expect(
      element.querySelector(
        `.${NAV_BUTTON_CLASS}[data-index="0"][data-active="false"]`
      )
    ).toBeInTheDocument();
    // Check that the original testimonial is now data-active="false"
    expect(
      element.querySelector(
        `.${ITEM_CLASS}[data-index="0"][data-active="false"]`
      )
    ).toBeInTheDocument();
  });

  it("will se the disabled attribute on the active slide's trigger", () => {
    const { element } = setupTest();
    // Check the original active trigger is disabled
    expect(
      element.querySelector(`.${NAV_BUTTON_CLASS}[data-index="0"]`)
    ).toHaveAttribute("disabled");
    // And that the alternate is not
    expect(
      element.querySelector(`.${NAV_BUTTON_CLASS}[data-index="1"]`)
    ).not.toHaveAttribute("disabled");
    // Fire the click event on the button with index 1
    fireEvent.click(
      element.querySelector(
        `.${NAV_BUTTON_CLASS}[data-index="1"]`
      ) as HTMLButtonElement
    );
    // Check the original active trigger is not disabled
    expect(
      element.querySelector(`.${NAV_BUTTON_CLASS}[data-index="0"]`)
    ).not.toHaveAttribute("disabled");
    // And that the alternate is
    expect(
      element.querySelector(`.${NAV_BUTTON_CLASS}[data-index="1"]`)
    ).toHaveAttribute("disabled");
  });

  it('will make the active slide aria-hidden="false"', () => {
    const { element } = setupTest();
    expect(
      element.querySelector(
        `.${ITEM_CLASS}[data-active="true"][aria-hidden="false"]`
      )
    ).toBeInTheDocument();
    expect(
      element.querySelector(
        `.${ITEM_CLASS}[data-active="false"][aria-hidden="true"]`
      )
    ).toBeInTheDocument();
  });
});
