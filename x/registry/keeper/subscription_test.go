package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/sainoe/registry/testutil/keeper"
	"github.com/sainoe/registry/testutil/nullify"
	"github.com/sainoe/registry/x/registry/keeper"
	"github.com/sainoe/registry/x/registry/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNSubscription(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Subscription {
	items := make([]types.Subscription, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetSubscription(ctx, items[i])
	}
	return items
}

func TestSubscriptionGet(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNSubscription(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSubscription(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestSubscriptionRemove(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNSubscription(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSubscription(ctx,
			item.Index,
		)
		_, found := keeper.GetSubscription(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestSubscriptionGetAll(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNSubscription(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSubscription(ctx)),
	)
}
