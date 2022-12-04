import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as k,b as n,d as s,a as c,w as a,r as l}from"./app.fb4e36e5.js";const m={},d=n("h1",{id:"_5-cobra包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-cobra包","aria-hidden":"true"},"#"),s(" 5. cobra包")],-1),b=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),v={href:"https://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[n("code",null,"cobra"),s(" 包提供了一个命令行的解析和执行的库，它可以通过 "),n("code",null,"cobra"),s(" 的 "),n("code",null,"AddCommand"),s(" 方法来添加子命令。")],-1),h=n("h2",{id:"用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#用法","aria-hidden":"true"},"#"),s(" 用法")],-1),f=n("ul",null,[n("li",null,"main.go")],-1),_=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`

	`),n("span",{class:"token string"},'"github.com/spf13/cobra"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"var"),s(" rootCmd "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},"{"),s(`
	Use`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"root"'),n("span",{class:"token punctuation"},","),s(`
	Run`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("cmd "),n("span",{class:"token operator"},"*"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},","),s(" args "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"this is root"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"var"),s(" subCmd "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},"{"),s(`
	Use`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"sub"'),n("span",{class:"token punctuation"},","),s(`
	Run`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("cmd "),n("span",{class:"token operator"},"*"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},","),s(" args "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"this is sub"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	rootCmd`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddCommand"),n("span",{class:"token punctuation"},"("),s("subCmd"),n("span",{class:"token punctuation"},")"),s(`
	rootCmd`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Execute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("ul",null,[n("li",null,"执行")],-1),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`$ go run main.go
this is root
$ go run main.go sub
this is sub
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("ul",null,[n("li",null,"main.go")],-1),x=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`

    `),n("span",{class:"token string"},'"github.com/spf13/cobra"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"var"),s(" rootCmd "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},"{"),s(`
    Use`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"root"'),n("span",{class:"token punctuation"},","),s(`
    Run`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("cmd "),n("span",{class:"token operator"},"*"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},","),s(" args "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"this is root"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"var"),s(" subCmd "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},"{"),s(`
    Use`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"sub"'),n("span",{class:"token punctuation"},","),s(`
    Run`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("cmd "),n("span",{class:"token operator"},"*"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},","),s(" args "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"this is sub"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    rootCmd`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddCommand"),n("span",{class:"token punctuation"},"("),s("subCmd"),n("span",{class:"token punctuation"},")"),s(`
    rootCmd`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"PersistentFlags"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"StringP"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),s(`
    rootCmd`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Execute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	name `),n("span",{class:"token operator"},":="),s(" rootCmd"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Flag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" name "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name:"'),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("ul",null,[n("li",null,"执行")],-1),$=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`$ go run main.go
this is root
$ go run main.go sub
this is sub `),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
$ go run main.go sub `),n("span",{class:"token parameter variable"},"-n"),s(` biao
this is sub
name: biao
$ go run main.go sub `),n("span",{class:"token parameter variable"},"--name"),s(` biao
this is sub
name: biao
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("ul",null,[n("li",null,"main.go")],-1),S=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`

	`),n("span",{class:"token string"},'"github.com/spf13/cobra"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"var"),s(" rootCmd "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},"{"),s(`
	Use`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"root"'),n("span",{class:"token punctuation"},","),s(`
	Run`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("cmd "),n("span",{class:"token operator"},"*"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},","),s(" args "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"this is root"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"var"),s(" subCmd "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},"{"),s(`
	Use`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"sub"'),n("span",{class:"token punctuation"},","),s(`
	Run`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("cmd "),n("span",{class:"token operator"},"*"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},","),s(" args "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"this is sub"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	rootCmd`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddCommand"),n("span",{class:"token punctuation"},"("),s("subCmd"),n("span",{class:"token punctuation"},")"),s(`
	rootCmd`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"PersistentFlags"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"StringP"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),s(`
	subCmd`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Flags"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"StringP"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"age"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"a"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"age"'),n("span",{class:"token punctuation"},")"),s(`
	rootCmd`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Flags"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"StringP"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"path"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"p"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"path"'),n("span",{class:"token punctuation"},")"),s(`
	rootCmd`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Execute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	name `),n("span",{class:"token operator"},":="),s(" rootCmd"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Flag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" name "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name:"'),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	path `),n("span",{class:"token operator"},":="),s(" rootCmd"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Flag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"path"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" path "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"path:"'),n("span",{class:"token punctuation"},","),s(" path"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	age `),n("span",{class:"token operator"},":="),s(" subCmd"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Flag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"age"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" age "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"age:"'),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("ul",null,[n("li",null,"执行")],-1),V=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`$ go run main.go
this is root
$ go run main.go sub
this is sub
$ go run main.go sub `),n("span",{class:"token parameter variable"},"-n"),s(` biao
this is sub
name: biao
$ go run main.go sub `),n("span",{class:"token parameter variable"},"--name"),s(` biao
this is sub
name: biao
$ go run main.go sub `),n("span",{class:"token parameter variable"},"-n"),s(" biao "),n("span",{class:"token parameter variable"},"-a"),s(),n("span",{class:"token number"},"18"),s(`
this is sub
name: biao
age: `),n("span",{class:"token number"},"18"),s(`
$ go run main.go sub `),n("span",{class:"token parameter variable"},"-n"),s(" biao "),n("span",{class:"token parameter variable"},"--age"),s(),n("span",{class:"token number"},"18"),s(`
this is sub
name: biao
age: `),n("span",{class:"token number"},"18"),s(`
$ go run main.go `),n("span",{class:"token parameter variable"},"-n"),s(" biao "),n("span",{class:"token parameter variable"},"-p"),s(` /home
this is root
name: biao
path: /home
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function E(R,U){const i=l("ExternalLinkIcon"),u=l("Tabs");return r(),k("div",null,[d,b,n("p",null,[n("a",v,[s("cobra"),c(i)])]),g,h,c(u,{id:"15",data:[{title:"添加子命令",value:"添加子命令"},{title:"添加参数",value:"添加参数"},{title:"添加子命令参数",value:"添加子命令参数"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:o})=>[f,_,C,w]),tab1:a(({title:t,value:e,isActive:o})=>[y,x,P,$]),tab2:a(({title:t,value:e,isActive:o})=>[F,S,A,V]),_:1})])}const T=p(m,[["render",E],["__file","5.html.vue"]]);export{T as default};
