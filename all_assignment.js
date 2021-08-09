// **** Problem-1:Solution **** 

// Declare seerToMon() function
function seerToMon(seer){
    if(typeof seer != 'number' ){
        return 'Please  input a number';
    } 
    let mon = seer / 40;
    return mon;
}

// Call seerToMon Function
const riceAmount = seerToMon(320);
console.log(riceAmount)




// **** Problem-2:Solution **** 

// Declare totalSales() function
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

// Call totalSales() function
const myShoppingCost = totalSales(6,3,2) ;
console.log(myShoppingCost)




// **** Problem-3:Solution **** 

// Declare deliveryCost Function
function deliveryCost(tshirt){
    if(typeof tshirt != 'number' ){
        return 'Please  input a number';
    } 
    if(tshirt<=100){
        let fisrtHundredTshirtPrice = tshirt *100;
        return fisrtHundredTshirtPrice;
    }else if( tshirt <=200){
        let firstSplit = 100 *100;
        let secondSplit = tshirt-100;
        let secondHundredTshirtPrice = secondSplit *80
        let totalPrice = firstSplit + secondHundredTshirtPrice
        return totalPrice;    
    }
    else if(tshirt >= 201){
        let firstSplit = 100*100
        let secondSplit =100*80
        let thirdSplit = tshirt-200
        let thirdHundredTshirtPrice =  thirdSplit *50
        let totalPrice = firstSplit+ secondSplit+ thirdHundredTshirtPrice;
        return totalPrice;
    }    
}

// Call deliveryCost Function
const ordererdTshirt = deliveryCost(201);
console.log(ordererdTshirt)




// **** Problem:4 Solution ****

// Declare perfectFriend() Function
function perfectFriend(friends){
    if(typeof (friends) == 'number'){
        return 'Please  give an Array';
    } 
    for(let friend of friends){
        let target = friend
        if(target.length==5){
            return target ;
        }
    }
}


let myFriends = ['Joy','Shan','Akash','Redowan','Emon'] 

// Call perfectFriend() Function
const bestFriend = perfectFriend(myFriends)
console.log(bestFriend)