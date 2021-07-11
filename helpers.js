export function digResults() {
  const min = 1;
  const max = 100;
  const result = min + (Math.random() * (max - min));
  // Chance of finding treasure
  if (result < 8){
    return 'X';
  };
  // if treasure not found chance remaining of finding a snake pit
  if (result < 20){
    return '֍';
  };
// Otherwise return empty dig
  return '۝';
}