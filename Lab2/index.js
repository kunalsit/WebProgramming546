const arrayUtil = require("./arrayUtils");
const stringUtil = require("./stringUtils");
const objectUtil = require("./objUtils");

try{ var mean = arrayUtil.mean([1, 2, 3])
console.log(mean); } // throws an error
catch(e){console.log(e);}

try{ var mean = arrayUtil.mean([])
console.log(mean); } // throws an error
catch(e){console.log(e);}

try{ var mean = arrayUtil.mean("banana")
console.log(mean); }// throws an error
catch(e){console.log(e);}

try{ var mean = arrayUtil.mean(["guitar", 1, 3, "apple"])
console.log(mean); }// throws an error
catch(e){console.log(e);}

try{ var mean = arrayUtil.mean()
console.log(mean); }// throws an error
catch(e){console.log(e);}

try{ var median = arrayUtil.medianSquared([1, 2, 4]); // Returns: 4
console.log(median); }
catch(e){console.log(e);}

try { var median = arrayUtil.medianSquared([]) // throws an error
console.log(median); }
catch(e){console.log(e);}

try { var median = arrayUtil.medianSquared("banana"); // throws an error
console.log(median); }
catch(e){console.log(e);}


try { var median = arrayUtil.medianSquared(1, 2, 3); // throws an error
console.log(median); }
catch(e){console.log(e);}

try { var median = arrayUtil.medianSquared(["guitar", 1, 3, "apple"]); // throws an error
console.log(median); }
catch(e){console.log(e);}

try { var median = arrayUtil.medianSquared(); // throws an error
console.log(median); }
catch(e){console.log(e);}


try { var maxele = arrayUtil.maxElement([5, 6, 7]); // Returns: {'7': 2}
console.log(maxele); }
catch(e){console.log(e);}

try { var maxele = arrayUtil.maxElement(5, 6, 7); // throws error
console.log(maxele); }
catch(e){console.log(e);}

try { var maxele = arrayUtil.maxElement([]); // throws error
console.log(maxele); }
catch(e){console.log(e);}

try { var maxele = arrayUtil.maxElement(); // throws error
console.log(maxele); }
catch(e){console.log(e);}

try { var maxele = arrayUtil.maxElement("test"); // throws error
console.log(maxele); }
catch(e){console.log(e);}

try { var maxele = arrayUtil.maxElement([1, 2, "nope"]); // throws error
console.log(maxele); }
catch(e){console.log(e);}


try { var fill = arrayUtil.fill(6); // Returns: [0, 1, 2, 3, 4, 5]
console.log(fill); }
catch(e){console.log(e);}

try { var fill = arrayUtil.fill(3, 'Welcome'); // Returns: ['Welcome', 'Welcome', 'Welcome']
console.log(fill); }
catch(e){console.log(e);}

try { var fill = arrayUtil.fill(); // Throws error
console.log(fill); }
catch(e){console.log(e);}

try { var fill = arrayUtil.fill("test"); // Throws error
console.log(fill); }
catch(e){console.log(e);}

try { var fill = arrayUtil.fill(0); // Throws Error
console.log(fill); }
catch(e){console.log(e);}  

try { var fill = arrayUtil.fill(-4); // Throws Error
console.log(fill); }
catch(e){console.log(e);}


try { var cntObj = arrayUtil.countRepeating([7, '7', 13, true, true, true, "Hello", "Hello", "hello"]);
console.log(cntObj); }
catch(e){console.log(e);}
/* Returns:
{
  "7": 2,
  true: 3,
  "Hello": 2,
}
*/


try { var status = arrayUtil.isEqual([1, 2, 3], [3, 1, 2]); // Returns: true
console.log(status); }
catch(e){console.log(e);}

try { var status = arrayUtil.isEqual(['Z', 'R', 'B', 'C', 'A'], ['R', 'B', 'C', 'A', 'Z']); // Returns: true
console.log(status); }
catch(e){console.log(e);}

try { var status = arrayUtil.isEqual([1, 2, 3], [4, 5, 6]); // Returns: false
console.log(status); }
catch(e){console.log(e);}

try { var status = arrayUtil.isEqual([1, 3, 2], [1, 2, 3, 4]); // Returns: false
console.log(status); }
catch(e){console.log(e);}

try { var status = arrayUtil.isEqual([1, 2], [1, 2, 3]); // Returns: false
console.log(status); }
catch(e){console.log(e);}

try { var status = arrayUtil.isEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[3, 1, 2], [5, 4, 6], [9, 7, 8]]); // Returns: true
console.log(status); }
catch(e){console.log(e);}

try { var status = arrayUtil.isEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[3, 1, 2], [5, 4, 11], [9, 7, 8]]); // Returns: false
console.log(status); }
catch(e){console.log(e);}



try { var newStr = stringUtil.camelCase('my function rocks'); // Returns: "myFunctionRocks"
console.log(newStr); }
catch(e){console.log(e);}

try { var newStr = stringUtil.camelCase('FOO BAR'); // Returns: "fooBar"
console.log(newStr); }
catch(e){console.log(e);}

try { var newStr = stringUtil.camelCase("How now brown cow"); // Returns: "howNowBrownCow"
console.log(newStr); }
catch(e){console.log(e);}

try { var newStr = stringUtil.camelCase(); // Throws Error
console.log(newStr); }
catch(e){console.log(e);}

try { var newStr = stringUtil.camelCase(''); // Throws Error
console.log(newStr); }
catch(e){console.log(e);}

try { var newStr = stringUtil.camelCase(123); // Throws Error
console.log(newStr); }
catch(e){console.log(e);}

try { var newStr = stringUtil.camelCase(["Hello", "World"]); // Throws Error
console.log(newStr); }
catch(e){console.log(e);}


try { var rplcStr = stringUtil.replaceChar("Daddy"); // Returns: "Da*$y"
console.log(rplcStr); }
catch(e){console.log(e);}

try { var rplcStr = stringUtil.replaceChar("Mommy"); // Returns: "Mo*$y"
console.log(rplcStr); }
catch(e){console.log(e);}

try { var rplcStr = stringUtil.replaceChar("Hello, How are you? I hope you are well"); // Returns: "Hello, *ow are you? I $ope you are well"
console.log(rplcStr); }
catch(e){console.log(e);}

try { var rplcStr = stringUtil.replaceChar("babbbbble"); // Returns: "ba*$*$*le"
console.log(rplcStr); }
catch(e){console.log(e);}

try { var rplcStr = stringUtil.replaceChar(""); // Throws Error
console.log(rplcStr); }
catch(e){console.log(e);}

try { var rplcStr = stringUtil.replaceChar(123); // Throws Error
console.log(rplcStr); }
catch(e){console.log(e);}

try { var mshStr = stringUtil.mashUp("Patrick", "Hill"); //Returns "Hitrick Pall"
console.log(mshStr); }
catch(e){console.log(e);}

try { var mshStr = stringUtil.mashUp("hello", "world"); //Returns "wollo herld"
console.log(mshStr); }
catch(e){console.log(e);}

try { var mshStr = stringUtil.mashUp("Patrick", ""); //Throws error
console.log(mshStr); }
catch(e){console.log(e);}

try { var mshStr = stringUtil.mashUp(); // Throws Error
console.log(mshStr); }
catch(e){console.log(e);}

try { var mshStr = stringUtil.mashUp("John") // Throws error
console.log(mshStr); }
catch(e){console.log(e);}

try { var mshStr = stringUtil.mashUp("h", "Hello") // Throws Error
console.log(mshStr); }
catch(e){console.log(e);}

try { var mshStr = stringUtil.mashUp("h", "e") // Throws Error
console.log(mshStr); }
catch(e){console.log(e);}

const first = { x: 2, y: 3 };
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };

try { const firstSecondThird = objectUtil.makeArrays([first, second, third]);
console.log(firstSecondThird);}
// [ ['x',2],['y',3], ['a',70], ['x', 4], ['z', 5], ['x',0], ['y',9], ['q',10] ]
catch(e){console.log(e)}

try { const secondThird = objectUtil.makeArrays([second, third]);
console.log(secondThird);}
// [ ['a',70], ['x', 4], ['z', 5], ['x',0], ['y',9], ['q',10] ]
catch(e){console.log(e)}

try { const thirdFirstSecond = objectUtil.makeArrays([third, first, second]);
console.log(thirdFirstSecond);}
// [  ['x',0], ['y',9], ['q',10], ['x',2],['y',3], ['a',70], ['x', 4], ['z', 5] ]
catch(e){console.log(e)}

const first_deep = {a: 2, b: 3};
const second_deep = {a: 2, b: 4};
const third_deep = {a: 2, b: 3};
const forth_deep = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
const fifth_deep  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}

console.log(objectUtil.isDeepEqual(first_deep, second_deep)); //false
console.log(objectUtil.isDeepEqual(forth_deep, fifth_deep)); // true
console.log(objectUtil.isDeepEqual(forth_deep, third_deep)); // false
console.log(objectUtil.isDeepEqual({}, {})); // true

try { const comObj = objectUtil.computeObject({ a: 3, b: 7, c: 5 }, n => n * 2);
console.log(comObj) }
catch(e){console.log(e)}
/* Returns:
{
  a: 6,
  b: 14,
  c: 10
}
*/