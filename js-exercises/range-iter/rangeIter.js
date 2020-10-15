function rangeIter(lb, ub) {
  if (typeof lb !== 'number') {
    throw TypeError(`Expected number got ${typeof lb}`);
  }
  if (typeof ub !== 'number') {
    throw TypeError(`Expected number got ${typeof ub}`);
  }
  let i;
  const Range = {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (lb < ub && i <= (ub - lb)) {
        i += 1;
        return { value: i };
      }
      return { done: true };
    },
  };
  return Range;
}

export { rangeIter };
