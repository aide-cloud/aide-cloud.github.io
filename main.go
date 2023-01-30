package main

import "fmt"

func reverseString(s *string) {
	str := []rune(*s)
	n := len(str)
	for i := 0; i < n/2; i++ {
		str[i], str[n-i-1] = str[n-i-1], str[i]
	}
	*s = string(str)
}

func main() {
	str := "123456"
	fmt.Println(str)
	reverseString(&str)
	fmt.Println(str)
	s1 := str[:3]
	s2 := str[3:]
	reverseString(&s1)
	reverseString(&s2)
	str = s1 + s2
	reverseString(&str)
	fmt.Println(str)
}
