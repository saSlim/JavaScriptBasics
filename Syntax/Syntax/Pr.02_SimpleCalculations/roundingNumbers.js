var input = [22.7, 12.3, 58.7];

for (var i = 0; i < input.length; i++) {
    var output = roundNumber(input[i]);
    console.log(output);
}


function roundNumber(number) {
    var rounded = Math.round(number);
    var floored = Math.floor(number);
    var output = "\nfloor: " + floored + "\nround: " + rounded;
    return output;
}