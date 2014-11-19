

displayProperties();

function displayProperties() {
    
    
    var propertiesArray = [];
    
    for (var properties in document) {
        propertiesArray.push(properties);
    }
    
    propertiesArray.sort();
    
    var output = propertiesArray.join('\n');
    console.log(output);
    
    for (var i = 0; i < propertiesArray.length; i++) {
        var li = document.createElement('li');
        li.style.listStyleType = "none";
        li.innerHTML = propertiesArray[i];
        document.getElementById('result').appendChild(li);
    }

}