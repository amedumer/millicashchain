package main

import (
	"os"

	"github.com/cosmos/cosmos-sdk/server"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/millicent/cash/cmd/millicashd/cmd"

	"github.com/millicent/cash/app"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()

	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome("cash")); err != nil {
		// FIXME: will fail on wrapped errors, fix and upstream change to SDK
		switch e := err.(type) { // nolint
		case server.ErrorCode:
			os.Exit(e.Code)

		default:
			os.Exit(1)
		}
	}

}
