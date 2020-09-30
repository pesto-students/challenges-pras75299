function minima(arrayLength, arrayArg) {
  const sortedArray = arrayArg.sort((a, b) => a - b);

  return sortedArray.splice(0, arrayLength);
}

export { minima };
