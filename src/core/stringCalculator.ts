export function add(numbers: string) {
    checkIfLasPositionIsASeparator(numbers);
    checkIfSeparatorsAreTogethers(numbers);
    const [numbersToSum, separator] = extractNumbersAndSeparator(numbers);
    const numbersToString = numbersToSum as string;
    const array = numbersToString.split(separator);
    const sum = array.reduce((accumulator, currentNumber) => accumulator + parseFloat(currentNumber), 0)
    return numbersToSum === '' ? "0" : sum.toString();
}

const checkIfSeparatorsAreTogethers = (numbers: string) => {
    numbers.split('').forEach((char, index) => {
        const currentNumber = char.match(/[,\n]/)
        const nextNumber = numbers[index+1]?.match(/[,\n]/);
        if (currentNumber && nextNumber) {
            throw new Error(`Number expected but '${numbers[index + 1]}' found at position ${index + 1}.`);
        }
    });
}

const checkIfLasPositionIsASeparator = (numbers: string) => {
    if (numbers.at(-1)?.match(/[,\n]/)) {
        throw new Error("Number expected but EOF found.");
    }
}

const extractNumbersAndSeparator = (numbers: string) => {
    let separator: RegExp|string = /[,\n]/
    let array = []
    let numbersToSum = numbers
    if (numbers.startsWith("//")) {
        array = numbersToSum.split(/[\n]/)
        separator = array[0].replace("//", "")
        numbersToSum = array[1]
    }
    return [numbersToSum, separator];
}
