# Kata: Roman Numerals

Source: many, some bits cribbed from the [Coding Dojo book](https://leanpub.com/codingdojohandbook).

## Theme/Focus

- Test Driven Development
- Sharpening your IDE (learn 3 new keyboard shortcuts)

## Part 1: decimal to roman numeral

The Kata says you should write a function to convert from Roman Numerals to decimal numerals.

Roman numerals, the numeral system of ancient Rome, uses combinations of letters from the Latin alphabet to signify values. They are based on seven symbols:

| Symbol  | Value    |
| ------- | -------- |
| I       |    1     |
| V       |    5     |
| X       |   10     |
| L       |   50     |
| C       |  100     |
| D       |  500     |
| M       | 1000     |

Numbers are formed by combining symbols together and adding the values. Generally, symbols are placed in order of value, starting with the largest values. When smaller values precede larger values, the smaller values are subtracted from the larger values, and the result is added to the total.

Examples:

```
1    -> I
7    -> VII
9    -> IX
10   -> X
1903 -> MCMIII
```

## Part 2: roman numeral to decimal

Write a function that converts from a roman numeral to digits. You can assume only valid numerals are passed in.

## Part 3: validator

Extend the answer from part 2 to detect invalid roman numerals and throw an error.

<details><summary>Click here to expand the rules (don't read them until you solve the previous two parts)</summary>

- Symbols "I", "X", "C", and "M" can be repeated no more than three times in succession. 
- "D", "L", and "V" can never be repeated.
- "I" can be subtracted from "V" and "X" only. 
- "X" can be subtracted from "L" and "C" only. 
- "C" can be subtracted from "D" and "M" only. 
- "V", "L", and "D" can never be subtracted.

</details>

## Part 4: Bonus challenges

If you breezed through this kata, do it again, with some new constraints:

- Each function/method can be no more than 3 _statements_ (e.g. `let foo` is one statement, `for (...) { console.log('hello') }` is two statements)
- Solve it with recursion
- Delete all your code and do the whole exercise again, this time using the keyboard only, no mouse/trackpad. (You may use your mouse to look up how to do things without a mouse in your IDE.)
