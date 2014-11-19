
var input = [20, -5, 13];

for (var j = 0; j < input.length; j++) {
    printNumbers(input[j]);
   
}



function printNumbers(number) {
    var output = "";
    if (number < 1) {
        output = "no";
    } else {
        var output = "";
        for (var i = 1; i < number; i++) {
            if ((i % 4 != 0) && (i % 5 != 0)) {
                output += i + ((i < number)? ", ":"");
            }
        }
    }
    console.log(output);
}