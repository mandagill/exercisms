export function isLeap(year: number): boolean {
  switch (year % 400) {
    case 0:
      return true;
    default:
      if (year % 4 === 0 && year % 100 !== 0) {
        return true;
      }
      return false;
  }
}
