let i = 0;
let j = 0;
let k = 0;
let length;
let digitLength;
let lowerLength;
let upperLength;
let speacialLength;
let randomLimit;
let lengthArray = [];
let password = [];

function generatePassword(request) {
    console.log('generatePassword - findLengthOfEachType');
    findLengthOfEachType(request);
    console.log('generatePassword - createPassword');
    createPassword();
    return password.toString();
}

function findLengthOfEachType(request){
  console.log('PasswordGenerator - findLengthOfEachType :' + JSON.stringify(request));
  length = request.lengthValue;
  digitLength = request.digitValue ? 1 : 0;
  lowerLength = request.lowerValue ? 1 : 0;
  upperLength = request.upperValue ? 1 : 0;
  speacialLength = request.specialValue ? 1 : 0;

  i = getMinLengthOfEachType(length);
  j = ( digitLength + lowerLength + upperLength + speacialLength);
  getFinalLengthOfEachType ();

  k = 0;
  if (request.digitValue){
    digitLength = lengthArray[k] + i;
    k = k + 1;
    console.log(JSON.stringify(digitLength));
  }
  if (request.lowerValue){
    lowerLength = lengthArray[k] + i;
    k = k + 1;
    console.log(JSON.stringify(lowerLength));
  }
  if (request.upperValue){
    upperLength = lengthArray[k] + i;
    k = k + 1;
    console.log(JSON.stringify(upperLength));
  }
  if (request.specialValue){
    speacialLength = lengthArray[k] + i;
    console.log(JSON.stringify(speacialLength));
  }
}

function getMinLengthOfEachType (length) {
  return Math.floor(length/5);
}

function getFinalLengthOfEachType () {
  lengthArray = [];
  randomLimit = length - (i*j);

  for(k = 0; k < (j-1); k++){
   lengthArray.push(generateRandom(randomLimit));
   randomLimit = randomLimit - lengthArray[k];
  }
  lengthArray.push(randomLimit);

  console.log('PasswordGenerator - lengthArray :' + JSON.stringify(lengthArray));
  lengthArray;
}

function createPassword () {
  let key;
  let digits = [0,1,2,3,4,5,6,7,8,9];
  let lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
  let uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N'];
  let special = ['#','?','+','@','-'];

  for(k = 0; k < digitLength; k++){
    console.log('k: ' + k );
    key = generateRandom(digits.length-1);
    console.log('key: ' + key );
    password.push(digits[key]);
  }
  console.log('PasswordGenerator - createPassword :' + JSON.stringify(password));

  for(k = 0; k < lowerLength; k++){
    key = generateRandom(lowers.length-1);
    password.push(lowers[key]);
  }
  console.log('PasswordGenerator - createPassword :' + JSON.stringify(password));

  for(k = 0; k < upperLength; k++){
    key = generateRandom(uppers.length-1);
    password.push(uppers[key]);
  }
  console.log('PasswordGenerator - createPassword :' + JSON.stringify(password));

  for(k = 0; k < speacialLength; k++){
    key = generateRandom(special.length-1);
    password.push(special[key]);
  }
  console.log('PasswordGenerator - createPassword :' + JSON.stringify(password));

  password.sort(function(a, b){return 0.5 - Math.random()});
}

function generateRandom (limit) {
    return Math.floor(Math.random()*limit);
}

/*
NOTLAR:

https://www.w3schools.com/js/js_array_sort.asp
points.sort(function(a, b){return 0.5 - Math.random()});

With clever parameter setting, you can use splice()
to remove elements without leaving "holes" in the array:
*/

export default {
  generatePassword
};
