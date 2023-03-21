export function add(numbers: string) {
    const numbersSplitted = numbers.split(',');
    const summedNumbers = sumNumbersFrom(numbersSplitted);
    return numbers !== '' ? summedNumbers.toString() : "0";
}

const sumNumbersFrom = (numbersSplitted: string[]) => {
    return numbersSplitted.reduce((accumulator, currentNumber) => {
        return accumulator + parseFloat(currentNumber);
    }, 0);
}
