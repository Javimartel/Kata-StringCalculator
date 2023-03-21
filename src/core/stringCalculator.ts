export function add(numbers: string) {
    checkIfSeparatorsAreTogether(numbers);
    if (numbers.at(-1)?.match(/[,\n]/)) {
        throw new Error("Number expected but EOF found.");
    };
    const numbersSplitted = numbers.split(/[,\n]/);
    const summedNumbers = sumNumbersFrom(numbersSplitted);
    return numbers !== '' ? summedNumbers.toString() : "0";
}

const sumNumbersFrom = (numbersSplitted: string[]) => {
    return numbersSplitted.reduce((accumulator, currentNumber) => {
        return accumulator + parseFloat(currentNumber);
    }, 0);
}

const checkIfSeparatorsAreTogether = (numbers: string) => {
    numbers.split('').forEach((character, index) => {
        const currentCharacter = character.match(/[,\n]/);
        const nextCharacter = numbers[index + 1]?.match(/[,\n]/);
        if (currentCharacter && nextCharacter) {
            throw new Error(`Number expected but '${nextCharacter}' found at position ${index + 1}.`);
        };
    });
}
