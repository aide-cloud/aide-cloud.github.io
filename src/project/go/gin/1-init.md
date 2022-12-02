---
icon: edit
date: 2022-01-01
category:
  - gin
  - go
tag:
  - new
  - http
  - restful
---

# 初始化gin工程

## 工程文件
```go
package main
 
import "github.com/gin-gonic/gin"
 
func main() {
	// 1.创建路由
	r := gin.Default()
	// 2.绑定路由规则，执行的函数
	// gin.Context，封装了request和response
	r.GET("/", func(c *gin.Context) {
		c.String(200, "hello World!")
	})
	// 3.监听端口，默认在8080
	// Run("里面不指定端口号默认为8080")
	r.Run(":8000")
}
```

## 本地运行
```bash
go run main.go
```

## 浏览器访问
```bash
http://localhost:8000
```