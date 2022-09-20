function HashTable() {
  this.memory=[];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(input){
  let key = 0;
  for (let i = 0; i < input.length; i++){
    key += input.charCodeAt(i);
  }
  return key % this.numBuckets;
}
HashTable.prototype.hasKey = function(clave){
  //hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).
  let key = this.hash(clave);
  if (this.memory[key][clave]) return true
  return false;
}
HashTable.prototype.set = function(clave, valor){
  if (typeof clave !== 'string') throw TypeError('Keys must be strings')
  let key = this.hash(clave);
  
  if (!this.memory[key]){
    this.memory[key] = {};
    this.memory[key][clave]=valor;
    return this.memory[key];
  }
  this.memory[key][clave]=valor
  return this.memory[key];
}
HashTable.prototype.get = function(clave){
  let key = this.hash(clave);
  return this.memory[key][clave]
}

let tabla = new HashTable();
console.log(tabla.set('foobar', 'fluf cats'))
console.log(tabla.set('ofo', 'bar2'))
console.log(tabla.get('foo'))
console.log(tabla.hasKey('foobar'))
console.log(tabla.hasKey('raboof'))