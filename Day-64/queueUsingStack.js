var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  //worst case tc = o(n) avg tc = o(1)
  if (!this.s2.length) {
    const n = this.s1.length;
    for (let i = 0; i < n; i++) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  //tc - same as pop
  if (!this.s2.length) {
    const n = this.s1.length;
    for (let i = 0; i < n; i++) {
      this.s2.push(this.s1.pop());
    }
  }
  const frontElement = this.s2.pop();
  this.s2.push(frontElement);
  return frontElement;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.s1.length && !this.s2.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
