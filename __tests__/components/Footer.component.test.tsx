import { Footer } from "components/Footer/Footer.component";
import { render, screen } from "utils";

const TEST_ID = "Footer";
const FOOTER_COMPONENT = <Footer data-testid={TEST_ID} />;
const COLUMN_SELECTOR = ".footer-column";

const setupTest = () => {
  const utils = render(FOOTER_COMPONENT);
  const element = utils.getByTestId(TEST_ID);
  return { element, utils };
};

describe("<Footer />", () => {
  it("will render in the dom", () => {
    const { element } = setupTest();
    expect(element).toBeInTheDocument();
  });

  it("will render 4 footer-columns", () => {
    const { element } = setupTest();

    expect(element).toBeInTheDocument();
    expect(element.querySelectorAll(COLUMN_SELECTOR)).toHaveLength(4);
  });
});
