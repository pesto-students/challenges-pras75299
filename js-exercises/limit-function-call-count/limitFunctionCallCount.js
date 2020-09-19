const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  // eslint-disable-next-line consistent-return
  const cbCallLimiter = (...args) => {
    if (count < n) {
      count += 1;
      return cb(...args);
    }
  };
  return cbCallLimiter;
};

export {
  limitFunctionCallCount,
};
