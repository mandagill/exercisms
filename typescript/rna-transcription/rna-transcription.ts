export function toRna(Dna: string) {
  if (isValidInput(Dna) === false) {
    throw new Error("Invalid input DNA.");
  }

  let rnaString = "";

  [...Dna].forEach((letter) => {
    if (letter === "G") {
      rnaString = rnaString.concat("C");
    } else if (letter === "C") {
      rnaString = rnaString.concat("G");
    } else if (letter === "T") {
      rnaString = rnaString.concat("A");
    } else if (letter === "A") {
      rnaString = rnaString.concat("U");
    }
  });

  return rnaString;
}

function isValidInput(input: string): boolean {
  const regex = new RegExp(/[B]|[D-F][H-S]|[U-Z]/g);
  return !regex.test(input);
}
