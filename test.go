package main

import (
	"os"
)

func main() {
	err := os.Remove("test.txt")
	if err != nil {
		panic(err)
	}
}
