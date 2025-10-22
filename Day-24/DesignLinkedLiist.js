var MyLinkedList = function (val) {
  this.head = null;
  this.size = 0;
};

var Node = function (val) {
  this.val = val;
  this.next = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const newNode = new Node(val);
  if (index > this.size) return;
  if (index === 0) {
    this.addAtHead;
  } else if (index === this.size) {
    this.addAtTail;
  } else {
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = this.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {};

//   Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
//   var param_1 = obj.get(index)
//   obj.addAtHead(val)
//   obj.addAtTail(val)
//   obj.addAtIndex(index,val)
//   obj.deleteAtIndex(index)
obj.addAtHead(5);
obj.addAtHead(10);
obj.addAtTail(15);
// obj.addAtTail(15);
obj.addAtIndex(10, 12);
console.log(obj);
