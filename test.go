package main

import "fmt"

func main() {
	ch1 := make(chan int)
	ch2 := make(chan int)
	for {
		select {
		case <-ch1:
			fmt.Println("A")
		case ch2 <- 1:
			fmt.Println("B")
		default:
			fmt.Println("C")
		}
	}
}
