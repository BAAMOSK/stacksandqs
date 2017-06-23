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
    // if(!stack.top) {
    //   return 'Nothing there';
    // }
    // //structure.node.value
    // return stack.top.data;

    if(stack.top === null){
      return null;
    }
    return stack.top.data;
  }


function display(stack) {
  //check if empty
  if(!stack.top) {
    return 'Nothing there';
  }
  let node = stack.top;
  while(node !== null) {
    console.log(node.data);
    node = node.next;
  }
  //otherwise display stack
  // console.log(stack);

}
// const dishes = new Stack();
// console.log('Stack data structure --', dishes);

// dishes.push('blue');
// dishes.push('green');
// dishes.push('red');
// console.log(dishes);
// console.log('shows all dishes -- ', dishes);

// console.log('shows top dish -- ', peek(dishes));

// dishes.pop();
// console.log('the top dish is popped -- ', dishes);
// display('shows all the dishes', dishes);

function checkPalindrome(str) {
  const palindromes = new Stack();
  palindromes.createNode();
  for (let i=0; i<str.length; i++) {
    palindromes.push(str.charAt(i));
  }
  let revString = '';
  while(palindromes.top) {
    revString += palindromes.pop();
  }
  if(str === revString) {
    return true;
  }
  return false;
}
// console.log(checkPalindrome('car'));

function checkParens(str) {
  const parens = new Stack();
  let counterA = 0, counterB = 0, counterC = 0;

  for (let i=0; i<str.length; i++) {
    switch (str[i]) {
      case '(':
       counterA++;
       break;
      case ')':
        counterA--;
        break;
      case '{':
        counterB++;
        break;
      case '}':
        counterB--;
        break;
      case '[':
        counterC++;
        break;
      case ']':
        counterC--;
        break;
      default:
        break;
    }
  }
  // console.log(counterA, counterB, counterC);
  return (counterA === 0 && counterB === 0 && counterC ===0) ? true : false;
}

function parensMatch(string) {
  var stack = new Stack();

  for(let i=0;i<string.length;i++){
    var char = string.charAt(i);
    if(char === '(') {
      stack.push(char);
    }
    else if(char === ')') {
      var candidate = peek(stack);
      if(!candidate){
        console.log('The Error is at character', i+1)
        return false;
      }
      stack.pop()
    }
  }

  if(peek(stack)) {
    return false;
  }
  return true;
}

// console.log(checkParens('(({[]}))'));
// console.log('PM',parensMatch('(123) )('));