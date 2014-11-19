
var input = [
    8, 3, 5
];

for (var i = 0; i < input.length; i++) {
    var output = convertDigitToWord(input[i]);
    console.log(output);
}



function convertDigitToWord(value) {
    
    switch (value) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";

        default:
            return "range is (0<n<10)";
    }

}