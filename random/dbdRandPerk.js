// function will output a random killer along with 2 random perks

function randomKiller() {
  const killerPerks = [
    {
      name: "doctor",
      perks: ["1", "2", "3"],
    },
    {
      name: "bubba",
      perks: ["4", "5", "6"],
    },
    {
      name: "trapper",
      perks: ["7", "8", "9"],
    },
  ];

  let result = killerPerks[Math.floor(Math.random() * killerPerks.length)];

  function getRandomPerks(perks) {
    let shuffArr = result.perks.sort(() => Math.random() - 0.5);
    let spliceShuff = shuffArr.splice(0, 2).join(" & ");
    return spliceShuff;
  }

  return `${result["name"]} ${getRandomPerks(result.perks)}`;
}

console.log(randomKiller());
