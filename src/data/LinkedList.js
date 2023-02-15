export class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new ListNode(value);
    if (this.root == null) {
      this.root = node;
    } else {
      let n = this.root;
      while (n.next != null) {
        n = n.next;
      }

      n.next = node;
    }
  }

  toArray() {
    const arr = [];

    let node = this.root;
    while (node != null) {
      arr.push(node.value);
      node = node.next;
    }

    return arr;
  }
}
