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

  dequeue() {
    if(!this.first) {
      return;
    }
    //store first in queue into node
    const node = this.first;
    //set the new first to be the one after node
    this.first = node.prev;
   //if last item in queue, then last is now null
     if(node === this.last) {
       this.last = null;
     }
  }
}

const line = new Queue;
line.enqueue('Tee');
line.enqueue('Thien');
line.enqueue('Erza');
line.dequeue();
console.log(line);
