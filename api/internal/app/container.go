package app

import (
	"database/sql"

	"github.com/DTomusk/wem-react-go/internal/db"
)

// Container wires up dependencies
type Container struct {
	DB *sql.DB
}

func NewContainer() (*Container, error) {
	database, err := db.NewDatabase()
	if err != nil {
		return nil, err
	}

	return &Container{
		DB: database.Conn,
	}, nil
}
