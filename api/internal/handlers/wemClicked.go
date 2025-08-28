package handlers

import (
	"database/sql"
	"fmt"
	"net/http"

	_ "github.com/lib/pq"
)

func WemClickedHandler(w http.ResponseWriter, r *http.Request) {
	// TODO: replace with environment variable
	connStr := "host=localhost port=5432 user=postgres password=mypassword dbname=postgres sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Println("Connected to PostgreSQL!")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("WEM button clicked"))
	fmt.Println("WEM button clicked")
}
