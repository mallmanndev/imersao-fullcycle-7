package main

import "fmt"

func getCompanyName() string {
	return "Code.education"
}

func main() {
	company := getCompanyName()
	var exclamation string

	if company == "Code.education" {
		exclamation = "Rocks!"
	}

	fmt.Println(company, exclamation)
}
