var moveCouples = function(row) {
  // Init count etc..
  let count = 0, n = row.length;
  // pos iniditacted what number is at what index
    // Given [3, 0, 1, 2]:
    // [1, 2, 3, 0]
    // Since 0 is at 1, 1 is at 2, 2 is at 3, and 3 is at 0
  let pos = [];
  for (let i = 0; i < n; i++) { pos[row[i]] = i; }
  // No need to iterate the entire array since it's enough to know one missing couple
  // to find the other
  for (let i = 0; i < n; i += 2) {
    // If a number is even next num should be n + 1
    // If a number is odd next num should be n - 1
    const j = row[i]%2 === 0 ? row[i]+1 : row[i]-1; // j is the target couple
    // If next number is not a couple to current
    if (row[i+1] !== j) {
      // Swap couples
      // Find its couple at index j in pos and place where it belongs
      const jatin = pos[j];
      const temp = row[i+1];
      row[i+1] = row[jatin];
      row[jatin] = temp;

      // Updated their positions
      // Where right couple was now is the wrong couple
      pos[temp] = jatin;
      // The right couple is where it needs to be now
      pos[j] = i+1;
      count++;
    }
  }
  return count;
}