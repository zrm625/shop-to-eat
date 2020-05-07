package config

import "os"

var (
	APIPort = os.Getenv("PORT")
)
