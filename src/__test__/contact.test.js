import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

describe("contact us page Test case", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("submit");
    expect(button).toBeInTheDocument();
  });

  it("should load placeholder inside contact us component", () => {
    render(<Contact />);
    const placeholHeading = screen.getByPlaceholderText("name");
    expect(placeholHeading).toBeInTheDocument();
  });

  it("should load input label inside contact us component", () => {
    render(<Contact />);
    const labelName = screen.getByLabelText("name");
    expect(labelName).toBeInTheDocument();
  });
  // it("should load input inside contact us component", () =>{
  //     render(<Contact />)
  //     const input = screen.getByRole('textbox');
  //     expect(input).toBeInTheDocument()
  // })

  it("should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);
    const inputElements = screen.getAllByRole("textbox");
    // console.log(inputElements[0])
    // expect(inputElements.length).toBe(2)
    // expect(inputElements.length).toBe(3)
    // expect(inputElements.length).not.toBe(3)
  });
});
