export function add(numbers: string) {
    const [numbersToSum, separator, errorMoreThanOneSeparator] = extractNumbersAndSeparator(numbers);
    const numbersToString = numbersToSum as string;
    const array = numbersToString.split(separator);
    let errors = "";

    errors += checkNegativeNumbers(array);
    errors += checkIfLasPositionIsASeparator(numbers);
    errors += checkIfSeparatorsAreTogethers(numbers);
    errors += errorMoreThanOneSeparator;

    if (errors !== "") {
        throw new Error(errors); 
    }

    const sum = array.reduce((accumulator, currentNumber) => accumulator + parseFloat(currentNumber), 0)
    return numbersToSum === '' ? "0" : sum.toString();
}

const checkIfSeparatorsAreTogethers = (numbers: string) => {
    let error = "";
    numbers.split('').forEach((char, index) => {
        const currentNumber = char.match(/[,\n]/)
        const nextNumber = numbers[index+1]?.match(/[,\n]/);
        if (currentNumber && nextNumber) {
            error += `Number expected but '${numbers[index + 1]}' found at position ${index + 1}.\n`;
        }
    });
    return error;
}

const checkIfLasPositionIsASeparator = (numbers: string) => {
    let error = "";
    if (numbers.at(-1)?.match(/[,\n]/)) {
        error += "Number expected but EOF found.\n";
    }
    return error;
}

const extractNumbersAndSeparator = (numbers: string) => {
    let separator: RegExp|string = /[,\n]/
    let array = []
    let numbersToSum = numbers
    let error = "";
    if (numbers.startsWith("//")) {
        array = numbersToSum.split(/[\n]/)
        separator = array[0].replace("//", "")
        numbersToSum = array[1]
        error += checkIfThereAreMoreThanOneSeparator(numbersToSum, separator)
    }
    return [numbersToSum, separator, error];
}

const checkIfThereAreMoreThanOneSeparator = (numbersToSum: string, separator: RegExp | string) => {
    let error = "";
    const haveMoreThanOneSeparator = numbersToSum.split("")
        .find(char => char !== separator && isNaN(parseFloat(char)))
    if (haveMoreThanOneSeparator) {
        const differentSeparatorPos = numbersToSum.indexOf(haveMoreThanOneSeparator)
        error += `'${separator}' expected but '${haveMoreThanOneSeparator}' found at position ${differentSeparatorPos}.\n`;
    }
    return error;
}

const checkNegativeNumbers = (array: string[]) => {
    let error = "";
    const negativeNumbers = array.filter(number => parseFloat(number) < 0);
    if (negativeNumbers.length > 0) {
        const negativeNumbersJoined = negativeNumbers.join(", ");
        error += `Negative not allowed : ${negativeNumbersJoined}\n`;
    }
    return error;
}
