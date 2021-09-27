// Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addFullNameProperty‌‌ ‌that‌ ‌takes‌ ‌an‌ ‌object‌ ‌as‌ ‌a‌ ‌parameter.‌ ‌If the object has both a firstName and a lastName property, then it adds a new property with the key fullName and the value as a string of the firstName and lastName combined with a space between them.
// ex => var‌‌ ‌‌person‌ ‌‌‌=‌‌ ‌{‌ ‌firstName‌:‌ ‌‌'Leena'‌,‌ lastName:‌ ‌‌'Atia'‌ }
// console.log‌(person.fullName) ‌‌-> undefined ‌
// addFullNameProperty‌(person) ‌
// console.log‌(person.fullName) ‌‌-> ‌‘Leena‌ ‌Atia’‌ 

function addFullNameProperty‌(object){
  if(object.firstName && object.lastName){
    object.fullName = object.firstName + " " + object.lastName;
  }
};


// Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌printAllProperties‌‌ ‌that‌ takes ‌an‌ ‌object‌ ‌as a parameter. ( ‌(for...in‌) ‌statements‌‌‌ )

function printAllProperties‌‌(object){
  for (property in object){
    console.log(property,'-', object[property]);
  }
};

// Write a function called removeNumbersLargerThan that takes two parameters, a number and an object. It then removes all properties with values larger than the specified number.

function removeNumbersLargerThan(number, obj){
  Object.keys(obj).forEach(k => {
    if(!isNan(obj[k]) && obj[k] > number)
      delete obj[k];
  })
}

// Write a function called removeAllNumbers that takes an object as a parameter. It then removes all properties in the object that have (number) or (array) values.

function removeAllNumbers(object){
  Object.keys(object).forEach(k => {
    if(typeof object[k] === "number" || typeof object[k] === "array")
      delete object[k];
  })
}

// Write a function called getNthElementOfProperty that takes three parameters, an object, a key and a number. It then returns the element located at the index equal to the number parameter from the array at the given key. 
    // If the array is empty it should return undefined. 
    // If the property at the given key is not an array it should return undefined. 
    // If the key is not found in the object it should return undefined. 

// ex var‌‌ ‌‌obj‌ ‌‌=‌‌ ‌{‌array:‌ [1, 2, 6]} 
// getNthElementOfProperty(obj, ‘array’,1) -> 2 ‌

function getNthElementOfProperty(obj, key, index){
  if(obj[key])
    return obj[key][index];
};


// Write a function called extend that takes two objects and adds all the properties of the second object to the first object if the property’s key does not already exist.
// var obj1 = {a: 1, b: 2};  var obj2 = {b: 4, c: 3}; 
// extend(obj1, obj2) --> ‌‌{a: 1, b: 2, c: 3}      

function extend(obj1, obj2){
  Object.keys(obj2).forEach(key2 => {
    if(!obj1[key2])
      obj1[key2] = obj2[key2];
  })
  return obj1;
}

// Write a function called countAllCharacters that takes a string as a parameter and returns an object with each unique character as a key and the value is the amount of times it appears in the string.
// ‌‌countAllCharacters(‘hello’)‌‌ -> ‌‌{ h: 1, e: 1, l: 2, o: 1 }

function countAllCharacters(string){
  obj = {};
  for(let i=0; i < string.length; i++){
    obj[string[i]] = string.split(string[i]).length - 1;
  }
  return obj;
}

// Write a function called countWords that takes a string as a parameter and returns an object with each unique word as a key and the value is the amount of times it appears in the string
// countWords ('ask a bunch get a bunch’) ->{ ask: 1, a: 2, bunch: 2, get: 1 }

function countWords(string){
  let obj={};
  string.split(' ').forEach(word => {
    if(!obj[word])
      obj[word] = 1;
    else{
      obj[word]++;
    }
  })
  return obj;
}

// remove duplicate from an array using objects
function removeDuplicate(arr){
  let arrToSet = new Set(arr);
  return [...arrToSet];
}
arr = removeDuplicate(arr);

// Write a function called convertObjectToList that takes an object as a parameter and returns an array where each element is an array with the key as the first element and the value as the second.
// ‌‌convertObjectToList(obj) -> ‌[[‘name’, ’holly’], [‘age’, 35], [‘role’, ’producer’]]

function ‌‌convertObjectToList(obj){
  return Object.entries(obj);
}

//Write a function called select that takes two parameters, an object and an array. It then returns a new object with properties from the passed object whose keys were found in the array as elements.
// ‌‌‌‌var‌‌ ‌‌arr = [‘a’, ’b’, ’e’]
// var‌‌ ‌‌obj = ‌‌{ a: 1, b:‌ 2, c: 3,d: 4 }
// select(obj, arr) ‌-> ‌‌{ a: 1, b: 2 }

function select(obj, arr){
  let filtered = Object.entries(obj).filter(a => arr.includes(a[0]));
  return Object.fromEntries(filtered);
}

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

//O(N^2)
function containsCommonItem(arr1, arr2){
  for(let i=0; i < arr1.length; i++){
    for(let j=0; j < arr2.length; j++){
      if(arr1[i] === arr2[j])
        return true;
    }
  }
  return false;
}

//O(N)
function containsCommonItem(arr1, arr2){
  for(let i=0; i < arr1.length; i++){
    if(arr2.includes(arr1[i]))
      return true;
  }
  return false;
}

//O(N)
function containsCommonItem(arr1, arr2){
  return arr1.some(e => arr2.includes(e));
}

// try to solve last question with O(N^2) & O(N)
