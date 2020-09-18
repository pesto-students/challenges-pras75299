function flipArgs(func, ...args) {
  const arr = [];
  for (let i = args.length; i >= 0; i -= 1) {
    arr.push(args[i]);
  }
  func(arr.join(','));
}
export { flipArgs };
