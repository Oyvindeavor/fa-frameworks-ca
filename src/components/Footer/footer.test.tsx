import { render, screen } from "@testing-library/react";
import { Footer } from "@components/Footer";

describe("Footer Component", () => {
  it("renders the footer", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});
