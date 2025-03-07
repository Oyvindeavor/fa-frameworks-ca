import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Logo } from "@components/Logo";

test("renders logo with text,if href is redirecting home", () => {
  render(<Logo />);
  expect(screen.getByText("Litt & Kvert")).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveAttribute("href", "/");
});
