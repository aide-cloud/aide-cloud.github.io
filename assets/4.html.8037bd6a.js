import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as k,b as n,d as s,a as o,w as a,e as d,r as u}from"./app.f0561611.js";const m={},b=n("h1",{id:"_4-viper包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-viper包","aria-hidden":"true"},"#"),s(" 4. viper包")],-1),v=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),g={href:"https://github.com/spf13/viper",target:"_blank",rel:"noopener noreferrer"},f=d('<p><code>viper</code> 包提供了一个配置文件的读取和解析的库，它可以读取多种格式的配置文件，比如 <code>json</code>、<code>yaml</code>、<code>toml</code> 等，并且可以通过 <code>viper</code> 的 <code>Set</code> 方法来设置配置项。</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2>',2),h=n("ul",null,[n("li",null,"config.yml")],-1),y=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"123"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),_=n("ul",null,[n("li",null,"main.go")],-1),w=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`

	`),n("span",{class:"token string"},'"github.com/spf13/viper"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetConfigName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 设置配置文件名"),s(`
	viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddConfigPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"."'),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token comment"},"// 设置配置文件路径"),s(`
	viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetConfigType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"yaml"'),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// 设置文件类型"),s(`
	err `),n("span",{class:"token operator"},":="),s(" viper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadInConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// 读取配置文件"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("viper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 读取配置项"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`

    `),n("span",{class:"token string"},'"github.com/spf13/viper"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"123"'),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("viper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`

    `),n("span",{class:"token string"},'"github.com/spf13/viper"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetEnvPrefix"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 设置环境变量前缀"),s(`
    viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AutomaticEnv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("       "),n("span",{class:"token comment"},"// 自动读取环境变量"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("viper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("ul",null,[n("li",null,"main.go")],-1),S=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`

    `),n("span",{class:"token string"},'"github.com/spf13/viper"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"BindPFlag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},","),s(" rootCmd"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Flags"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lookup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    rootCmd`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Execute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("viper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"var"),s(" rootCmd "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},"{"),s(`
    Use`),n("span",{class:"token punctuation"},":"),s("   "),n("span",{class:"token string"},'"test"'),n("span",{class:"token punctuation"},","),s(`
    Short`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"test"'),n("span",{class:"token punctuation"},","),s(`
    Run`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("cmd "),n("span",{class:"token operator"},"*"),s("cobra"),n("span",{class:"token punctuation"},"."),s("Command"),n("span",{class:"token punctuation"},","),s(" args "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    rootCmd`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Flags"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"StringP"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("ul",null,[n("li",null,"调用示例")],-1),R=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("go run main.go "),n("span",{class:"token builtin class-name"},"test"),s(),n("span",{class:"token parameter variable"},"--name"),s(` biao
`),n("span",{class:"token comment"},"# 或者"),s(`
go run main.go `),n("span",{class:"token builtin class-name"},"test"),s(),n("span",{class:"token parameter variable"},"--n"),s(` biao
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"项目中使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#项目中使用","aria-hidden":"true"},"#"),s(" 项目中使用")],-1),N=n("ul",null,[n("li",null,"config.yaml")],-1),D=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"server"),n("span",{class:"token punctuation"},":"),s(`
   `),n("span",{class:"token key atrule"},"port"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"8080"),s(`
   `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` localhost

`),n("span",{class:"token key atrule"},"database"),n("span",{class:"token punctuation"},":"),s(`
   `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` localhost
   `),n("span",{class:"token key atrule"},"port"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"3306"),s(`
   `),n("span",{class:"token key atrule"},"user"),n("span",{class:"token punctuation"},":"),s(` root
   `),n("span",{class:"token key atrule"},"password"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"123456"),s(`
   
`),n("span",{class:"token key atrule"},"redis"),n("span",{class:"token punctuation"},":"),s(`
   `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` localhost
   `),n("span",{class:"token key atrule"},"port"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"6379"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("ul",null,[n("li",null,"main.go")],-1),T=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`

    `),n("span",{class:"token string"},'"github.com/spf13/viper"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"type"),s(" Config "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Server   ServerConfig
    Database DatabaseConfig
    Redis    RedisConfig
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" ServerConfig "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Port `),n("span",{class:"token builtin"},"string"),s(`
    Host `),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" DatabaseConfig "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Host     `),n("span",{class:"token builtin"},"string"),s(`
    Port     `),n("span",{class:"token builtin"},"string"),s(`
    User     `),n("span",{class:"token builtin"},"string"),s(`
    Password `),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" RedisConfig "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Host `),n("span",{class:"token builtin"},"string"),s(`
    Port `),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetConfigName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 设置配置文件名"),s(`
    viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddConfigPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"."'),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token comment"},"// 设置配置文件路径"),s(`
	`),n("span",{class:"token comment"},"// 设置文件类型，不设置默认为json，支持json、yaml、toml"),s(`
    viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetConfigType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"yaml"'),n("span",{class:"token punctuation"},")"),s(`   
    err `),n("span",{class:"token operator"},":="),s(" viper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadInConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// 读取配置文件"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"var"),s(` config Config
    err `),n("span",{class:"token operator"},"="),s(" viper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unmarshal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("config"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"time"'),s(`

    `),n("span",{class:"token string"},'"github.com/fsnotify/fsnotify"'),s(`
    `),n("span",{class:"token string"},'"github.com/spf13/viper"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"type"),s(" Config "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Server   ServerConfig
    Database DatabaseConfig
    Redis    RedisConfig
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" ServerConfig "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Port `),n("span",{class:"token builtin"},"string"),s(`
    Host `),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" DatabaseConfig "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Host     `),n("span",{class:"token builtin"},"string"),s(`
    Port     `),n("span",{class:"token builtin"},"string"),s(`
    User     `),n("span",{class:"token builtin"},"string"),s(`
    Password `),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" RedisConfig "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Host `),n("span",{class:"token builtin"},"string"),s(`
    Port `),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetConfigName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"config"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 设置配置文件名"),s(`
    viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"AddConfigPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"."'),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token comment"},"// 设置配置文件路径"),s(`
    viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetConfigType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"yaml"'),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// 设置文件类型"),s(`
    err `),n("span",{class:"token operator"},":="),s(" viper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadInConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// 读取配置文件"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"var"),s(` config Config
    err `),n("span",{class:"token operator"},"="),s(" viper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unmarshal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("config"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},")"),s(`
    viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WatchConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    viper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"OnConfigChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("e fsnotify"),n("span",{class:"token punctuation"},"."),s("Event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"配置文件修改了"'),n("span",{class:"token punctuation"},")"),s(`
        err `),n("span",{class:"token operator"},"="),s(" viper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unmarshal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),s("config"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"{"),s(`
        time`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sleep"),n("span",{class:"token punctuation"},"("),s("time"),n("span",{class:"token punctuation"},"."),s("Second"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),s(" 参考")],-1),B={href:"https://github.com/spf13/viper",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"},V=n("li",null,[n("a",{href:"github.com/fsnotify/fsnotify"},"fsnotify包")],-1);function j(F,L){const l=u("ExternalLinkIcon"),i=u("Tabs");return r(),k("div",null,[b,v,n("p",null,[n("a",g,[s("源码地址"),o(l)])]),f,o(i,{id:"15",data:[{title:"读取配置文件",value:"读取配置文件"},{title:"设置配置项",value:"设置配置项"},{title:"读取环境变量",value:"读取环境变量"},{title:"读取命令行参数",value:"读取命令行参数"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:c})=>[h,y,_,w]),tab1:a(({title:t,value:e,isActive:c})=>[C]),tab2:a(({title:t,value:e,isActive:c})=>[x]),tab3:a(({title:t,value:e,isActive:c})=>[P,S,A,R]),_:1}),E,o(i,{id:"62",data:[{title:"读取项目配置文件",value:"读取项目配置文件"},{title:"热加载配置文件",value:"热加载配置文件"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:c})=>[N,D,H,T]),tab1:a(({title:t,value:e,isActive:c})=>[U]),_:1}),I,n("ul",null,[n("li",null,[n("a",B,[s("viper包"),o(l)])]),n("li",null,[n("a",G,[s("cobra"),o(l)])]),V])])}const q=p(m,[["render",j],["__file","4.html.vue"]]);export{q as default};
