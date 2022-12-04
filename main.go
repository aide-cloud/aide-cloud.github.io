// main.go
package main

import (
	"fmt"
)

func main() {
	var map1 map[string]int
	map1 = make(map[string]int, 10)
	map1["张三"] = 90
	map1["李四"] = 100
	fmt.Println(map1) // map[张三:90 李四:100]

	// 方式二
	map2 := map[string]int{
		"张三": 90,
		"李四": 100,
	}
	fmt.Println(map2) // map[张三:90 李四:100]

	// 方式三
	map3 := make(map[string]int, 10)
	map3["张三"] = 90
	map3["李四"] = 100
	fmt.Println(map3) // map[张三:90 李四:100]
}
