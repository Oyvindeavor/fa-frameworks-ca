import { render, screen } from "@testing-library/react";
import { Copyright } from "@components/Footer/Copyright";

describe("Copyright Component", () => {
  it("renders the copyright text", () => {
    render(<Copyright />);
    expect(screen.getByText("© 2025 Shop. All rights reserved.")).toBeInTheDocument();
  });
});
