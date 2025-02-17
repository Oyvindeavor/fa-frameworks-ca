import { screen, render } from "@testing-library/react";
import { Support } from "@components/Footer/Support";

describe("Support Component", () => {
  it("renders the support section", () => {
    render(<Support />);

    const support = screen.getByRole("navigation");
    expect(support).toBeInTheDocument();

    const supportLink = screen.getByRole("link", { name: "Terms & Conditions" });
    expect(supportLink).toBeInTheDocument();

    const faqLink = screen.getByRole("link", { name: "FAQ" });
    expect(faqLink).toBeInTheDocument();

    const contactLink = screen.getByRole("link", { name: "Contact" });
    expect(contactLink).toBeInTheDocument();
  });
});
