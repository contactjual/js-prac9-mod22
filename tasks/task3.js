
// calculate the total budget required to buy electronics:

function calculateElectronicsBudget(laptops, tablets, mobiles) {
    let laptopPrice = 35000;
    let tabletPrice = 15000;
    let mobilePrice = 20000;

    const laptopTotalPrice = laptopPrice * laptops;
    const tabletTotalPrice = tabletPrice * tablets;
    const mobileTotalPrice = mobilePrice * mobiles;

    const totalPayment = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
    
    return totalPayment;
}
const inputQuantity =  calculateElectronicsBudget(1, 3, 2)
console.log(inputQuantity);