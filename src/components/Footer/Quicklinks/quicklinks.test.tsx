import { render, screen } from "@testing-library/react";
import { QuickLinks } from "@components/Footer/Quicklinks";

describe("QuickLinks Component", () => {
  it("renders the quicklinks with correct links", () => {
    render(<QuickLinks />);

    const quicklinks = screen.getByRole("navigation");
    expect(quicklinks).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    const contactLink = screen.getByRole("link", { name: "Contact" });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
