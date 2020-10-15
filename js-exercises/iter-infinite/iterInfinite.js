/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
function checkValidNumber(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw TypeError(`Expected of type number, instead got type of ${typeof value}`);
  }
}

function checkIterator(value) {
  if (typeof value[Symbol.iterator] !== 'function') {
    throw TypeError(`Expected an Iterator got ${typeof value}`);
  }
}

//! Count Function
function* count(start, step = 1) {
  checkValidNumber(start);
  checkValidNumber(step);
  while (true) {
    yield (start);
    start += step;
  }
}

//! cycle Function
function* cycle(iter, n) {
  checkIterator(iter);
  checkValidNumber(n);
  while (n--) {
    for (const el of iter) {
      yield el;
    }
  }
}

// repeat Function
function* repeat(value, n) {
  checkValidNumber(n);
  while (n--) {
    yield value;
  }
}

export {
  count,
  cycle,
  repeat,
};
