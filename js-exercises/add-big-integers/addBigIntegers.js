function addBigIntegers(intString) {
  const splitedString = intString.split('\n');
  let sum = 0;
  for (let i = 0; i < splitedString.length; i += 1) {
    sum += Number(splitedString[i]);
  }
  return sum.toString();
}

export { addBigIntegers };
