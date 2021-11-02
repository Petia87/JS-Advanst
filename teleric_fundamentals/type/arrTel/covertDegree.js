gets()
  .split(' ')
  .map(x => Math.round(+x * 1.8 + 32))
  .forEach(x => print(x))