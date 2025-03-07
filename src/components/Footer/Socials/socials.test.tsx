import { screen, render } from "@testing-library/react";
import { Socials } from "@components/Footer/Socials";

describe("Socials Component", () => {
  it("renders the socials with correct links", () => {
    render(<Socials />);

    const socials = screen.getByRole("navigation");
    expect(socials).toBeInTheDocument();

    const facebookLink = screen.getByRole("link", { name: "Visit our Facebook page" });
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute("href", "https://www.facebook.com");

    const instagramLink = screen.getByRole("link", { name: "Visit our Instagram profile" });
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com");

    const blueskyLink = screen.getByRole("link", { name: "Visit our Bluesky profile" });
    expect(blueskyLink).toBeInTheDocument();
    expect(blueskyLink).toHaveAttribute("href", "https://bsky.app");
  });
});

describe("Socials Component", () => {
  it("renders the socials with correct images", () => {
    render(<Socials />);

    const facebookImage = screen.getByAltText("Facebook");
    expect(facebookImage).toBeInTheDocument();
    expect(facebookImage).toHaveAttribute("src", "/facebook-circle-line.svg");

    const instagramImage = screen.getByAltText("Instagram");
    expect(instagramImage).toBeInTheDocument();
    expect(instagramImage).toHaveAttribute("src", "/instagram-line.svg");

    const blueskyImage = screen.getByAltText("Bluesky");
    expect(blueskyImage).toBeInTheDocument();
    expect(blueskyImage).toHaveAttribute("src", "/bluesky-line.svg");
  });
});
