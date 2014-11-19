
var input = [
    [1, 6],
    [2, -55],
    [6, 923456],
    [3, 1451.78],
    [6, 888.88]
];

for (var i = 0; i < input.length; i++) {
    console.log(findNthDigit(input[i]));
}



function findNthDigit(arr) {
    var pos = arr[0];
    var sNum = arr[1] + "";
    sNum = sNum.replace('.', '');
    
    if (pos > sNum.length || pos <= 0) {
        return "The number doesn’t have " + pos + " digits";
    }
    
    return sNum[sNum.length - pos];
}