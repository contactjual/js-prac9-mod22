
const phones = [
    { name: 'Iphone', price: 150000, camera: '150mp' },
    { name: 'Vivo', price: 15000, camera: '30mp' },
    { name: 'samsung', price: 50000, camera: '80mp' },
    { name: 'Oppo', price: 25000, camera: '50mp' },
    { name: 'xeami', price: 20000, camera: '40mp' },
    { name: 'walton', price: 10000, camera: '15mp' }
]
function getLowerPricePhone(phones) {
    // let takeFist = [];
    let takeFist = phones[0];
    for (const phone of phones) {
        if (takeFist.price < phone.price) {
            takeFist = phone;
        }
    }
    return takeFist;
}
console.log(getLowerPricePhone(phones))