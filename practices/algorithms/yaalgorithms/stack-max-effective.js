class StackMaxEffective {
  constructor() {
    this.data = [];
    this.max = undefined;
  }

  pop() {
    if (this.data.length === 0) {
      throw new Error('error');
    }

    const val = this.data.pop();

    this.max = this.data[0];
    for (const v of this.data) {
      this.max = Math.max(v, this.max);
    }

    return val;
  }

  push(val) {
    this.max = typeof this.max !== 'number' ? val : Math.max(this.max, val);
    this.data.push(val);
  }

  getMax() {
    return this.max;
  }
}

const stack = new StackMaxEffective();
stack.push(4);
stack.push(-5);
stack.push(7);
console.log(stack.getMax());
console.log(stack.pop());
console.log(stack.getMax());
console.log(stack.pop());
console.log(stack.getMax());
console.log(stack.pop());
console.log(stack.getMax());
console.log(stack.pop());
