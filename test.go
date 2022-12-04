package main

import (
	"fmt"
	"time"
)

func main() {
	t := time.Now()
	fmt.Println(t.Add(time.Hour * 24))  // 加一天
	fmt.Println(t.Add(time.Hour * -24)) // 减一天
}
