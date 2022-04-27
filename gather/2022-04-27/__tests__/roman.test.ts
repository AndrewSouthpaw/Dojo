import { decimalToRoman, getLargestDenominator } from "../roman";

describe("#decimalToRoman", () => {
  it("converts base numbers", () => {
    expect(decimalToRoman(1)).toEqual("I");
    expect(decimalToRoman(5)).toEqual("V");
    expect(decimalToRoman(10)).toEqual("X");
    expect(decimalToRoman(50)).toEqual("L");
    expect(decimalToRoman(100)).toEqual("C");
    expect(decimalToRoman(500)).toEqual("D");
    expect(decimalToRoman(1000)).toEqual("M");
  });

  it("converts numbers that require summing", () => {
    expect(decimalToRoman(3)).toEqual("III");
    expect(decimalToRoman(6)).toEqual("VI");
    expect(decimalToRoman(12)).toEqual("XII");
    expect(decimalToRoman(1003)).toEqual("MIII");
  });

  it("converts numbers that require subtracting", () => {
    expect(decimalToRoman(4)).toEqual("IV");
    expect(decimalToRoman(9)).toEqual("IX");
    expect(decimalToRoman(40)).toEqual("XL");
    expect(decimalToRoman(90)).toEqual("XC");
    expect(decimalToRoman(400)).toEqual("CD");
    expect(decimalToRoman(900)).toEqual("CM");
  });

  it("handles combined subtraction and addition", () => {
    expect(decimalToRoman(439)).toEqual("CDXXXIX");
  });
});

describe("#getLargestDenominator", () => {
  it("gets the right denominator", () => {
    expect(getLargestDenominator(1)).toEqual([1, "I"]);
    expect(getLargestDenominator(3)).toEqual([1, "I"]);
    expect(getLargestDenominator(5)).toEqual([5, "V"]);
    expect(getLargestDenominator(6)).toEqual([5, "V"]);
    expect(getLargestDenominator(12)).toEqual([10, "X"]);
    expect(getLargestDenominator(50)).toEqual([50, "L"]);
    expect(getLargestDenominator(100)).toEqual([100, "C"]);
    expect(getLargestDenominator(100)).toEqual([100, "C"]);
    expect(getLargestDenominator(500)).toEqual([500, "D"]);
    expect(getLargestDenominator(1000)).toEqual([1000, "M"]);
  });
});
