import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "@components/Navbar";

// Mock dependencies
jest.mock("@components/Logo", () => ({ Logo: () => <div data-testid="logo" /> }));
jest.mock("@components/Hamburger", () => ({
  Hamburger: ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => (
    <button data-testid="hamburger" onClick={toggleMenu}>
      {isOpen ? "Close" : "Open"}
    </button>
  ),
}));
jest.mock("@components/Cart", () => ({ Cart: () => <div data-testid="cart" /> }));

describe("Navbar Component", () => {
  it("renders the navbar with logo, menu, and cart", () => {
    render(<Navbar />);

    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("cart")).toBeInTheDocument();
    expect(screen.getByTestId("hamburger")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("toggles the menu when clicking the hamburger button", () => {
    render(<Navbar />);

    const hamburgerButton = screen.getByTestId("hamburger");
    const menu = screen.getByText("Contact").closest("div");

    // Initially, the menu should be hidden
    expect(menu).not.toHaveClass("open");

    // Click to open menu
    fireEvent.click(hamburgerButton);
    expect(menu).toHaveClass("open");

    // Click to close menu
    fireEvent.click(hamburgerButton);
    expect(menu).not.toHaveClass("open");
  });

  it("adds 'scrolled' class when window is scrolled", () => {
    render(<Navbar />);

    const navbar = screen.getByRole("navigation");

    // Simulate scrolling
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    expect(navbar).toHaveClass("scrolled");
  });
});
