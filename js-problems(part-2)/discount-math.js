
// upto-- 100 pics -- 100tk kore
// more than 101-200 pics -- 90tk kore
// more than 201 pics -- 70tk kore

function discountedPrice(quantity) {
    if (quantity <= 100) {
        totalPrice = 100 * quantity;
        return totalPrice;
    }
    else if (quantity > 100 && quantity <= 200) {
        totalPrice = 90*quantity;
        return totalPrice;
    }
    // else if (quantity>200){
    //     totalPrice = 70*quantity;
    //     return totalPrice;
    // }
    else {
        totalPrice = 70*quantity;
        return totalPrice;
    }

    // else {
    //     totalPrice = 100* quantity;
    //     return totalPrice;
    // }
}
const totalPayment = discountedPrice(150);
console.log(totalPayment);