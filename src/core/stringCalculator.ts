export function add(numbers: string) {
    const numbersArray = numbers.split(',');
    const sumNumbers = numbersArray.reduce((accumulator, currentNumber) => {
        return accumulator + parseFloat(currentNumber);
    }, 0);
    return numbers !== '' ? sumNumbers.toString() : "0";
}
