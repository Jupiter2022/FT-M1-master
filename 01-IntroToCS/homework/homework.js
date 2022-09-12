'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var array = num.split('');

  var control = 0;
  var respuesta=0;
  for(let i=array.length-1;i>=0;i--){
  
     if (array[i]==="1"){
         respuesta= respuesta + Math.pow(2, control);
       }
      control++;
  }
 return respuesta;
}

function DecimalABinario(num) {
  // tu codigo aca
  var i = num;
  var residuo=0;
  var respuesta = "";
  while(i>1){
    residuo = i%2;
    if(residuo===0){
      respuesta="0" + respuesta;
    }else{
      respuesta="1" + respuesta;
    }
    i = Math.trunc(i/2);
  }
  respuesta="1" + respuesta;
  
  return respuesta;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}