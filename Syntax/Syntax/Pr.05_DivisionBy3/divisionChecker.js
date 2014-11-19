

var input = [12, 188, 591];

for (var i = 0; i < input.length; i++) {
    var output = divisionBy3(input[i]);
    console.log(output);
}






function divisionBy3(number) {
    
    var strVal = number.toString();
    var result = 0;
    for (var j = 0; j < strVal.length; j++) {
        result += parseInt(strVal.charAt(j));
    }
    
    // console.log(result);
    return ((result % 3 == 0) ? "the number is divided by 3 without remainder" : "the number is not divided by 3 without remainder");

}