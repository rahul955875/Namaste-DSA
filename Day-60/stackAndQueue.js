//implement stack data structure

const stack = [];

//stack can only be accessed from one end called top

//push method to add element to the top of the stack
function push(element) {
  stack.push(element);
}
//pop method to remove element from the top of the stack
function pop() {
  stack.pop();
}
//peek method to view the top element of the stack

function peek() {
  return stack[stack.length - 1];
}

// implement queue data structure

const queue = [];

// in queue we can add element from the rare and pop the element only from the front (LIFO)

//enqueue method to add element to the rare of the queue
function enqueue(el) {
  queue.push(el);
}
//dequeue method to remove element from the front of the queue
function dequeue() {
  queue.shift();
}
//front method to view the front element of the queue
function front() {
  return queue[0];
}
