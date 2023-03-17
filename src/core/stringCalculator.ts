export function add(numbers: string) {
    const array = numbers.split(/[,\n]/);
    const sum = array.reduce((accumulator, currentNumber) => accumulator + parseFloat(currentNumber), 0)
    return numbers === '' ? "0" : sum.toString();
}
