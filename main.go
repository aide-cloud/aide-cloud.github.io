package main

import (
	"github.com/graph-gophers/graphql-go"
	"log"
	"net/http"

	"github.com/graph-gophers/graphql-go/relay"
)

type Resolver struct{}

func (r *Resolver) Hello() string {
	return "Hello world!"
}

func main() {
	schema := graphql.MustParseSchema(Schema, &Resolver{})
	http.Handle("/query", &relay.Handler{Schema: schema})
	log.Fatal(http.ListenAndServe(":8080", nil))
}

const Schema = `
    type Query {
        hello: String!
    }
`
