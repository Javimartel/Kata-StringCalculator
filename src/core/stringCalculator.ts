export function add(numbers: string) {
    checkIfSeparatorsAreTogethers(numbers)
    const array = numbers.split(/[,\n]/);
    const sum = array.reduce((accumulator, currentNumber) => accumulator + parseFloat(currentNumber), 0)
    return numbers === '' ? "0" : sum.toString();
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
