function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}


BinarySearchTree.prototype.size = function(){
  if(!this.value) return null;
  if(!this.left && !this.right)return 1;
  if(this.left && !this.right)return 1 + this.left.size();
  if(!this.left && this.right)return 1 + this.right.size();  
  if(this.left && this.right)return 1 + this.left.size() + this.right.size();
}
BinarySearchTree.prototype.insert = function(value){ 
  if(!this.value) this.value = value;

  if (value > this.value){
    if (!this.right){
      this.right = new BinarySearchTree(value);
    }else{
      this.right.insert(value);
    }
  }else{
    if (!this.left){
      this.left = new BinarySearchTree(value);
    }else{
      this.left.insert(value)
    }
  }

}





BinarySearchTree.prototype.contains = function(value){
  //contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  if (value === this.value) return true;
  if(value > this.value){
    if(!this.right) return false;
    else return this.right.contains(value);
  }else{
    if(!this.left) return false;
    else return this.left.contains(value);
  }

}
BinarySearchTree.prototype.depthFirstForEach = function(){}
BinarySearchTree.prototype.breadthFirstForEach = function(){}

let arbol = new BinarySearchTree(20)
arbol.insert(32);
arbol.insert(30);
arbol.insert(35);
arbol.insert(12);
arbol.insert(15);
arbol.insert(11);
console.log(arbol.contains(11))
console.log(arbol.size())
console.log(arbol)