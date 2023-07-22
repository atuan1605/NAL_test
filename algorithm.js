function countVietnameseLetters(input) {
  const vietnameseLetters = new Set(['aw', 'aa', 'dd', 'ee', 'oo', 'ow', 'w']);
  let count = 0;
  let i = 0;

  while (i < input.length) {
    if (i + 1 < input.length) {
      const pair = input.substr(i, 2);
      if (vietnameseLetters.has(pair)) {
        count++;
        i += 2;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }

  return count;
}
function displayResult() {
    const input = document.getElementById('input').value;
    const result = countVietnameseLetters(input);
    document.getElementById('resultDisplay').textContent = `Result: ${result}`;
  }
