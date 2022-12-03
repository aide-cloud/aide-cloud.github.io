import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as k,b as n,d as s,a as c,w as a,e as d,r as u}from"./app.f20f9439.js";const m={},b={id:"_2-golang-org-x-sync-errgroup",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_2-golang-org-x-sync-errgroup","aria-hidden":"true"},"#",-1),g={href:"http://golang.org/x/sync/errgroup",target:"_blank",rel:"noopener noreferrer"},f=d('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>errgroup</code> 包提供了一个 <code>sync.WaitGroup</code> 的替代品，它可以同时等待多个 <code>goroutine</code> 的结束，并且可以在任意一个 <code>goroutine</code> 出错时立即返回错误。</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2>',3),w=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"golang.org/x/sync/errgroup"'),s(`
	`),n("span",{class:"token string"},'"net/http"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" g errgroup"),n("span",{class:"token punctuation"},"."),s(`Group
	urls `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'"https://www.baidu.com"'),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token string"},'"https://www.google.com"'),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token string"},'"https://www.github.com"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" url "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" urls "),n("span",{class:"token punctuation"},"{"),s(`
		url `),n("span",{class:"token operator"},":="),s(` url
		g`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Go"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"error"),s(),n("span",{class:"token punctuation"},"{"),s(`
			resp`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" http"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Get"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"return"),s(` err
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token keyword"},"defer"),s(" resp"),n("span",{class:"token punctuation"},"."),s("Body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},","),s(" resp"),n("span",{class:"token punctuation"},"."),s("Status"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},":="),s(" g"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Wait"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"net/http"'),s(`

	`),n("span",{class:"token string"},'"golang.org/x/sync/errgroup"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" g errgroup"),n("span",{class:"token punctuation"},"."),s(`Group
	urls `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'"https://www.baidu.com"'),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token string"},'"https://www.google.com"'),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token string"},'"https://www.github.com"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 控制并发数"),s(`
	g`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetLimit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" url "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" urls "),n("span",{class:"token punctuation"},"{"),s(`
		url `),n("span",{class:"token operator"},":="),s(` url
		g`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Go"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"error"),s(),n("span",{class:"token punctuation"},"{"),s(`
			resp`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" http"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Get"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"return"),s(` err
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token keyword"},"defer"),s(" resp"),n("span",{class:"token punctuation"},"."),s("Body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},","),s(" resp"),n("span",{class:"token punctuation"},"."),s("Status"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},":="),s(" g"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Wait"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"context"'),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"net/http"'),s(`
	`),n("span",{class:"token string"},'"time"'),s(`

	`),n("span",{class:"token string"},'"golang.org/x/sync/errgroup"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

	urls `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'"https://www.baidu.com"'),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token string"},'"https://www.google.com"'),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token string"},'"https://www.github.com"'),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 控制超时"),s(`
	ctx`),n("span",{class:"token punctuation"},","),s(" cancel "),n("span",{class:"token operator"},":="),s(" context"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WithTimeout"),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Background"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token operator"},"*"),s("time"),n("span",{class:"token punctuation"},"."),s("Second"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(),n("span",{class:"token function"},"cancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	g`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" errgroup"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WithContext"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" url "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" urls "),n("span",{class:"token punctuation"},"{"),s(`
		url `),n("span",{class:"token operator"},":="),s(` url
		g`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Go"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"error"),s(),n("span",{class:"token punctuation"},"{"),s(`
			req`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" http"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewRequestWithContext"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},","),s(" http"),n("span",{class:"token punctuation"},"."),s("MethodGet"),n("span",{class:"token punctuation"},","),s(" url"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"return"),s(` err
			`),n("span",{class:"token punctuation"},"}"),s(`
			resp`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" http"),n("span",{class:"token punctuation"},"."),s("DefaultClient"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Do"),n("span",{class:"token punctuation"},"("),s("req"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"return"),s(` err
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token keyword"},"defer"),s(" resp"),n("span",{class:"token punctuation"},"."),s("Body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},","),s(" resp"),n("span",{class:"token punctuation"},"."),s("Status"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},":="),s(" g"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Wait"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("ul",null,[n("li",null,"TryGo 会尝试执行 f，如果 f 返回了一个非 nil 的 error，那么 TryGo 会将这个 error 保存起来，但是不会立即返回，而是继续执行后续的 f，直到所有的 f 都执行完毕，最后 TryGo 会返回所有的 error。")],-1),x=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"net/http"'),s(`

    `),n("span",{class:"token string"},'"golang.org/x/sync/errgroup"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" g errgroup"),n("span",{class:"token punctuation"},"."),s(`Group
    urls `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token string"},'"https://www.baidu.com"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"https://www.google.com"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"https://www.github.com"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" url "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" urls "),n("span",{class:"token punctuation"},"{"),s(`
        url `),n("span",{class:"token operator"},":="),s(` url
        g`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"TryGo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"error"),s(),n("span",{class:"token punctuation"},"{"),s(`
            resp`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" http"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Get"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(` err
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"defer"),s(" resp"),n("span",{class:"token punctuation"},"."),s("Body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},","),s(" resp"),n("span",{class:"token punctuation"},"."),s("Status"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"nil"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},":="),s(" g"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Wait"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),s(" 参考")],-1),T={href:"https://pkg.go.dev/golang.org/x/sync/errgroup#Group",target:"_blank",rel:"noopener noreferrer"};function C(P,B){const l=u("ExternalLinkIcon"),i=u("Tabs");return r(),k("div",null,[n("h1",b,[v,s(" 2. "),n("a",g,[s("golang.org/x/sync/errgroup"),c(l)])]),f,c(i,{id:"12",data:[{title:"基本用法",value:"基本用法"},{title:"控制并发数",value:"控制并发数"},{title:"控制超时",value:"控制超时"},{title:"TryGo",value:"TryGo"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:o})=>[w]),tab1:a(({title:t,value:e,isActive:o})=>[h]),tab2:a(({title:t,value:e,isActive:o})=>[y]),tab3:a(({title:t,value:e,isActive:o})=>[_,x]),_:1}),G,n("p",null,[n("a",T,[s("源码文档"),c(l)])])])}const N=p(m,[["render",C],["__file","2.html.vue"]]);export{N as default};
