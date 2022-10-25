function points(gamesArray) {
  let totalPoints = 0;

  for (let i = 0; i < gamesArray.length; i++) {
    // sample value    "3:1"
    const value = gamesArray[i];

    const parts = value.split(":");

    const x = parts[0];
    const y = parts[1];

    if (x > y) {
      totalPoints = totalPoints + 3;
    } else if (x === y) {
      totalPoints += 1;
    }
  }
  return totalPoints;
}
