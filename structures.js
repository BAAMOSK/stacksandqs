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

  pop(data) {
    //declares inputted node as the the top
    const node = this.top;
    //take the top of the stack and now make it equal to the one next to the node
    this.top = node.next;
    //return removed node
    return node.data;
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


function display(stack) {
  //check if empty
  if(!stack.top) {
    return 'Nothing there';
  }
  //otherwise display stack
  console.log(stack);
}

const dishes = new Stack();
console.log(dishes.createNode());


dishes.push('blue');
dishes.push('green');
dishes.push('red');
console.log(dishes);

console.log(peek(dishes));

dishes.pop();
console.log(dishes);
display(dishes);
