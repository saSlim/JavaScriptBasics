
var input = [
    [5, 4, 3, 2, 1],
    [12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]
]

for (var j = 0; j < input.length; j++) {
    var out = sortArray(input[j]);
    console.log(out);
}


﻿function sortArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                var tempValue = arr[i];
                arr[i] = arr[j];
                arr[j] = tempValue;
            }
        }
    }
    
    return arr;
}