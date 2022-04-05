FROM golang:1.18-alpine AS build

WORKDIR /usr/src/app

COPY . .
RUN go build main.go

FROM scratch

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app

CMD ["./main"]