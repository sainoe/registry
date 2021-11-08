package keeper

import (
	"github.com/sainoe/registry/x/registry/types"
)

var _ types.QueryServer = Keeper{}
