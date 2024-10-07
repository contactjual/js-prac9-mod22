
function multiply(a, b) {
    // if (typeof a !== "number" || typeof b !== "number") {
    //     return "please provide number"
    // }
    if (typeof a !== "number") {
        return "please provide number"
    }
    else if (typeof b !== "number") {
        return "please provide a number"
    }
    const result = a * b;
    return result;
}
const answer = multiply('fgdf', 'gfhfh');
console.log(answer);






function objects(input) {
    if (typeof input !== "object") {
        return "please provide an obJect";
    }
    else if (Array.isArray(input) === true){
        return "please provide an object"
    }
    const result = input.price;
    return result;
}
const result = objects({ name: 'chironi', price: 230, color: 'blue', })
// const result = objects(['fd','sdf']);
console.log(result);