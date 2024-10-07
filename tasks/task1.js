
// Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137];

function lowestNum(heights) {
    // let take = [];  // it's my misstake
    let take = heights2[0];
    for (const key of heights) {
        if (key < take) {
            // const result = take.push(key);
            take = key;
        }
    }
    return take;
}
console.log(lowestNum(heights2));