var CryptoJS = require("crypto-js");
/**
 * Verilen password'ü masterKey ile şifreler
 * @param {*} masterKey 
 */
export const encrypt = (password, masterKey) => {
  var encrypted = CryptoJS.AES.encrypt(password, masterKey);
  return encrypted.toString()
};

/**
 * Verilen passwordü master key ile açar.
 * Açamama durumuda olacak nasıl bir şey olacağını bilemiyorum hata mı alacak yoksa farklı bir değer mi dönecek göreceğiz.
 * @param {*} masterKey 
 */
export const decrypt = (encryptedPassword,masterKey) => {
  console.log("decrypt is started");
  var decryptedBytes = CryptoJS.AES.decrypt(encryptedPassword, masterKey);
  console.log("decrypt decryptedBytes =  " + decryptedBytes);
  var decryptedPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);
  console.log("decrypt decryptedPassword =  " + decryptedPassword);
  return decryptedPassword
};