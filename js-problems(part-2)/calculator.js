
function add(a, b) {
    const addNum = a + b;
    return addNum;
}
function diff(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}



function calculator(a, b, operation) {
    if (operation === 'add') {
        const resutl = add(a, b);
        return resutl;
    }
    else if (operation === "diff") {
        return diff(a, b);
    }
    else if (operation === "multi") {
        return multi(a, b);
    }
    else if (operation === "divide") {
        return divide(a, b);
    }
    else {
        return "Your operation is not possible"
    }
}
console.log(calculator(2, 3, 'divide'));