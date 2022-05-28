import { Input } from "components/Input/Input.component";
import { render, screen } from "utils";
import { fireEvent } from "@testing-library/react";

const TEST_ID_1 = "input-1";
const TEST_ID_2 = "input-2";
const INITIAL_VALUE = "Hello";
const TEXT = "text";
const NUMBER = "number";
const UPDATED_VALUE = "Goodbye";
const INPUT_COMPONENT_TEXT = (
  <Input type={TEXT} initialValue={INITIAL_VALUE} data-testid={TEST_ID_1} />
);
const INPUT_COMPONENT_NUMBER = (
  <Input type={NUMBER} initialValue={INITIAL_VALUE} data-testid={TEST_ID_2} />
);

const setupTest = (type: "number" | "text") => {
  if (type === "text") {
    const utils = render(INPUT_COMPONENT_TEXT);
    return { input: utils.getByTestId(TEST_ID_1) as HTMLInputElement, utils };
  } else {
    const utils = render(INPUT_COMPONENT_NUMBER);
    return { input: utils.getByTestId(TEST_ID_2) as HTMLInputElement, utils };
  }
};

describe("<Input />", () => {
  beforeEach(() => {});

  it("will render in the dom", () => {
    const { utils } = setupTest("text");
    expect(utils.getByTestId(TEST_ID_1)).toBeInTheDocument();
  });

  it("will have the correct default value", () => {
    const { input } = setupTest("text");
    expect(input).toBeInTheDocument();
    expect(input.value).toBe(INITIAL_VALUE);
  });

  it("will have the correct type", () => {
    const { input: textInput } = setupTest("text");
    const { input: numberInput } = setupTest("number");
    expect(textInput.type).toBe(TEXT);
    expect(numberInput.type).toBe(NUMBER);
  });

  it("will update the value when it is changed", () => {
    const { input } = setupTest("text");
    expect(input.value).toBe(INITIAL_VALUE);
    expect(input.type).toBe(TEXT);
    fireEvent.change(input, { target: { value: UPDATED_VALUE } });
    expect(input.value).toBe(UPDATED_VALUE);
  });
});
