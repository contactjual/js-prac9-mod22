
function shoping(shirt, pant, shoe) {
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const totalShirtPrice = 500 * shirt;
    const totalPantPrice = 300 * pant;
    const totalSheoPrice = 900 * shoe;

    const totalPayment = totalShirtPrice + totalPantPrice + totalSheoPrice;

    return totalPayment;
}
const money =  shoping(1,2,0);
console.log(money);
