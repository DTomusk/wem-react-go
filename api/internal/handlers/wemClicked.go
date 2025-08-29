package handlers

import (
	"fmt"
	"net/http"

	"github.com/DTomusk/wem-react-go/internal/db"
	_ "github.com/lib/pq"
)

func WemClickedHandler(w http.ResponseWriter, r *http.Request) {
	// TODO: replace with environment variable
	db, err := db.NewConnection()
	if err != nil {
		panic(err)
	}
	defer db.Conn.Close()

	err = db.Conn.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Println("Connected to PostgreSQL!")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("WEM button clicked"))
	fmt.Println("WEM button clicked")
}
