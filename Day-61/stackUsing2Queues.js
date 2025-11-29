//implement stack using 2 queues
//this should behave like stack but internally use 2 queues to perform stack operations.

function Queue() {
  this.q1 = [];
  this.q2 = [];
}

Queue.prototype.push = function (e) {
  this.q1.push(e);
};

Queue.prototype.pop = function () {
  const n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  const poppedElement = this.q1.shift();
  const temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return poppedElement;
};

Queue.prototype.top = function () {
  const n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  const front = this.q1.shift();
  this.q2.push(front);
  return front;
};

Queue.prototype.empty = function () {
  return this.q1.length === 0;
};
//leetcode solution

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  const n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  const poppedElement = this.q1.shift();
  const temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return poppedElement;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  const frontElement = this.q1.shift();
  this.q2.push(frontElement);
  const temp = this.q1;
  this.q1 = this.q2;
  this.q2 = this.q1;
  return frontElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
