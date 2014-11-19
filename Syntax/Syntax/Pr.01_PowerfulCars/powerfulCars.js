

var input = [75, 150, 1000];

for (var i = 0; i < input.length; i++) {
    var output = convertKWtoHP(input[i]);
    console.log(output);
}


function convertKWtoHP(kilowatts) {
    var hp = kilowatts / 0.745699872;
    return hp.toFixed(2);
}