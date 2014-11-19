var input = [
    [2, 4],
    [5, 8],
    [12, 3]
];

for (var i = 0; i < input.length; i++) {
    var output = calcCylinderVol(input[i]);
    console.log(output);
}



function calcCylinderVol(arr) {
    
    var radius = arr[0];
    var height = arr[1];
    var volume = Math.PI * radius * radius * height;
    return volume.toFixed(3);
}