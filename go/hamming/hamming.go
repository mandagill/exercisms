/*Package hamming allows the caller to calculate
the hamming distance between two DNA strands.*/
package hamming

import "errors"

// Distance calculates the Hamming distance
// between two DNA strands
func Distance(a, b string) (int, error) {
	calculation := CalculateDistance(a, b)
	if calculation != nil {
		return 0, calculation
	}
	return errors.New("something went wrong")
}

//This encapsulates the string parsing so we can
// better handle errors.
func CalculateDistance(string a, string b) int {
	if a == "" || b == "" {
		return 0
	}
}
