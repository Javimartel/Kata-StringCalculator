export function add(numbers: string) {
    checkIfSeparatorsAreTogetherFrom(numbers);
    checkIfLastCharacterIsSeparatorFrom(numbers);
    const startWithDelimiter = numbers.startsWith('//');
    const numbersSplitted = startWithDelimiter ? 
        extractNumbersAndCustomSeparatorFrom(numbers) : 
        numbers.split(/[,\n]/);
    const summedNumbers = sumNumbersFrom(numbersSplitted);
    return numbers !== '' ? summedNumbers.toString() : "0";
}

const sumNumbersFrom = (numbersSplitted: string[]) => {
    return numbersSplitted.reduce((accumulator, currentNumber) => {
        return accumulator + parseFloat(currentNumber);
    }, 0);
}

const checkIfSeparatorsAreTogetherFrom = (numbers: string) => {
    numbers.split('').forEach((character, index) => {
        const currentCharacter = character.match(/[,\n]/);
        const nextCharacter = numbers[index + 1]?.match(/[,\n]/);
        if (currentCharacter && nextCharacter) {
            throw new Error(`Number expected but '${nextCharacter}' found at position ${index + 1}.`);
        }
    });
}

const checkIfLastCharacterIsSeparatorFrom = (numbers: string) => {
    if (numbers.at(-1)?.match(/[,\n]/)) {
        throw new Error("Number expected but EOF found.");
    }
}

const extractNumbersAndCustomSeparatorFrom = (numbers: string) => {
    const separatorIndex = numbers.indexOf('\n');
    const separator = numbers.substring(2, separatorIndex);
    const numbersToSplit = numbers.substring(separatorIndex + 1);
    checkIfThereAreMoreThanOneSeparatorFrom(numbersToSplit, separator);
    const numbersSplitted = numbersToSplit.split(separator);
    return numbersSplitted;
}

const checkIfThereAreMoreThanOneSeparatorFrom = (numbersToSplit: string, separator: string) => {
    numbersToSplit.split('').forEach((character, index) => {
        const isAnotherSeparator = character !== separator;
        const isNotNumeric = isNaN(parseFloat(character));
        if (isAnotherSeparator && isNotNumeric) {
            throw new Error(`'${separator}' expected but '${character}' found at position ${index}.`);
        }
    });
}
