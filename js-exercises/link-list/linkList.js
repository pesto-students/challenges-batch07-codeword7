import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    // code here
    const newNode = new LinkListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
    return this;
  }

  append(value) {
    // code here
    const newNode = new LinkListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
    return this;
  }

  pop() {
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.size -= 1;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    const currentHead = this.head;
    this.head = currentHead.next;
    this.size -= 1;
    if (this.size === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  get(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    return prevNode;
  }

  delete(value) {
    // code here
    if (!this.head) return undefined;
    if (this.head.value === value) {
      this.shift();
      return true;
    }
    if (this.tail.value === value) {
      this.pop();
      return true;
    }
    const previousNode = this.get(value);
    if (previousNode) {
      const removed = previousNode.next;
      previousNode.next = removed.next;
      this.size -= 1;
      return true;
    }
    return false;
  }

  traverse() {
    // code here
    let node = this.head;
    while (node) {
      node = node.next;
    }
  }

  contains(value) {
    // code here
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }

    return false;
  }

  length() {
    // code here
    return this.size;
  }
}
