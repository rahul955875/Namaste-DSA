//implement stack using 2 queues
//this should behave like stack but internally use 2 queues to perform stack operations.

function Queue() {
  this.q1 = [];
  this.q2 = [];
}

Queue.prototype.push = function (e) {
  this.q1.push(e);
};
