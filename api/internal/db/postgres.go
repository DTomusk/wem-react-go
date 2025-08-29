package db

import (
	"database/sql"

	_ "github.com/lib/pq"
)

// Database stores pointer to a database connection
type Database struct {
	Conn *sql.DB
}

func NewDatabase() (*Database, error) {
	connStr := "host=localhost port=5432 user=postgres password=mypassword dbname=postgres sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}

	// db.Ping returns error, so nil is success
	if err := db.Ping(); err != nil {
		return nil, err
	}

	// return pointer to database connection and nil error
	return &Database{Conn: db}, nil
}
