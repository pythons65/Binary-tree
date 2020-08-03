class Node {
  constructor(x, y) {
    this.left = null;
    this.right = null;
    this.value = null;
    this.x = x;
    this.y = y;
    this.offsetX = null;
  }

  addValue(val) {
    this.value = val
  }
  visit(parent) {
    if (this.left != null) {
      this.left.visit(this)
    }
      fill(255)
      line(parent.x, parent.y+10, this.x, this.y-10)
      ellipse(this.x, this.y, 20, 20)
      textAlign(CENTER)
      fill(0)
      text(this.value, this.x, this.y+5)
      if (this.right != null) {
      this.right.visit(this)
    }
  }

  addNode(node) {
    let offt = 13
      let offsetY = 50
      if (this.value > node.value) {
      if (this.left == null) {
        this.left = node
          this.left.offsetX = this.offsetX - offt
          this.left.x = this.x - this.left.offsetX;
        this.left.y = this.y + offsetY;
      } else {
        this.left.addNode(node)
      }
    } else if (this.value < node.value) {
      if (this.right == null) {
        this.right = node
          this.right.offsetX = this.offsetX - offt
          this.right.x = this.x + this.right.offsetX;
        this.right.y = this.y + offsetY;
      } else {
        this.right.addNode(node)
      }
    }
  }
}
