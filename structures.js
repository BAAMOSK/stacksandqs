class Stack {
  constructor() {
    this.top = null;
  }

createNode(data=null, next=null) {
    return {
        data,
        next
    };
};

  push(data) {
    //Runs only if empty
    if (!this.top) {
      this.top = this.createNode(data);
      return;
    }
    //Run if item already exists
    const node = this.createNode(data, this.top);
    //Prev pointer moves to new node
    this.top = node;
  }


};

  function peek(stack) {
    //check if empty
    if(!stack.top) {
      return 'Nothing there';
    }
    //structure.node.value
    return stack.top.data;
  }

const dishes = new Stack();
console.log(dishes.createNode());

console.log(dishes);
dishes.push('blue');
dishes.push('green');
dishes.push('red');
console.log(dishes);
console.log(peek(dishes));