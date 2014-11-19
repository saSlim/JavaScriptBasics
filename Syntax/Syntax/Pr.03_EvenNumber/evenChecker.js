
var input = [3, 127, 588];

for (var i = 0; i < input.length; i++) {
    var output = evenNumber(input[i]);
    console.log(output);
}



function evenNumber(number) {
    return (number % 2 == 0);
}