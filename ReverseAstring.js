function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");


function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');