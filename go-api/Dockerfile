FROM golang:alpine as builder

COPY . /app-sources
RUN apk add git
RUN go get -u github.com/gorilla/mux
RUN go build -o /app-sources/build/main /app-sources/main.go


FROM alpine
COPY --from=builder /app-sources/build /app
EXPOSE 8080
ENTRYPOINT ["/app/main"]
