package main

import (
	"fmt"
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"log"
	"mime/multipart"
	"net/http"
	"strings"
	"time"
)

type Login struct {
	User     string                  `form:"user" json:"user" xml:"user"`
	Password string                  `form:"password" json:"password" xml:"password"`
	Files    []*multipart.FileHeader `form:"files" json:"files" xml:"files"`
}

func main() {
	router := gin.Default()
	router.Use(gin.Logger(), gin.Recovery(), gin.ErrorLogger(), gin.ErrorLoggerT(gin.ErrorTypeAny))
	router.POST("/upload", func(c *gin.Context) {
		// Multipart form
		var form Login
		if err := c.ShouldBind(&form); err != nil {
			c.String(http.StatusBadRequest, fmt.Sprintf("err: %s", err.Error()))
			return
		}

		for _, file := range form.Files {
			log.Println(file.Filename)

			dst := fmt.Sprintf("/tmp/%s", file.Filename)
			// Upload the file to specific dst.
			c.SaveUploadedFile(file, dst)
		}
		c.String(http.StatusOK, fmt.Sprintf("%d files uploaded!", len(form.Files)))
	})
	router.Run(":8080")
}

// Config defines the config for JWT middleware.
type Config struct {
	// SigningKey defines the JWT signing key.
	SigningKey interface{}

	// SigningMethod defines the JWT signing method.
	// Optional. Default value jwt.SigningMethodHS256.
	SigningMethod jwt.SigningMethod

	// ContextKey defines the key used to store user information from the JWT claims.
	// Optional. Default value "user".
	ContextKey string

	// Claims defines the custom claims type used to decode the JWT.
	// Optional. Default value jwt.MapClaims.
	Claims jwt.Claims

	// ErrorHandler defines a function to handle errors occurred during the middleware process.
	// Optional. Default value nil.
	ErrorHandler func(*gin.Context, error)

	// Unauthorized defines a function to handle unauthorized attempts.
	// Optional. Default value nil.
	Unauthorized func(*gin.Context, int, string)

	// TokenLookup is a string in the form of "<source>:<name>" that is used
	// to extract token from the request.
	// Optional. Default value "header:Authorization
	TokenLookup string

	// TokenHeadName is a string in the header. Default value is "Bearer"
	TokenHeadName string

	// AuthScheme is a string in the header. Default value is "Bearer"
	AuthScheme string

	// TimeFunc provides the current time. You can override it to use another time value. This is useful for testing or if your server uses a time zone other than UTC.
	// Optional. Default value time.Now
	TimeFunc func() time.Time
}

// DefaultConfig returns a JWT middleware config with default values.
func DefaultConfig() Config {
	return Config{
		SigningMethod: jwt.SigningMethodHS256,
		ContextKey:    "user",
		Claims:        jwt.MapClaims{},
		TokenLookup:   "header:Authorization",
		TokenHeadName: "Bearer",
		AuthScheme:    "Bearer",
		TimeFunc:      time.Now,
	}
}

// New returns a JWT middleware.
func New(config Config) gin.HandlerFunc {
	defaultConfig := DefaultConfig()

	if config.SigningKey == nil {
		panic("jwt: signing key is required")
	}

	if config.SigningMethod == nil {
		config.SigningMethod = defaultConfig.SigningMethod
	}

	if config.ContextKey == "" {
		config.ContextKey = defaultConfig.ContextKey
	}

	if config.Claims == nil {
		config.Claims = defaultConfig.Claims
	}

	if config.TokenLookup == "" {
		config.TokenLookup = defaultConfig.TokenLookup
	}

	if config.TokenHeadName == "" {
		config.TokenHeadName = defaultConfig.TokenHeadName
	}

	if config.AuthScheme == "" {
		config.AuthScheme = defaultConfig.AuthScheme
	}

	if config.TimeFunc == nil {
		config.TimeFunc = defaultConfig.TimeFunc
	}

	parts := strings.Split(config.TokenLookup, ":")

	return func(c *gin.Context) {
		var token string

		switch parts[0] {
		case "header":
			token = c.GetHeader(parts[1])
		case "query":
			token = c.Query(parts[1])
		case "cookie":
			token, _ = c.Cookie(parts[1])
		}

		if token == "" {
			if config.Unauthorized != nil {
				config.Unauthorized(c, http.StatusUnauthorized, "")
			} else {
				c.AbortWithStatus(http.StatusUnauthorized)
			}
			return
		}

		if len(parts) == 3 {
			token = parts[2] + " " + token
		}

		authScheme := config.AuthScheme + " "
		if len(authScheme) > 0 && len(token) > len(authScheme) && token[:len(authScheme)] == authScheme {
			token = token[len(authScheme):]
		}

		claims := config.Claims
		if claims == nil {
			claims = jwt.MapClaims{}
		}

		tokenClaims, err := jwt.ParseWithClaims(token, claims, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, jwt.ErrSignatureInvalid
			}
			return config.SigningKey, nil
		})

		if err != nil {
			if config.ErrorHandler != nil {
				config.ErrorHandler(c, err)
			} else {
				c.AbortWithError(http.StatusUnauthorized, err).SetType(gin.ErrorTypePublic)
			}
			return
		}

		if !tokenClaims.Valid {
			if config.Unauthorized != nil {
				config.Unauthorized(c, http.StatusUnauthorized, "")
			} else {
				c.AbortWithStatus(http.StatusUnauthorized)
			}
			return
		}

		c.Set(config.ContextKey, tokenClaims)
		c.Next()
	}
}
