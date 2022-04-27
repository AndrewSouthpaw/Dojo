// const DECIMAL_TO_ROMAN: Record<number, string> = {
//   1: "I",
//   5: "V",
//   10: "X",
//   50: "L",
//   100: "C",
//   500: "D",
//   1000: "M",
// };

const DECIMAL_TO_ROMAN: Record<number, string> = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

const convertBaseValue = (value: number): string => {
  const roman = DECIMAL_TO_ROMAN[value];
  if (!roman) {
    throw new Error(`Unexpected value ${value}`);
  }
  return roman;
};

export const getLargestDenominator = (value: number): [number, string] => {
  return Object.keys(DECIMAL_TO_ROMAN)
    .map(Number)
    .reduce(
      ([largestDenominator, numeral], nextDenominator) =>
        value >= nextDenominator
          ? [nextDenominator, convertBaseValue(nextDenominator)]
          : [largestDenominator, numeral],
      [0, ""],
    );
};

export const decimalToRoman = (value: number): string => {
  let remainder = value;
  let result = "";
  while (remainder > 0) {
    const [denominator, numeral] = getLargestDenominator(remainder);
    result += numeral;
    remainder -= denominator;
  }
  return result;
};
