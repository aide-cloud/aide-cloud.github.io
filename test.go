package main

import (
	"fmt"
	"time"
)

func main() {
	var ch chan int
	ch = make(chan int, 10)
	for i := 0; i < 10; i++ {
		ch <- i
	}
	time.Sleep(time.Second)
	fmt.Println(<-ch)
	fmt.Println(<-ch)
	close(ch)
	fmt.Println(<-ch)
	fmt.Println(<-ch)
	ch <- 1
	fmt.Println(<-ch)
}
