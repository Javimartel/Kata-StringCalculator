export function add(numbers: string) {
    const numbersArray = numbers.split(',');
    const sumNumbers = sumNumbersFromArray(numbersArray);
    return numbers !== '' ? sumNumbers.toString() : "0";
}

const sumNumbersFromArray = (numbersArray: string[]) => {
    return numbersArray.reduce((accumulator, currentNumber) => {
        return accumulator + parseFloat(currentNumber);
    }, 0);
}
