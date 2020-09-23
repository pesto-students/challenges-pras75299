function chunkArrayInGroups(array, chunkSize) {
  const chunks = [];
  let i = 0;
  const arrayLength = array.length;

  while (i < arrayLength) {
    chunks.push(array.slice(i, i += chunkSize));
  }
  return chunks;
}

export {
  chunkArrayInGroups,
};
