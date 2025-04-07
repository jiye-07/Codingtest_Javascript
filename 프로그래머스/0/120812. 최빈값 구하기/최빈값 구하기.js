function solution(array) {
  const count = {};

  array.forEach(num => {
    count[num] = (count[num] || 0) + 1;
  });

  const max = Math.max(...Object.values(count));

  const modes = Object.keys(count).filter(key => count[key] === max);

  return modes.length === 1 ? Number(modes[0]) : -1;
}