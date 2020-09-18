function lastIndexOf(item, list) {
  let lastIndex = -1;
  if (list.length === 0) {
    return -1;
  }
  for (let i = list.length; i > 0; i -= 1) {
    if (list[i] === item) {
      // eslint-disable-next-line no-return-assign
      return lastIndex = i;
    }
  }
  return lastIndex;
}

export {
  lastIndexOf,
};
