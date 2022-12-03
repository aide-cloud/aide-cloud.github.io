package main

import (
	"fmt"
	"time"

	"github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
)

type Config struct {
	Server   ServerConfig
	Database DatabaseConfig
	Redis    RedisConfig
}

type ServerConfig struct {
	Port string
	Host string
}

type DatabaseConfig struct {
	Host     string
	Port     string
	User     string
	Password string
}

type RedisConfig struct {
	Host string
	Port string
}

func main() {
	viper.SetConfigName("config") // 设置配置文件名
	viper.AddConfigPath(".")      // 设置配置文件路径
	viper.SetConfigType("json")   // 设置文件类型
	err := viper.ReadInConfig()   // 读取配置文件
	if err != nil {
		panic(err)
	}
	var config Config
	err = viper.Unmarshal(&config)
	if err != nil {
		panic(err)
	}
	fmt.Println(config)
	viper.WatchConfig()
	viper.OnConfigChange(func(e fsnotify.Event) {
		fmt.Println("配置文件修改了")
		err = viper.Unmarshal(&config)
		if err != nil {
			panic(err)
		}
		fmt.Println(config)
	})
	for {
		time.Sleep(time.Second)
	}
}
