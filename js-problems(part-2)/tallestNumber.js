
const someNumbers = [34, 23, 56, 78, 33, 59, 99];

function tallestNumber(numbers) {
    // let biggNumber = []; // or use the below line
    let biggNumber = numbers[0]
    for (const key of numbers) {
        if (biggNumber < key) { // (biggNumber > key) use for lower number
            biggNumber = key;
        }
    }
    return biggNumber;
}
console.log(tallestNumber(someNumbers));