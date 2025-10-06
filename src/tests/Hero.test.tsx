import { render, screen } from "@testing-library/react";
import Hero from "@/app/components/Hero";
// import { heroData } from "@/data/heroData";

describe("Hero Component", () => {
  it("renders the title from data file", () => {
    render(<Hero />);
    const titleElement = screen.getByRole("heading", { name: heroData.title });
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    render(<Hero />);
    const buttonElement = screen.getByRole("button", { name: /get started/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
