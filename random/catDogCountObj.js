function sortCatsAndDogs(animals) {
  // Initialize empty objects for cats and dogs
  let cats = {};
  let dogs = {};

  // Iterate over the animals array
  for (let animal of animals) {
    // If the animal is a cat, add it to the cats object
    if (animal.type === "cat") {
      cats[animal.name] = true;
    }
    // If the animal is a dog, add it to the dogs object
    else if (animal.type === "dog") {
      dogs[animal.name] = true;
    }
  }

  // Return the objects with the count of cats and dogs
  return {
    cats: Object.keys(cats).length,
    dogs: Object.keys(dogs).length,
  };
}

// Example usage
console.log(
  sortCatsAndDogs([
    { name: "Whiskers", type: "cat" },
    { name: "Barkley", type: "dog" },
    { name: "Fluffy", type: "cat" },
    { name: "Fido", type: "dog" },
    { name: "Mittens", type: "cat" },
    { name: "Rufus", type: "dog" },
  ])
);

// {cats: 3, dogs: 3}
