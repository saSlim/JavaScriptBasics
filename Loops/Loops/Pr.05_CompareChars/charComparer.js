var input = [
    ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], 
    ['3', '5', 'g', 'd'] ,
    ['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';']
];

var input2 = [
    ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
    ['5', '3', 'g', 'd'],
    ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']
]

for (var j = 0; j < input.length; j++) {
    compareChars(input[j], input2[j]);
}


function compareChars(arr1, arr2) {
    var output = "Equal";
    
    if (arr1.length != arr2.length) {
        output = "Not Equal";
    } else {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                output = "Not Equal";
            }
        }
    }
    console.log(output);
}