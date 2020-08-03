class Tree{
   constructor(){
     this.root = null;
   }
  addNode(val){
    var node = new Node()
    node.addValue(val)
    if(this.root == null){
      this.root = node
      this.root.x = width/2
      this.root.y = 20;
      this.root.offsetX = 80
    }else{
      this.root.addNode(node)
    }
  }
  traverse(){
   this.root.visit(this.root)
  }
}
