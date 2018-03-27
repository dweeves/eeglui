export function compose(...fns) {
  if (fns.length === 0) {
    return fns;
  }
  return value => {
    const g = fnsAcc => {
      if (fnsAcc.length === 1) {
        return fnsAcc[0](value);
      }
      const [head, ...tail] = fnsAcc;
      return head(g(tail))
    };
    return g(fns)
  };
};
