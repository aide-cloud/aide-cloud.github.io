FROM golang:1.18 AS builder

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main .

FROM alpine:latest

EXPOSE 8080

WORKDIR /app

COPY --from=builder /app/ ./

RUN chmod +x main

CMD ["./main"]