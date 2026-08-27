import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("Should render Firstname and Lastname", () => {
    const { container } = render(<MyAwesomeApp />);

    console.log(container);

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.innerHTML).toContain("Christian");
    expect(h3?.innerHTML).toContain("Beltrán");
    // render(<MyAwesomeApp />);

    // screen.debug();
  });

  test("Should render Firstname and Lastname -- Screen", () => {
    render(<MyAwesomeApp />);

    const h1 = screen.getByRole("heading", {
      level: 1,
    });
    const h3 = screen.getByTestId("first-name-title");
    screen.debug();

    console.log(h1.innerHTML);
    console.log(h3.innerHTML);

    expect(h1?.innerHTML).toContain("Christian");
    expect(h3?.innerHTML).toContain("Beltrán");
    // render(<MyAwesomeApp />);
  });
});
