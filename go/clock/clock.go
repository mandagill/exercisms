package clock

import (
	"time"; 
	"fmt"
)

const testVersion = 4

type ValueFmt struct {
	hour, minute int
}

// shoot I forget how to assign struct values, check
// gobyexample
// const formatting = ValueFmt

// type Clock struct {
// 	hour int
// 	minute int
// }


func New(hour, minute int) Clock {
	// make the timestamp we can do the math operations on
	t := new(time.Time)

	t = t.Round(time.Minute, time.Hour)
	return fmt.Sprintf(t)

		// time.Nanosecond,
		// time.Microsecond,
		// time.Millisecond,
		// time.Second,
		// 2 * time.Second,
		// time.Minute,
		// 10 * time.Minute,
		// time.Hour
}

func (Clock) String() string {
}

func (Clock) Add(minutes int) Clock {
	// The Add method adds a Time and a Duration, producing a Time. 

}

// monotonic clock reading has been stripped by setting t = t.Round(0)