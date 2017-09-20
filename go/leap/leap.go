package leap

const testVersion = 3

func IsLeapYear(year int) bool {
	/* uses if/else blocks to calculate leap year-ness
	*/

	if year % 400 == 0 {
		return true
	} else if year % 100 == 0 {
		return false
	} else if year % 4 == 0 {
		return true
	} else {
		return false
	}
}
