package main

import "fmt"

type Person struct {
	name string
	age  int
}

type Student struct {
	Person
	school string
}

func main() {
	s := Student{
		Person: Person{
			name: "张三",
			age:  18,
		},
		school: "清华大学",
	}

	p := Person{
		name: "李四",
		age:  20,
	}

	p.sayHello()

	s.sayHello()
}

func (p Person) sayHello() {
	fmt.Printf("Hello, my name is %s, I'm %d years old.\n", p.name, p.age)
}

func (s Student) sayHello() {
	fmt.Printf("Hello, my name is %s, I'm %d years old. I'm a student of %s.\n", s.name, s.age, s.school)
}
