package main

import (
	"os"

	"github.com/cosmos/cosmos-sdk/server"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/millicent/millicash/cmd/millicashd/cmd"

	"github.com/millicent/millicash/app"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()

	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome("millicash")); err != nil {
		// FIXME: will fail on wrapped errors, fix and upstream change to SDK
		switch e := err.(type) { // nolint
		case server.ErrorCode:
			os.Exit(e.Code)

		default:
			os.Exit(1)
		}
	}

}
