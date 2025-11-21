const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


function fromDollarToYen(dollar){
    return (dollar*156.5)/1.07
}

function fromEuroToDollar(euro){
    return euro*1.07
}

function fromYenToPound(yen){
    return (yen*0.87)/156.5
}




module.exports={ sum,fromDollarToYen,fromEuroToDollar,fromYenToPound };