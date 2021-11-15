function curriedAdd(total) {
  if (!total) return 0;

  return function add(val) {
    while (val !== undefined) {
      total += val;
      return add;
    }

    return total;
  };
}

module.exports = { curriedAdd };
