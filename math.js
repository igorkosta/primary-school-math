var exercise = (operation, digits) => {
  const n = 10 * digits;
  const number = () => Math.floor(Math.random() * n);
  console.log(`${number()} ${operation} ${number()}`);
}

exercise(2)
