
var input = [
    [2, [1, 2, 3, 3, 5]],
    [2, [1, 2, 5, 3, 4]],
    [5, [1, 2, 5, 3, 4]],
    [0, [1, 2, 5, 3, 4]]
];

for (var i = 0; i < input.length; i++) {
    console.log(biggerThanNeighbors(input[i][0], input[i][1]));
}


function biggerThanNeighbors(index, arr) {
    
    if (index === 0) { return "only one neighbor"; }

    if (!index) { return "undefined"; }
    
    if (arr.length <= index) { return "invalid index"; }
    
    if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
        return "bigger";
    } else {
        return "not bigger";
    }

}