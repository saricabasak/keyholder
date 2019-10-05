var AES = require("crypto-js/aes");
/**
 * Verilen password'ü masterKey ile şifreler
 * @param {*} masterKey 
 */
export const encrypt = (password, masterKey) => {
  var encrypted = AES.encrypt(password, masterKey);
  return encrypted
};

/**
 * Verilen passwordü master key ile açar.
 * Açamama durumuda olacak nasıl bir şey olacağını bilemiyorum hata mı alacak yoksa farklı bir değer mi dönecek göreceğiz.
 * @param {*} masterKey 
 */
export const decrypt = (encryptedPassword,masterKey) => {
  var decrypted = AES.decrypt(encryptedPassword, masterKey);
  return decrypted
};