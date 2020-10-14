const fibonacciIter = {
  prev: 0,
  curr: 1,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    const currValue = this.prev + this.curr;
    this.curr = this.prev;
    this.prev = currValue;
    return {
      value: this.curr,
      done: false,
    };
  },
};

export { fibonacciIter };
