import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("renders button with text", () => {
  render(<Button label="Click me"></Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});
