export function toRna(Dna: string) {
  if (isValidInput(Dna) === false) {
    throw new Error("Invalid input DNA.");
  }

  let rnaString = "";
  for (let i = 0; i < Dna.length; i++) {
    if (Dna[i] === "G") {
      rnaString = rnaString.concat("C");
    } else if (Dna[i] === "C") {
      rnaString = rnaString.concat("G");
    } else if (Dna[i] === "T") {
      rnaString = rnaString.concat("A");
    } else if (Dna[i] === "A") {
      rnaString = rnaString.concat("U");
    }
  }
  console.log(`this is what is returned: ${rnaString}`);
  return rnaString;
}

function isValidInput(input: string): Boolean {
  const regex1 = new RegExp(/[B]/g);
  const regex2 = new RegExp(/[D-F]/g);
  const regex3 = new RegExp(/[H-S]/g);
  const regex4 = new RegExp(/[U-Z]/g);
  let isValid = true;

  const check1 = regex1.test(input);
  const check2 = regex2.test(input);
  const check3 = regex3.test(input);
  const check4 = regex4.test(input);

  if (
    check1 === true ||
    check2 === true ||
    check3 === true ||
    check4 === true
  ) {
    isValid = false;
  }

  return isValid;
}
