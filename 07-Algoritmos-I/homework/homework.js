'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let primos = [2,3,5,7,11,13,17]
  let array = [1];
  for (let i = 0; i < primos.length; i++){
    while(num % primos[i] === 0){
      num = num / primos[i];
      array.push(primos[i])
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var order = array;
  for(var i = 0; i < order.length; i++){
    for(var j = 0; j < order.length - i; j++){
      if (order[j] > order[j+1]){ 
        let aux = order[j];
        order[j] = order[j+1];
        order[j+1] = aux;
      }
    }
  }
  return order;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let order = array;
  for(let i = 1; i < order.length; i++){
     let j = i - 1;
     let temp = order[i];
     while(j>=0 && order[j] > temp){
       order[j+1] = order[j];
       j--;
     }
     order[j+1] = temp;
  }
  return order;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let cont = [];
  for(let i = 0; i < array.length; i++){
    let menor = array[i];
    for(var j = i+1;j < array.length; j++){
      if(menor > array[j]){
        array[i]= array[j]
        array[j] = menor; 
        menor = array[i];
      }
    }
    console.log(menor);
    cont[i] = menor

  }

  return cont;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
