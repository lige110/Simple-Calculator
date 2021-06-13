import evaluate from "evaluator.js";

describe("The evaluator should calculate the equation in a String", () => {
  test("Test1 2 * (27/(3*3))- 23 * (2*3)", () => {
    let string = "2 * (27/(3*3))- 23 * (2*3)";
    let result = evaluate(string);
    expect(result).toBe(-132);
  });

  test("Test2 3 * (26/13)- 2 * (2-3)", () => {
    let string = "3 * (26/13)- 2 * (2-3)";
    let result = evaluate(string);
    expect(result).toBe(8);
  });
});

describe("The evaluator should throw the right error", () => {
  test("Test for checking valid parentheses", () => {
    try {
      let string1 = "2 * (27/(3*3))- 23 * (2*3";
      let result1 = evaluate(string1);
    } catch (error) {
      expect(error.message).toBe("Mismatched parentheses");
    }
  });

  test("Test for checking division by zero", () => {
    try {
      let string2 = "13434/0";
      let result2 = evaluate(string2);
    } catch (error) {
      expect(error.message).toBe("Division by zero");
    }
  });

  test("Test for checking valid operators", () => {
    try {
      let string3 = "1+-";
      let result3 = evaluate(string3);
    } catch (error) {
      expect(error.message).toBe("Insufficient operands for operator: Add");
    }
  });
});
