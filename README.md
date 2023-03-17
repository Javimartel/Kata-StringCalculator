# [String Calculator](https://codingdojo.org/kata/StringCalculator/)

This classic kata guides you step by step through the implementation of a calculator that receives a `String` as input. It is a good exercise on refactoring and incremental implementation. It is also a good candidate for practising TDD.

## First step
Create a function `add` that takes a `String` and returns a `String`:

`String add(String number)`

* The method can take 0, 1 or 2 numbers separated by comma, and returns their sum.
* An empty string will return “0”.
* Example of inputs: "", "1", "1.1,2.2".

## Many numbers
Allow the `add` method to handle an unknow number of arguments.

## Newline as separator
Allow the `add` method to handle newlines as separators:

* "1\n2,3" should return "6".
* "175.2,\n35" is invalid and should return the message "Number expected but '\n' found at position 6."
