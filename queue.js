function createNode(data=null, next=null, prev=null) {
  return { data, next, prev};
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = createNode(data);
    if(this.last) {
      //POINTERS
      //changes pointer from next ==> last
      node.next = this.last;
      //changes pointer from <== node
      this.last.prev = node;
    }
    this.last = node;
    if(!this.first) {
      this.first = node;
    }
  }
}

const line = new Queue;
line.enqueue('Tee');
line.enqueue('Thien');
line.enqueue('Erza');
console.log(line);