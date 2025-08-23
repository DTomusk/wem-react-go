// Declares a package, packages group functions, each file in a directory belongs to a package
package main

import (
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Hello World"))
}

// main is the entry point for the program, it runs by default when you run go run main.go
func main() {
	http.HandleFunc("/", home)

	log.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
