package main

import "fmt"

type Person struct {
	name string
	age  int
}

type Human interface {
	// 唱
	sing()
	// 跳
	jump()
	// 打篮球
	playBasketball()
	// rap
	rap()
	// 自我介绍
	introduce()
}

func main() {
	p := Person{
		name: "张三",
		age:  18,
	}
	p.introduce()
	p.sing()
	p.jump()
	p.playBasketball()
	p.rap()
}

func (p Person) sayHello() {
	fmt.Println("Hello, I'm", p.name)
}

func (p Person) sing() {
	fmt.Println("I can sing")
}

func (p Person) jump() {
	fmt.Println("I can jump")
}

func (p Person) playBasketball() {
	fmt.Println("I can play basketball")
}

func (p Person) rap() {
	fmt.Println("I can rap")
}

func (p Person) introduce() {
	fmt.Println("I'm", p.name, "I'm", p.age, "years old")
}
