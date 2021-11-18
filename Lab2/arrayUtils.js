function mean(array) {

   x = array
   if (x == undefined) {
      throw "Input doesn't exist"
   }

   else if (!Array.isArray(x)) {
      throw "Input is not array"
   }

   else if (x.length == 0) {
      throw "length is zero"
   }


   else {

      let flag = 0;
      for (var i = 0; i < x.length; i++) {
         if (isNaN(x[i])) {
            flag = 1;
            break;
         }
      }
      if (flag) {
         throw "input is not a number"
       }

      let sum = x.reduce((previous, current) => current += previous);
      let avg = sum / x.length;
      return avg
   }
}


function medianSquared(arr) {
   x = arr
   if (x == undefined) {
      throw "Input is undefined"
   }

   else if (x.length == 0) {
      throw "length is zero"
   }
   else if (!Array.isArray(x)) {
      throw "Input is not array"
   }
   else if (!x.some(i => !Number.isInteger(i)) && x.length > 0) {
      let result = x.map(y => y ** 2);
      var median = 0, count = result.length;
      result.sort(function (a, b) { return a - b });
      if (count % 2 === 0) {  // is even
         median = (result[count / 2 - 1] + result[count / 2]) / 2;
      } else { // is odd
         median = result[(count - 1) / 2];
      }
      return median;
   }
else {throw "all element are not Numbers"}

}

function maxElement(array) {

   x = array

   if (x == undefined) {

      throw "input is undefined"
   }
   else if (x.length == 0) {
      throw "array's length is zero"
   }
   else if (!Array.isArray(x)) {
      throw "Input is not array type"
   }


   else if (!x.some(i => !Number.isInteger(i)) && x.length > 0) {
      var max = x[0];
      var maxIndex = 0;

      for (var i = 1; i < x.length; i++) {
         if (x[i] > max) {
            maxIndex = i;
            max = x[i].toString();;
         }
      }

      return { max, maxIndex };
   }
else{ throw "all elements in array are not numbers"
}

}



function isEqual(arrayOne, arrayTwo) {
var isRecCall = false;
   if (arrayOne == undefined || arrayTwo == undefined) {throw "Input is empty"}
else if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {throw "Input is not of type array" }
else if (arrayOne.length !== arrayTwo.length) {throw "length is not equal : false" }

   arrayOne.sort();
   arrayTwo.sort();
   if (Array.isArray(arrayOne[0])) {
      let resArr = [];
      for (let i = 0; i < arrayOne.length; i++) {
         isRecCall = true;
         resArr.push(isEqual(arrayOne[i], arrayTwo[i]));
      }
      if (resArr.indexOf(false) != -1) {
         return false;
      } else {
         return true;
      }
   } else {
      let isSame = true;
      for (let i = 0; i < arrayOne.length; i++) {
         if (arrayOne[i] != arrayTwo[i]) {
            isSame = false;
            break;
         }
      }
      if (!isRecCall) {
         return isSame;
      }
      isRecCall = false;
      return isSame;
   }
}


function countRepeating(inputArr) {
   if (!Array.isArray(inputArr)) {throw "Input is not array" }
   if (inputArr.length == 0) {throw "Empty Object: {}" }
   var obj = {};
   for (var i = 0; i < inputArr.length; i++) {
      if (obj[inputArr[i]]) {
         let c = obj[inputArr[i]];
         c++;
         obj[inputArr[i]] = c;
      } else {
         obj[inputArr[i]] = 1;
      }
   }
   let hasNoRepeating = true;
   for (var i = 0; i < Object.keys(obj).length; i++) {
      if (obj[Object.keys(obj)[i]] > 1) {
         hasNoRepeating = false;
         break;
      }
   }
   if (hasNoRepeating) {throw "Input array has no repeating elements"  }
   let finalObj = {};
   for (let key in obj) {
      if (obj[key] > 1) {
         finalObj[key] = obj[key];
      }
   }
   return finalObj;
}

function fill(end, value) {
   if (typeof end != "number") { throw "End value is not a number"  }
   if (end < 0) { throw "End value is not a positive integer" }
   if (end == 0) {throw "End value cannot be 0"}
   let newArray = [];
   for (var i = 0; i < end; i++) {
      if (value == undefined) {
         newArray.push(i);
      } else {
         newArray.push(value);
      }
   }
   return newArray;
}

module.exports = {
mean, medianSquared, maxElement, isEqual, countRepeating, fill
};

