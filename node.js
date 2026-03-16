class Node {
  constructor(x = null, y = null, prev = null) {
    this.x = x;
    this.y = y;
    this.prev = prev;
  }
  isEqual(node)
  {
    return this.x === node.x && this.y === node.y;
  }
}

export {Node}