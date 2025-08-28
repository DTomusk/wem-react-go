// Declares a package, packages group functions, each file in a directory belongs to a package
package main

import (
	"fmt"
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Hello World"))
}

func wemClicked(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("WEM button clicked"))
	fmt.Println("WEM button clicked")
}

// main is the entry point for the program, it runs by default when you run go run main.go
func main() {
	http.HandleFunc("/", home)
	http.HandleFunc("/wem-clicked", wemClicked)

	log.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
