import { test, expect, describe } from "vitest";
import { add, subtract, multiply } from "./math.helper";

describe("Add", () => {
  test("Should add two positives numbers", () => {
    // console.log("Hola mundo");
    // ! 1.Arrange
    const a = 1;
    const b = 2;

    // ! 2.Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });

  test("Should add two negatives numbers", () => {
    // console.log("Hola mundo");
    // ! 1.Arrange
    const a = -1;
    const b = -3;

    // ! 2.Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("Subtact", () => {
  test("Should subtract two numbers", () => {
    const a = 3;
    const b = 2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });

  test("Should subtract four numbers", () => {
    const a = 8;
    const b = 4;

    const result = subtract(a, b);

    expect(result).toBe(4);
  });
});

describe("multiply", () => {
  test("Should multiply two numbers", () => {
    const a = 2;
    const b = 2;

    const result = multiply(a, b);

    expect(result).toBe(4);
  });

  test("Should multiply two numbers", () => {
    const a = 8;
    const b = 2;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});
