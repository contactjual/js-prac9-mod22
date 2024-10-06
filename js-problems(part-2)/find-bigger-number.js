function biggerNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        const number = "The bigger number is: " + num1;
        return number;
        // return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        const number = "The bigger number is: " + num2;
        return number;
        // return num2;
    }
    else {
        const number = "The bigger number is: " + num3;
        return number;
        // return num3;
    }

}
console.log(biggerNumber(34, 5, 7));




// others solution ----------------------

const maximumNumber = Math.max(2348, 334, 6565, 7899, 7000);
console.log('max is using Math.max ', +maximumNumber);