// function declare
function totalSales(shirt,pant,shoes){
    if(typeof (shirt,pant,shoes) != 'number' ){
        return 'Please  give a number';
    } 
    let shirtCellAmount = shirt * 100 ;
    let pantCellAmount = pant * 200 ;
    let shoesCellAmount = shoes * 500 ;
    let totalShopingSales = shirtCellAmount + pantCellAmount + shoesCellAmount ;
    return totalShopingSales ;

}

// function call
const myShoppingCost = totalSales(6,3,2) ;
console.log(myShoppingCost)
