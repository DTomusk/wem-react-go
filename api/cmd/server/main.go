package main

import (
	"log"
	"net/http"

	"github.com/DTomusk/wem-react-go/internal/handlers"
)

func main() {
	http.HandleFunc("/", handlers.HomeHandler)
	http.HandleFunc("/wem-clicked", handlers.WemClickedHandler)

	log.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
