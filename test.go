package main

import "fmt"

type Person struct {
	name string
	age  int
}

func (p Person) String() string {
	return fmt.Sprintf("name: %s, age: %d", p.name, p.age)
}

type Stringer interface {
	String() string
}

func main() {
	var s Stringer
	s = Person{
		name: "张三",
		age:  18,
	}

	p, ok := s.(Person)
	if ok {
		fmt.Println(p) // {张三 18}
	}
}
