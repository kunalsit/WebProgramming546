function makeArrays(arrayOfObjects) {
    if (!Array.isArray(arrayOfObjects)) {throw "Entered input is not an Array" }
    let hasOneNonObject = false;
    for (var i = 0; i < arrayOfObjects.length; i++) {
        if (typeof arrayOfObjects[i] != "object") {
            hasOneNonObject = true;
            break;
        }
    }
    if (hasOneNonObject) {throw "Entered input has one non-object" }
    let hasEmptyObject = false;
    for (var i = 0; i < arrayOfObjects.length; i++) {
        if (Object.keys(arrayOfObjects[i]).length == 0) {
            hasEmptyObject = true;
            break;
        }
    }
    if (hasEmptyObject) {throw "Entered input has empty object(s)" }
    if (arrayOfObjects.length < 2) { throw "Entered input has less than 2 objects in an array" }
    let tempArr = [];
    for (var i = 0; i < arrayOfObjects.length; i++) {
        let tempObj = arrayOfObjects[i];
        let objectKeys = Object.keys(tempObj);
        objectKeys.forEach((e) => {
            tempArr.push([e, tempObj[e]]);
        });
    }
    return tempArr ;
}
function computeObject(inputObj, inputFunction) {
    if (typeof inputObj != "object") {throw "Entered input has invalid object" }
    if (typeof inputFunction != "function") {throw "Entered input has invalid function" }
    let newObj = {};
    for (let i = 0; i < Object.keys(inputObj).length; i++) {
        let key = Object.keys(inputObj)[i];
        let val = inputObj[key];
        newObj[key] = inputFunction(val);
    }
    return newObj;
}

function  isDeepEqual(obj1, obj2) {
    try{

    if (obj1 === obj2) { return true; }
    if (typeof obj1!="object"){return false;}
    if (typeof obj2!="object"){return false;}
    if (typeof obj1 == null){return false;}
    if (typeof obj2 == null){return false;}
 
    if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
      if (Object.keys(obj1).length != Object.keys(obj2).length){return false;}

    for (var ele in obj1) {
      if (obj2.hasOwnProperty(ele))
      {  
        if (! isDeepEqual(obj1[ele], obj2[ele])){return false;}
      }
      else
        return false;
    }

    return true;
  }
  else
    return false;
}
catch(e){console.log(e);}}




module.exports = {
    makeArrays, computeObject, isDeepEqual

};