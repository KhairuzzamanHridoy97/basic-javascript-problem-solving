function seerToMon(seer){
    if(typeof seer != 'number' ){
        return 'Please  input a number';
    } 
    let mon = seer / 40;
    return mon;
}

const riceAmount = seerToMon(320);
console.log(riceAmount)