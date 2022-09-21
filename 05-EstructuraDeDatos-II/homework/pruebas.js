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

console.log(selectionSort([10, -2, -7, 4]))