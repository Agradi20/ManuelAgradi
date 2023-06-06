'use strict';

function BinarioADecimal(num) {
   var suma = 0;
   var longitud = num.length;
 
   for (var i = 0; i < longitud; i++) {
     var digito = Number(num.charAt(longitud - 1 - i));
     suma += digito * Math.pow(2, i);
   }
 
   return suma;
   
}


function DecimalABinario(num) {
   var binario = '';
   while (num > 0) {
      binario = (num % 2) + binario;
      num = (num / 2) | 0;
   }
   return binario;
}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
