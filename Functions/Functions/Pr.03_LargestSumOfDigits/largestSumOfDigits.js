
var input = [
    [5, 10, 15, 111],
    [33, 44, -99, 0, 20],
    ['hello'],
    [5, 3.3]
];

for (var i = 0; i < input.length; i++) {
    console.log(findLargestBySumOfDigits(input[i]));
}


function findLargestBySumOfDigits(arr) {
    var maxSum = 0;
    var element = 0;
    
    for (var j = 0; j < arr.length; j++) {
        var number = Math.abs(arr[j]);
        if (number % 1 !== 0) {
            return "undefined";
        }
        
        var sum = number.toString(10).split("").map(function (t) { return parseInt(t); }).reduce(add, 0);
        
        if (sum > maxSum) {
            maxSum = sum;
            element = arr[j];
        }
    }
    return element;
    
    function add(a, b) {
        return a + b;
    }

}