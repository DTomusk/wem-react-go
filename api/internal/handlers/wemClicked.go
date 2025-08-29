package handlers

import (
	"fmt"
	"net/http"

	_ "github.com/lib/pq"
)

func WemClickedHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Connected to PostgreSQL!")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("WEM button clicked"))
	fmt.Println("WEM button clicked")
}
