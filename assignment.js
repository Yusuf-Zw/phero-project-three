//copy github link here

// kilometerToMeter // 1 kilometer= 1000 meter

function kilometerToMeter(kilometer){
    var meter= kilometer*1000;
    return meter;

}
var resultOfkilometerToMeter= kilometerToMeter(5);
console.log(resultOfkilometerToMeter)

// budgetCalculator //Given: eachWatchPrice=50, eachPhonePrice=100, eachLaptopPrice=500
function budgetCalculator(watch,phone,laptop){
    watchPrice= watch*50;
    phonePrice= phone*100;
    laptopPrice= laptop*500;
    totalCost= watchPrice + phonePrice + laptopPrice;
    return totalCost;
}
var resultOfbudgetCalculator= budgetCalculator(5,8,10)
console.log(resultOfbudgetCalculator)


// hotelCost

function hotelCost(numberOfDays){
    var firstTenDays = 10;
    var secondTenDays = 10;

    if (numberOfDays>20){
        costOfStaying = (firstTenDays * 100) + (secondTenDays * 80) +  ((numberOfDays-20)*50) ;  
    }
    else if(numberOfDays>10){
        costOfStaying =  (firstTenDays * 100)+  ((numberOfDays-10)*80) ;
    }
    else if(numberOfDays>0){
        costOfStaying = (numberOfDays * 100);
    }
    else {   
        console.log('Number of days > 0');
    }
    return costOfStaying;
}
var totalStayingCost = hotelCost(21);
console.log(totalStayingCost);

// megaFriend 

function megaFriend(allNames) {
    var megaName = allNames[0];

    for (var i = 0; i < allNames.length; i++) {
        var currentName = allNames[i];
        if (currentName.length > megaName.length) {
            megaName = currentName;
        }
    }
    return megaName;
}

var megaNameFriend = megaFriend(['Ahmad', 'Esa', 'Musa', 'Zakariya', 'Ibrahim',]);
console.log(megaNameFriend);

