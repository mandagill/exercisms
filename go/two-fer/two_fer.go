package twofer
/*Second exercism puzzle. Details here: 
http://exercism.io/exercises/go/two-fer/readme*/

import "fmt"

func ShareWith(name string) string {
	// Function for text to share something with someone

	if name == "" {
		return "One for you, one for me."
	} else {
		return fmt.Sprintf("One for %s, one for me.", name)
	}
}
