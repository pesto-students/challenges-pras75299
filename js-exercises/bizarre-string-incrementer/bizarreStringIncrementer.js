/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
function bizarreStringIncrementer(inputString) {
  if (isNaN(parseInt(inputString[inputString.length - 1]))) return `${inputString}1`;
  return inputString.replace(/(0*)([0-9]+$)/, (match, p1, p2) => {
    const up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

export {
  bizarreStringIncrementer,
};
