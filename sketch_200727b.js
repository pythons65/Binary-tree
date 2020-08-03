var tree;
var univa;
function setup() {
  createCanvas(460, 400);
  tree = new Tree()
    b = createButton('add')
    b1 = createButton('restart')
    b1.mousePressed(()=> {tree.root = null})
    b.mousePressed(handleAdd)
    univa = createP('l')
}
function handleAdd() {
  tree.addNode(int(random(0, 100)))
}

function unival(node) {
  if (node.left == null && node.right == null){
  return 1
  }
  else if (node.left != null && node.right != null){
    return unival(node.left) + unival(node.right)
  }
  else if (node.left != null){
  return unival(node.left)
  }
  else{
  return unival(node.right)
  }
}

function draw() {
  background(220);
  if (tree.root != null) {
    univa.html(unival(tree.root))
    tree.traverse()
  }
}
