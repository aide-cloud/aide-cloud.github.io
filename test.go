package main

import (
	"fmt"
	"golang.org/x/sync/errgroup"
	"net/http"
)

func main() {
	var g errgroup.Group
	urls := []string{
		"https://www.baidu.com",
		"https://www.google.com",
		"https://www.github.com",
	}
	for _, url := range urls {
		url := url
		g.Go(func() error {
			resp, err := http.Get(url)
			if err != nil {
				return err
			}
			defer resp.Body.Close()
			fmt.Println(url, resp.Status)
			return nil
		})
	}
	if err := g.Wait(); err != nil {
		fmt.Println(err)
	}
}
