package keeper

import (
	"github.com/millicent/cash/x/regulator/types"
)

var _ types.QueryServer = Keeper{}
