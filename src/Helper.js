function randRoll(arr) {
  const newDie1 = arr[Math.floor(Math.random() * arr.length)];
  const newDie2 = arr[Math.floor(Math.random() * arr.length)];

  return [newDie1, newDie2];
}

export { randRoll };
