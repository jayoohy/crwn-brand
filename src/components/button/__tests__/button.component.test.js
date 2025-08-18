import React from "react";
import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("button tests", () => {
  test("should render base button when nothing is passed", () => {
    render(<Button>Test</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: rgb(0, 0, 0)");
  });

  test("should render google button when needed", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: #4285f4");
  });

  test("should render inverted button when needed", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: #ffffffff");
  });

  test("should disable when loading", () => {
    render(<Button isLoading={true} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
});
