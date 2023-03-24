export class Matrix {
  constructor(public inputString: string) {}

  get rows(): Array<Array<number>> {
    const matrixOfStrings: Array<Array<string>> = this.parseString(
      this.inputString
    );
    const rows = this.buildArrays(matrixOfStrings, "rows");
    return rows;
  }

  get columns(): Array<Array<number>> {
    const matrixOfStrings: Array<Array<string>> = this.parseString(
      this.inputString
    );
    const columns = this.buildArrays(matrixOfStrings, "columns");
    return columns;
  }

  private parseString(data: string): Array<Array<string>> {
    const listOfStrings = data.split("\n");
    let matrix: Array<Array<string>> = [];

    [...listOfStrings].forEach((stringOfWords) => {
      const toArray = stringOfWords.split(" ");
      matrix.push(toArray);
    });

    return matrix;
  }

  // I don't like that this is doing the cast and the data arranging; those
  // actions should be better encapsulated IMO
  private buildArrays(
    data: Array<Array<string>>,
    dimension: "rows" | "columns"
  ): Array<Array<number>> {
    let returnMatrix: Array<Array<number>> = [];

    if (dimension === "rows") {
      [...data].forEach((arrayOfStrings) => {
        let numberArray: Array<number> = [];
        arrayOfStrings.forEach((numberAsString) => {
          numberArray.push(Number(numberAsString));
        });
        returnMatrix.push(numberArray);
      });
    } else if (dimension === "columns") {
      // first, check what the longest row is
      let longestArrayLength: number = 0;
      [...data].forEach((arrayOfStrings) => {
        console.log(`here is each arrayOfStrings: ${arrayOfStrings}`);
        if (arrayOfStrings.length >= longestArrayLength) {
          console.log(
            `here is the current longest array length: ${longestArrayLength}`
          );
          longestArrayLength = arrayOfStrings.length;
        }
      });
      // next, iterate over *each column using that index*
      for (let index = 0; index < longestArrayLength; index++) {
        let arrayOfColumnValues: Array<number> = [];
        [...data].forEach((columnsOfStrings) => {
          arrayOfColumnValues.push(Number(columnsOfStrings[index]));
        });
        returnMatrix.push(arrayOfColumnValues);
      }
    }
    return returnMatrix;
  }
}
