FROM golang:1.18-alpine as build

WORKDIR /usr/src/app

COPY go.mod go.sum ./
RUN go mod download && go mod verify

FROM golang:1.18-alpine

COPY --from=build . .
RUN go build -v -o /usr/local/bin/app ./...

CMD ["app"]