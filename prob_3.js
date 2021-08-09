
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

const ordererdTshirt = deliveryCost(201);
console.log(ordererdTshirt)