package did_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	abcitypes "github.com/tendermint/tendermint/abci/types"

	"github.com/millicent/millicash/app"

	"github.com/tendermint/tendermint/libs/log"

	"github.com/cosmos/cosmos-sdk/simapp"

	dbm "github.com/tendermint/tm-db"
)

func TestCreateModuleInApp(t *testing.T) {
	app := app.New(
		"millicash",
		log.NewNopLogger(),
		dbm.NewMemDB(),
		nil,
		true,
		make(map[int64]bool),
		app.DefaultNodeHome("millicash"),
		0,
		app.MakeEncodingConfig(),
		simapp.EmptyAppOptions{},
	)

	app.InitChain(
		abcitypes.RequestInitChain{
			AppStateBytes: []byte("{}"),
			ChainId:       "test-chain-id",
		},
	)

	require.NotNil(t, app.DidDocumentKeeper)
}
