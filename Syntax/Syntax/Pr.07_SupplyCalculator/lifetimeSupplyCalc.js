var input = [
            [38, 118, "chocolate", 0.5],
            [20, 87, "fruits", 2],
            [16, 102, "nuts", 1.1]
            ];

for (var i = 0; i < input.length; i++) {
    var output = calcSupply(input[i][0], input[i][1], input[i][2], input[i][3]);
    console.log(output);
}



function calcSupply(age, maxAge, food, foodPerDay) {
    
    var amount = (maxAge - age) * 365 * foodPerDay;
    
    return (amount + "kg of " + food + " would be enough until I am " + maxAge + " years old.");
}