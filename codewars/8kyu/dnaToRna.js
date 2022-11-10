let dna = "GTGTGT";

function DNAtoRNA(dna) {
  let rna = dna.replace(/T/g, "U");
  return rna;
}

console.log(DNAtoRNA(dna));

// previous attempt below (codewars did not recognize replaceAll)

// let dna = "GTGTGT";

// function DNAtoRNA(dna) {
//   let rna = dna.replaceAll("T", "U");
//   return rna;
// }

// console.log(DNAtoRNA(dna));
