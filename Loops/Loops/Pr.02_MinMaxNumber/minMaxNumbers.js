var input = [
    [1, 2, 1, 15, 20, 5, 7, 31],
    [2, 2, 2, 2, 2],
    [500, 1, -23, 0, -300, 28, 35, 12]
];

for (var j = 0; j < input.length; j++) {
    findMinAndMax(input[j]);
    
}




function findMinAndMax(arr) {
    arr.sort(function (a, b) { return a - b });
    
    console.log("Min -> " + arr[0]);
    console.log("Max -> " + arr[arr.length - 1]);

}