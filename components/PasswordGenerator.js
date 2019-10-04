let length;
let digitLength;
let lowerLength;
let upperLength;
let speacialLength;

function generatePassword(request) {
    findLengthOfEachType(request);
    return createPassword();
}

function findLengthOfEachType(request){
  console.log('PasswordGenerator - findLengthOfEachType :' + JSON.stringify(request));
  length = request.lengthValue;
  digitLength = request.digitValue ? 1 : 0;
  lowerLength = request.lowerValue ? 1 : 0;
  upperLength = request.upperValue ? 1 : 0;
  speacialLength = request.specialValue ? 1 : 0;

  let i = getMinLengthOfEachType(length);
  let j = ( digitLength + lowerLength + upperLength + speacialLength);
  let lengthArray = getFinalLengthOfEachType (i,j);

  let k = 0;
  if (request.digitValue){
    digitLength = lengthArray[k] + i;
    k = k + 1;
  }
  if (request.lowerValue){
    lowerLength = lengthArray[k] + i;
    k = k + 1;
  }
  if (request.upperValue){
    upperLength = lengthArray[k] + i;
    k = k + 1;
  }
  if (request.specialValue){
    speacialLength = lengthArray[k] + i;
  }
}

function getMinLengthOfEachType (length) {
  return Math.floor(length/5);
}

function getFinalLengthOfEachType (i,j) {
  let lengthArray = [];
  let randomLimit = length - (i*j);

  for(let k = 0; k < (j-1); k++){
   lengthArray.push(generateRandom(randomLimit));
   randomLimit = randomLimit - lengthArray[k];
  }
  lengthArray.push(randomLimit);

  return lengthArray;
}

function createPassword () {
  let key;
  let password = [];
  let digits = [0,1,2,3,4,5,6,7,8,9];
  let lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
  let uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N'];
  let special = ['#','?','+','@','-'];

  for(let k = 0; k < digitLength; k++){
    key = generateRandom(digits.length-1);
    password.push(digits[key]);
  }

  for(let k = 0; k < lowerLength; k++){
    key = generateRandom(lowers.length-1);
    password.push(lowers[key]);
  }

  for(let k = 0; k < upperLength; k++){
    key = generateRandom(uppers.length-1);
    password.push(uppers[key]);
  }

  for(let k = 0; k < speacialLength; k++){
    key = generateRandom(special.length-1);
    password.push(special[key]);
  }

  console.log('PasswordGenerator - createPassword :' + JSON.stringify(password));
  return password.sort(function(a, b){return 0.5 - Math.random()}).join('');
}

function generateRandom (limit) {
    return Math.floor(Math.random()*limit);
}

export default {
  generatePassword
};
