package main

import (
	"fmt"
)

type MyError string

func (e MyError) Error() string {
	return string(e)
}

const (
	ErrNotFound = MyError("not found")
)

func main() {
	fmt.Println(ErrNotFound)
}
