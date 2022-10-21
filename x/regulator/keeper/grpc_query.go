package keeper

import (
	"github.com/millicent/millicash/x/regulator/types"
)

var _ types.QueryServer = Keeper{}
