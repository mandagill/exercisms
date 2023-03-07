export class Matrix {
  constructor(inputString: string) {
    type Matrix = {
      rows: []
      columns: []
    }
    // I want to define the type Matrix but when I did,
    // the compiler complained that the type was not assignable?
  }

  get rows(): unknown {
    return '1'
  }

  get columns(): unknown {
    throw new Error('Remove this statement and implement this function')
  }
}
