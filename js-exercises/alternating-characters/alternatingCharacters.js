function alternatingCharacters(array) {
  const deleteCountArray = [];

  for (let j = 0; j < array.length; j += 1) {
    let str = '';
    let deleteCounter = 0;
    for (let i = 0; i < array[j].length; i += 1) {
      if (str !== array[j][i]) {
        str = array[j][i];
      } else { deleteCounter += 1; }
    }
    deleteCountArray.push(deleteCounter);
  }

  return deleteCountArray;
}

export { alternatingCharacters };
