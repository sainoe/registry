package registry

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sainoe/registry/x/registry/keeper"
	"github.com/sainoe/registry/x/registry/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the consumer
	for _, elem := range genState.ConsumerList {
		k.SetConsumer(ctx, elem)
	}
	// Set all the subscription
	for _, elem := range genState.SubscriptionList {
		k.SetSubscription(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.ConsumerList = k.GetAllConsumer(ctx)
	genesis.SubscriptionList = k.GetAllSubscription(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
