function createNode(data = null, next = null, prev = null) {
  return { data, next, prev };
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = createNode(data);
    if (this.last) {
      //POINTERS
      //changes pointer from next ==> last
      node.next = this.last;
      //changes pointer from <== node
      this.last.prev = node;
    }
    this.last = node;
    if (!this.first) {
      this.first = node;
    }
  }

  dequeue() {
    if (!this.first) {
      return;
    }
    //store first in queue into node
    const node = this.first;
    //set the new first to be the one after node
    this.first = node.prev;
    //if last item in queue, then last is now null
    if (node === this.last) {
      this.last = null;
    }
  }
}

function display(data) {
  // return data;
  let node = data.first;
  while(node !== null) {
    console.log(node.data);
    node = node.prev;
  }
};

const male = new Queue();
const female = new Queue();

male.enqueue('Frank');
male.enqueue('John');
male.enqueue('Sherlock');
male.enqueue('David');
male.enqueue('Christoper');

female.enqueue('Jane');
female.enqueue('Madonna');
female.enqueue('Beyonce');
// line.dequeue();
// display(male);
// display(female);
// console.log(male.last);
function squareDance(q1, q2) {

  while(q1.last || q2.last) {
    let dancer1 = q1.dequeue();
    let dancer2 = q2.dequeue();
    console.log(dancer1);
    //console.log(`Female dancer is: ${dancer2.data} and the male dancer is ${dancer1.data}`);
  }
}

console.log(squareDance(male, female));

function squareDance(queue){
  const spareMen = new Queue();
  const spareWomen = new Queue();

  const pairs = new Queue();

  let personA, personB;

  while(personA = queue.dequeue()){
    if(personA.gender === 'male') {
      if(personB = spareWomen.dequeue()) {
        pairs.enqueue([personA,personB]);
      }
      else {
        spareMen.enqueue(personA);
      }
    }

    else if(personA.gender === 'female'){
      if(personB = spareMen.dequeue()){
        pairs.push([personA, personB]);
      }
      else {
        spareWomen.enqueue(personA);
      }
    }
  }
  return pairs;
}

const queue = new Queue();
queue.enqueue({
    name: 'Gwendolyn Wilderman',
    gender: 'female'
});
queue.enqueue({
    name: 'Wilbur Brakus',
    gender: 'male'
});
queue.enqueue({
    name: 'Vallie Howell',
    gender: 'female'
});
queue.enqueue({
    name: 'Nova Doyle',
    gender: 'female'
});
queue.enqueue({
    name: 'Monica Turcotte',
    gender: 'female'
});
queue.enqueue({
    name: 'Corine Smith',
    gender: 'female'
});
queue.enqueue({
    name: 'Jamir Sporer',
    gender: 'male'
});

console.log((squareDance(queue)));