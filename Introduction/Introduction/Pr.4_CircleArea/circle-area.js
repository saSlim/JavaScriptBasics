var radiuses = [7, 1.5, 20];

for (var i = 0; i < radiuses.length; i++) {
    calcCircleArea(radiuses[i]);
}

function calcCircleArea(r) {
    
    document.write("<p>r = " + r + "; area = " + (r * r * Math.PI) + "</p>");
   
}

