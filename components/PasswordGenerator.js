
let length;
let digitLength;
let lowercaseLength;
let uppercaseLength;
let speacialCharLength;
let randomLimit;

function generatePassword(request) {
  console.log('PasswordGenerator - generatePassword :' + JSON.stringify(request));
  length = request.lengthValue;
  digitLength = request.digitValue ? 1 : 0;
  lowercaseLength = request.lowerValue ? 1 : 0;
  uppercaseLength = request.upperValue ? 1 : 0;
  speacialCharLength = request.specialValue ? 1 : 0;

  digitLength = getCharLength(digitLength);
  console.log(JSON.stringify(digitLength));
  lowercaseLength = getCharLength(lowercaseLength);
  console.log(JSON.stringify(lowercaseLength));
  uppercaseLength = getCharLength(uppercaseLength);
  console.log(JSON.stringify(uppercaseLength));
  speacialCharLength = getCharLength(speacialCharLength);
  console.log(JSON.stringify(speacialCharLength));

}

function getCharLength (i) {
    randomLimit = length - digitLength - lowercaseLength - uppercaseLength - speacialCharLength;
    if (i > 0) {
      return this.generateRandom(randomLimit) + i;
    } else {
      return 0;
    }
  }

function generateRandom (randomLimit) {
    return Math.floor(Math.random()*randomLimit)+1;
  }

export default {
  generatePassword
};
