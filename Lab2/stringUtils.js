function camelCase(str) {


    if (str === "") {throw "String is empty" }
    else if (!str) { throw "Input is not string" }
    else if (!isNaN(str)) {throw "Input is not valid" }
    else if (typeof str !== "string") {throw "Input is not string" }

    let finalstr = "";
    str.split(" ").map(function (word, index) {

        if (index == 0) {
            finalstr += word.toLowerCase();
            return;
        }
 
        finalstr += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return finalstr;
}


function replaceChar(str) {

    if (str === "") {throw "String is empty" }
    else if (!str) {throw "Input is not string" }
    else if (!isNaN(str)) { throw "Input is not valid" }
    else if (typeof str !== "string") {throw "Input is not string" }
    let tempObj = {};
    let newStr = "";
    firstChar = str.charAt(0).toLowerCase();
    newStr += str.charAt(0);
    for (var i = 1; i < str.length; i++) {
        let currentChar = str.charAt(i).toLowerCase();
        if (currentChar == firstChar && tempObj[firstChar]) {
            let c = tempObj[firstChar];
            c = c + 1;
            tempObj[firstChar] = c;
            newStr += c % 2 == 0 ? '*' : '$';
        } else {
            newStr += str.charAt(i);
            if (!tempObj[firstChar])
                tempObj[firstChar] = 1;
        }
    }
    return newStr;
}


function mashUp(str1, str2) {
    if (!str1 || !str2) {throw "one of the string dont exist" }
    else if ((str1 && str1.length < 2) || (str2 && str2.length < 2)) {throw "One of the string's Length is less than 2" }
    else if (typeof str1 !== "string" || typeof str2 !== "string") {throw "Input is not string"}

    str1FirstTwoChars = str1.substring(0, 2);
    str2FirstTwoChars = str2.substring(0, 2);
    return str2FirstTwoChars + str1.substring(2, str1.length) + " " + str1FirstTwoChars + str2.substring(2, str2.length);

}


module.exports = {
camelCase, replaceChar, mashUp,

};

