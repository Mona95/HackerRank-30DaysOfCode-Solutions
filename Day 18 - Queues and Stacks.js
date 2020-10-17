
function Solution(){
      //both can be defined like arrays
      let stack = [],
          queue = [];
    
    this.pushCharacter = ((a) => {return stack.push(a)});
    this.enqueueCharacter = ((b) => {return queue.push(b)});
    this.popCharacter = (() => {return stack.pop()});
    this.dequeueCharacter = (() => {return queue.shift()});
}
