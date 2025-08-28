# wem-react-go
wem built with React and Go

# Running web
Run `npm run dev` from the web directory 

# Running api 
Run `go run cmd\server\main.go` from the api directory

# Creating migrations
Run `migrate create -ext sql -dir migrations -seq <migration_name>` in api 

# Running migrations
Run `migrate -path migrations -database "postgresql://postgres:mypassword@localhost:5432/postgres?sslmode=disable" up` to run up migrations. Replace `up` with `down` for tearing down the database. 

Replace connection string where necessary
