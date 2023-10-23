/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "@/app/video/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);
    const elem = screen.getByText("My index page");
    // console.log("elem", elem);
    expect(elem).toBeDefined();
  });
});
