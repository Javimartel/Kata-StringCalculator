export function add(numbers: string) {
    let errors = "";
    let numbersSplitted = [];
    const startWithDelimiter = numbers.startsWith('//');
    if (startWithDelimiter) {
        const separator = extractSeparatorFrom(numbers);
        const numbersToSplit = extractNumbersFrom(numbers);
        errors += checkIfThereAreMoreThanOneSeparatorFrom(numbersToSplit, separator);
        numbersSplitted = numbersToSplit.split(separator);
    } else {
        numbersSplitted = numbers.split(/[,\n]/);
    }
    errors += checkIfThereAreNegativeNumbersFrom(numbersSplitted);
    errors += checkIfSeparatorsAreTogetherFrom(numbers);
    errors += checkIfLastCharacterIsSeparatorFrom(numbers);
    if (errors) {
        throw new Error(errors);
    }
    const summedNumbers = sumNumbersFrom(numbersSplitted);
    return numbers !== '' ? summedNumbers.toString() : "0";
}

const sumNumbersFrom = (numbersSplitted: string[]) => {
    return numbersSplitted.reduce((accumulator, currentNumber) => {
        return accumulator + Number(currentNumber);
    }, 0);
}

const checkIfSeparatorsAreTogetherFrom = (numbers: string) => {
    let error = "";
    numbers.split('').forEach((character, index) => {
        const currentCharacter = character.match(/[,\n]/);
        const nextCharacter = numbers[index + 1]?.match(/[,\n]/);
        if (currentCharacter && nextCharacter) {
            error += `Number expected but '${nextCharacter}' found at position ${index + 1}.`;
        }
    });
    return error;
}

const checkIfLastCharacterIsSeparatorFrom = (numbers: string) => {
    let error = "";
    if (numbers.at(-1)?.match(/[,\n]/)) {
        error += "Number expected but EOF found.\n";
    }
    return error;
}

const extractSeparatorFrom = (numbers: string) => {
    const separatorIndex = numbers.indexOf('\n');
    const separator = numbers.substring(2, separatorIndex);
    return separator;
}

const extractNumbersFrom = (numbers: string) => {
    const separatorIndex = numbers.indexOf('\n');
    const numbersToSplit = numbers.substring(separatorIndex + 1);
    return numbersToSplit;
}

const checkIfThereAreMoreThanOneSeparatorFrom = (numbersToSplit: string, separator: string) => {
    let error = "";
    numbersToSplit.split('').forEach((character, index) => {
        const isAnotherSeparator = character !== separator;
        const isNotNumeric = isNaN(Number(character));
        if (isAnotherSeparator && isNotNumeric) {
            error += `'${separator}' expected but '${character}' found at position ${index}.\n`;
        }
    });
    return error;
}

const checkIfThereAreNegativeNumbersFrom = (numbersSplitted: string[]) => {
    let error = "";
    const negativeNumbers = numbersSplitted.filter(number => Number(number) < 0);
    if (negativeNumbers.length > 0) {
        error += `Negative not allowed : ${negativeNumbers.join(', ')}\n`;
    }
    return error;
}
