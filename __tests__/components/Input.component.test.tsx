import { Input } from "components/Input/Input.component";
import { render, screen } from "utils";

const TEST_ID = "Input";
const INPUT_COMPONENT = <Input data-testid={TEST_ID} />;

describe("<Input />", () => {
  beforeEach(() => {
    render(INPUT_COMPONENT);
  });

  it("will render in the dom", () => {
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
