export function add(numbers: string) {
    const array = numbers.split(",");
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return numbers === '' ? "0" : sum.toString();
}
