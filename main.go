// main.go
package main

import (
	"fmt"
	"sort"
)

func main() {
	slice1 := []int{1, 2, 3, 4, 5}

	index := sort.SearchInts(slice1, 3)
	fmt.Println(index)
}
