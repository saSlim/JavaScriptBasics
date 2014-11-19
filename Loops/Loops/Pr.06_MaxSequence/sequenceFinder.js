var input = [
    [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
    ['happy'],
    [2, 'qwe', 'qwe', 3, 3, '3']
]

for (var j = 0; j < input.length; j++) {
    var out = findMaxSequence(input[j]);
    console.log(out);
}

function findMaxSequence(arr) {
    var res = [arr[0]];
    var results = arr.length == 1 ? [res]:[];
    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]) {
            res.push(arr[i]);
        }
        else {
            results.push(res);
            res = [];
            res.push(arr[i]);
        }
    }
    
    results.sort(function (a, b) { return a.length - b.length });
    
    return results[results.length-1];
}