

(function () {
    var input = [
        'Hello, how are you.',
        'Life is pretty good, isn’t it?'
    ];
    
    for (var i = 0; i < input.length; i++) {
        console.log(reverseWordsInString(input[i]));
    }

})();

function reverseWordsInString(str) {
    var subStr = str.split(' ');
    
    for (var i = 0; i < subStr.length; i++) {
        subStr[i] = reverse(subStr[i]);
    }
    
    return subStr.join(' ');
    
    function reverse(s) {
        for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
        return o;
    }
}