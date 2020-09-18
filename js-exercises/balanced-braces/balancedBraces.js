function balancedBraces(...args) {
  const brackets = '[]{}()<>';
  const stack = [];

  for (const bracket of args) {
    const bracketsIndex = brackets.indexOf(bracket);

    if (bracketsIndex === -1) {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
    } else if (stack.length === 0 || stack.pop() !== bracketsIndex) {
      return false;
    }
  }
  return stack.length === 0;
}

export {
  balancedBraces,
};
