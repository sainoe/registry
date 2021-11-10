package registry_test

import (
	"testing"

	keepertest "github.com/sainoe/registry/testutil/keeper"
	"github.com/sainoe/registry/testutil/nullify"
	"github.com/sainoe/registry/x/registry"
	"github.com/sainoe/registry/x/registry/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ConsumerList: []types.Consumer{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		SubscriptionList: []types.Subscription{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.RegistryKeeper(t)
	registry.InitGenesis(ctx, *k, genesisState)
	got := registry.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ConsumerList, got.ConsumerList)
	require.ElementsMatch(t, genesisState.SubscriptionList, got.SubscriptionList)
	// this line is used by starport scaffolding # genesis/test/assert
}
