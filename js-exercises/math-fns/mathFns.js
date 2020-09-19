// You can use the function from the `Math` module.
function sqrt(sqrtArg) {
  return Math.sqrt(sqrtArg);
}

function power(powerArgOne, powerArgTwo) {
  // eslint-disable-next-line no-restricted-properties
  return Math.pow(powerArgOne, powerArgTwo);
}

function round(roundArg) {
  return Math.floor(roundArg);
}

// Don't change the exported names.
export {
  sqrt,
  power,
  round,
};
