// Roman Numeral Converter

/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

/* convertToRoman(2) should return the string II.

convertToRoman(3) should return the string III.

convertToRoman(4) should return the string IV.

convertToRoman(5) should return the string V.

convertToRoman(9) should return the string IX.

convertToRoman(12) should return the string XII.

convertToRoman(16) should return the string XVI.

convertToRoman(29) should return the string XXIX.

convertToRoman(44) should return the string XLIV.

convertToRoman(45) should return the string XLV.

convertToRoman(68) should return the string LXVIII

convertToRoman(83) should return the string LXXXIII

convertToRoman(97) should return the string XCVII

convertToRoman(99) should return the string XCIX

convertToRoman(400) should return the string CD

convertToRoman(500) should return the string D

convertToRoman(501) should return the string DI

convertToRoman(649) should return the string DCXLIX

convertToRoman(798) should return the string DCCXCVIII

convertToRoman(891) should return the string DCCCXCI

convertToRoman(1000) should return the string M

convertToRoman(1004) should return the string MIV

convertToRoman(1006) should return the string MVI

convertToRoman(1023) should return the string MXXIII

convertToRoman(2014) should return the string MMXIV

convertToRoman(3999) should return the string MMMCMXCIX */

function convertToRoman(num) {
 let res = '';
 for (let i = 1000; i >= 1; i /= 10) {
   let rep = Math.floor(num / i);
   for (let j = 0; j < rep; j++) {
     res += i == 1000 ? 'M' : i == 100 ? 'C' : i == 10 ? 'X' : 'I';
   }
   num -= rep * i;
 }
 return res.replace('CCCCC','D').replace('XXXXX','L').replace('IIIII','V').replace('CCCC','CD').replace('XXXX','XL').replace('IIII','IV').replace('DCD','CM').replace('LXL','XC').replace('VIV','IX');
}

console.log(convertToRoman(659)); // DCLIX
// I, IV, V, IX, X, XL, L, XC, C, CD, D, CM, M