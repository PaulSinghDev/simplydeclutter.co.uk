import { render } from "utils";
import { Services } from "components";
import { Service } from "types";

const TEST_ID = "services";
const VIEW_ALL_TITLE = "Go to our services page";
const VIEW_ALL_LABEL = "View all";
const SERVICES: Service[] = [
  {
    title: "Service 1",
    description: "This is the service which we are offering here",
    icon: "shirt",
  },
  {
    title: "Service 2",
    description: "This is another service which we are offering here",
    icon: "iron",
  },
];

const setupTest = () => {
  const utils = render(<Services data-testid={TEST_ID} services={SERVICES} />);
  const element = utils.getByTestId(TEST_ID);
  return { utils, element };
};

describe("", () => {
  it("will render in the dom", () => {
    const { element } = setupTest();
    expect(element).toBeInTheDocument();
  });

  it("will render an li element with a title, description and icon for each service", () => {
    const { utils, element } = setupTest();
    SERVICES.forEach((service) => {
      // Title
      expect(utils.getByText(service.title));
      // Description
      expect(utils.getByText(service.description));
      // Logo
      expect(element.querySelector(`[data-icon="${service.icon}"]`));
    });
  });

  it("will render a button linking to the /services page", () => {
    const { utils } = setupTest();
    expect(utils.getByTitle(VIEW_ALL_TITLE)).toBeInTheDocument();
    expect(utils.getByText(VIEW_ALL_LABEL)).toBeInTheDocument();
  });
});
