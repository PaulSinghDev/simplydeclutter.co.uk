import { Card } from "components/Card/Card.component";
import { render, fireEvent } from "utils";

const TEST_ID = "card";
const CTA_TEST_ID = "cta_test_id";
const CTA_CALLBACK = jest.fn();
const CONTENT_1 =
  "This is the content of the card. It is not meant to be lengthy";
const CONTENT_2 = "This is the second sentence.";
const TITLE = "This is the card";
const CTA_WITH_HREF = {
  label: "This is the CTA label",
  href: "/about",
  id: CTA_TEST_ID,
};

const CTA_WITH_CALLBACK = {
  label: "This is the CTA label",
  callback: CTA_CALLBACK,
  id: CTA_TEST_ID,
};

const CARD_COMPONENT_NO_CTA = (
  <Card data-testid={TEST_ID} title={TITLE} content={[CONTENT_1, CONTENT_2]} />
);
const CARD_COMPONENT_URL_CALLBACK = (
  <Card
    data-testid={TEST_ID}
    title={TITLE}
    content={[CONTENT_1, CONTENT_2]}
    cta={CTA_WITH_HREF}
  />
);
const CARD_COMPONENT_CTA_CALLBACK = (
  <Card
    data-testid={TEST_ID}
    title={TITLE}
    content={[CONTENT_1, CONTENT_2]}
    cta={CTA_WITH_CALLBACK}
  />
);

const setupTest = (type?: "callback" | "url" | "array") => {
  let utils;
  switch (type) {
    case "callback": {
      utils = render(CARD_COMPONENT_CTA_CALLBACK);
      break;
    }
    case "url":
      utils = render(CARD_COMPONENT_URL_CALLBACK);
      break;
    default:
      utils = render(CARD_COMPONENT_NO_CTA);
      break;
  }
  const element = utils.getByTestId(TEST_ID);
  return { utils, element };
};

describe("<Card />", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("will render in the dom", () => {
    const { element } = setupTest();
    expect(element).toBeInTheDocument();
  });

  it("will render the correct h3 title element", () => {
    const { utils } = setupTest();
    const title = utils.getByText(TITLE);
    expect(title).toBeInTheDocument();
    expect(title.tagName === "H3").toBe(true);
  });

  it("will render all strings in the array as content with p tags", () => {
    const { utils } = setupTest();
    [CONTENT_1, CONTENT_2].forEach((line) =>
      expect(utils.getByText(line)).toBeInTheDocument()
    );
  });

  it("will render a cta button and use its callback", () => {
    const { element } = setupTest("callback");
    const cta = element.querySelector(`#${CTA_TEST_ID}`);
    expect(cta).toBeInTheDocument();
    fireEvent.click(cta as Element);
    expect(CTA_CALLBACK).toBeCalledTimes(1);
  });

  it("will render a cta button with the correct href", () => {
    const { element } = setupTest("url");
    const cta = element.querySelector(`#${CTA_TEST_ID}`) as HTMLAnchorElement;
    expect(cta).toBeInTheDocument();
    expect(cta.href.includes(CTA_WITH_HREF.href)).toBe(true);
  });
});
