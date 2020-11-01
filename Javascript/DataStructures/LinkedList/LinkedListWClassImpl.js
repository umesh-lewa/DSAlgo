class LinkedListNode {

  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }

}

console.log(new LinkedListNode(3));
console.log(new LinkedListNode(3, 10));
console.log(new LinkedListNode('string', true));

class LinkedList {

  constructor(value) {
  this.size = 0;
  this.head = null;
  this.tail = null;

  if (value) {
    if (Array.isArray(value)) return this.fromArray(value);
    return new TypeError(value + ' is not iterable');
  };
  return this;
}

fromArray(values) {
  values.forEach(value => this.append(value));
  return this;
}

append(value) {
  this.size += 1;
  const newNode = new LinkedListNode(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return this;
  };
  this.tail.next = newNode;
  this.tail = newNode;
  return this;
}

toArray(useNodes = false) {
  const nodes = [];
  let currentNode = this.head;
  while (currentNode) {
    nodes.push(useNodes ? currentNode : currentNode.value);
    currentNode = currentNode.next;
  };
  return nodes;
}

delete(value, deleteOne = false) {
  if (!this.head) return false;
  let deletedNode = null;
  /*
  // If the head needs to be deleted
  while (this.head && this.head.value === value) {
    this.size -= 1;
    deletedNode = this.head;
    this.head = this.head.next;
    if (deleteOne) return true;
  };
*/
  let currentNode = this.head;
  // If any node except the head or tail needs to be deleted
  if (currentNode !== null) {
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        this.size -= 1;
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        if (deleteOne) return true;
      } else {
        currentNode = currentNode.next;
      };
    };
  };

  /*
  // If the tail needs to be deleted
  if (this.tail.value === value) {
    this.tail = currentNode;
  };
  if (deletedNode === null) {
    return false;
  } else {
    return true;
  };
  */
}


}



let list = new LinkedList([1, 2, 3]);
console.log(list.toArray());
console.log(list.toArray(true));