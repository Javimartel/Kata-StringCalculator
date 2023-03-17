export function add(numbers: string) {
    for (let i = 0; i < numbers.length; i++) {
        if (i !== 0) {
            if (numbers[i].match(/[,\n]/) && numbers[i-1].match(/[,\n]/)) {
                throw new Error(`Number expected but '${numbers[i]}' found at position ${i}.`)
            }
        }
    }
    const array = numbers.split(/[,\n]/);
    const sum = array.reduce((accumulator, currentNumber) => accumulator + parseFloat(currentNumber), 0)
    return numbers === '' ? "0" : sum.toString();
}
