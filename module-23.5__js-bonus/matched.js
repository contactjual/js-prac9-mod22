
const mobiles = [
    { id:1, name: 'Iphone', price: 150000, camera: '150mp' },
    { id:2, name: 'Vivo Phone', price: 15000, camera: '30mp' },
    { id:3, name: 'samsung laptop', price: 50000, camera: '80mp' },
    { id:4, name: 'Oppo phone', price: 25000, camera: '50mp' },
    { id:5, name: 'xeami laPtOp', price: 20000, camera: '40mp' },
    { id:6, name: 'walton  Phone', price: 10000, camera: '15mp' }
]

function matchedPhone(products, search){
    let matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
console.log(matchedPhone(mobiles, "LAptop"));