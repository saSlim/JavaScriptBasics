var input = [
    1235,
    25368,
    123456
];

for (var i = 0; i < input.length; i++) {
    var output = checkDigit(input[i]);
    console.log(output);
}





function checkDigit(number) {
    
    var strVal = number.toString();
    
    var result = parseInt(strVal.charAt(strVal.length - 3));
    
    return ((result === 3) ? true : false);

}