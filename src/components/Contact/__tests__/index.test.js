import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact component", () => {
  it("renders", () => {
    render(<ContactForm />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("h1 tag is visible", () => {
  it("inserts Contact me into the h1 tag", () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
  });

  it("inserts Submit into the button tag", () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId("button")).toHaveTextContent("Submit");
  });
});
