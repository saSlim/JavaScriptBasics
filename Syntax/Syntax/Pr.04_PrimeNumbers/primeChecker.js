
var input = [7, 254, 587];

for (var i = 0; i < input.length; i++) {
    var output = isPrime(input[i]);
    console.log(output);
}



function isPrime(number) {
    
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    
    return true;
}