const questionOne = function questionOne(arr) {
    try{

    if (arr === undefined || arr.length == 0 ||!arr) {
    return {};
  }

  let data = new Object();

  var arrayLength = arr.length;
  for (var j = 0; j < arrayLength; j++) {

   var ifPrimeNumber = true;

    for (let i = 2; i < arr[j]; i++) {
        if (arr[j] % i === 0) {
          ifPrimeNumber = false;
          break;
        }
      }
      if (arr[j] === 1){
        ifPrimeNumber = false;
      }
      if (arr[j] < 1){
          ifPrimeNumber = false;
          data[`${arr[j]}`] = ifPrimeNumber;

        }
      if (arr[j] === 2){
          ifPrimeNumber = true;
        }
      data[`${arr[j]}`] = ifPrimeNumber;
    }
    return data;
     
}catch(e){console.log(e)}}


const questionTwo = function questionTwo(arr) {
 try{
  if  (arr === undefined || arr.length == 0 ||!arr) {
    return 0;
  }
  var calculation_1 = 0;

  var arrayLength = arr.length;

  for (var j = 0; j < arrayLength; j++) {
    calculation_1= calculation_1 + Math.pow(arr[j], 2)
  }
  var calculation_2= Math.pow(calculation_1, 6);

  var result= Math.sqrt(calculation_2);

  return result;
}
catch(e){console.log(e)}}

const questionThree = function questionThree(str) {
    try{

  if (!str || 0 === str.length){
    return {
      consonants: 0,
      vowels: 0,
      numbers: 0,
      spaces: 0,
      punctuation: 0,
      specialCharacters: 0
    }
  }else{
    punctuationregex= /[()!_+\-=\[\]{};':"\\|,.<>\/?]/gi
    vowelregex =/[AIEOUaieou]/gi
    consoregex=/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/gi
    numberegex=/[0-9]/gi
    numberegex2='\\d', 'g'
    specialcharactersregex=/[@#$%^&*]/gi
var numbers = processRegex(str, numberegex);
  var spaces = (str.split(" ").length - 1);
  var consonants = processRegex(str,consoregex);
  var specialCharacters = processRegex(str, specialcharactersregex);
  var punctuation = processRegex(str,punctuationregex);

  var vowels = processRegex(str, vowelregex);


  return {
      consonants, vowels, numbers, spaces, punctuation, specialCharacters
  }};
  
}catch(e){console.log(e)}}


function processRegex(str, regex) {
    try{

  if (!str.match(regex) || 0 === str.match(regex).length){
    return 0;
  } else {
    return str.match(regex).length
  }
}catch(e){console.log(e)}}

const questionFour = function questionFour(num1, num2, num3) {
    try{
  var principal = num1;
  
  var rate = num2;

  var time = num3;

  var interestcalc = (rate/1200);

  var interest = interestcalc

  var nocalc = num3 *12;

  var no = nocalc

  var pintoi=(principal * interest)

  var calci2=(1-(Math.pow(1+interest, -no)));

  var Paymentformonth = pintoi/calci2;

  Paymentformonth = Paymentformonth.toFixed(2);

  return Paymentformonth;
}catch(e){console.log(e)}}




module.exports = {
  firstName: "Kunal", 

  lastName: "Goyal", 

  studentId: "10471054",
  
  questionOne,
  questionTwo,
  questionThree,
  questionFour
};