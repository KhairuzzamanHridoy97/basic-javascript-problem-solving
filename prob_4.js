// function calling

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
const bestFriend = perfectFriend(myFriends)
console.log(bestFriend)