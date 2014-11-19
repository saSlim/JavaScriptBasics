
var input = [333, 425, 2567564754];

for (var i = 0; i < input.length; i++) {
    var output = bitChecker(input[i]);
    console.log(output);
}



function bitChecker(num) {
    return ((num >> 3) % 2 != 0);

}