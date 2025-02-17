import { render, screen } from "@testing-library/react";
import { Cardlogos } from "@components/Footer/Cardlogos";

describe("Cardlogos Component", () => {
  it("renders the card logos", () => {
    render(<Cardlogos />);

    const VisaLogo = screen.getByAltText("Visa");
    expect(VisaLogo).toBeInTheDocument();

    const MastercardLogo = screen.getByAltText("Mastercard");
    expect(MastercardLogo).toBeInTheDocument();

    const VippsLogo = screen.getByAltText("Vipps");
    expect(VippsLogo).toBeInTheDocument();

    const PaypalLogo = screen.getByAltText("Paypal");
    expect(PaypalLogo).toBeInTheDocument();
  });
});
