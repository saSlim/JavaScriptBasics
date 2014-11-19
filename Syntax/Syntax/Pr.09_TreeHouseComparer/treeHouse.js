
var input = [
                [3, 2],
                [3, 3],
                [4, 5]
            ];

for (var i = 0; i < input.length; i++) {
    var output = treeHouseCompare(input[i]);
    console.log(output);
}

function treeHouseCompare(arr) {
    
    var a = arr[0];
    var b = arr[1];
    
    var houseArea = (a * a) + (a * a * 2 / 6);
    
    var circRad = (b / 3) * 2;
    var treeArea = (b * (b / 3)) + (Math.PI * circRad * circRad);
    
    if (houseArea === treeArea) {
        return "equal/" + houseArea.toFixed(2);
    } else {
        return (houseArea > treeArea)? "house/" + houseArea.toFixed(2) : "tree/" + treeArea.toFixed(2);
    }
}