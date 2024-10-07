
// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function longWord(heights) {
    let word = heights[0]
    for (const key of heights) {
        if (key.length < word.length) {
            word = key;
        }
    }
    return word;
}
const result = longWord(heights2);
console.log(result);