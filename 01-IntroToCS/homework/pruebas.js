function DecimalABinario(num) {
    // tu codigo aca
    var i = num;
    var residuo=0;
    var respuesta = "";
    while(i<=1){
      residuo = i%2;
      if(residuo===0){
        respuesta="0" + respuesta;
      }else{
        respuesta="1" + respuesta;
      }
      i = Math.trunc(i/2);
    }
  
    
    console.log(respuesta);
  }
  DecimalABinario(7);