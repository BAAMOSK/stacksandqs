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
<<<<<<< HEAD


};

  function peek(stack) {
    //check if empty
    if(!stack.top) {
      return 'Nothing there';
    }
    //structure.node.value
    return stack.top.data;
  }
=======

  pop(data) {
    //declares inputted node as the the top
    const node = this.top;
    //take the top of the stack and now make it equal to the one next to the node
    this.top = node.next;
    //return removed node
    return node.data;
  }
};
>>>>>>> refs/remotes/origin/master

const dishes = new Stack();
console.log(dishes.createNode());


dishes.push('blue');
dishes.push('green');
dishes.push('red');
console.log(dishes);
<<<<<<< HEAD
console.log(peek(dishes));
=======
dishes.pop();
console.log(dishes);
>>>>>>> refs/remotes/origin/master
