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

func createNConsumer(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Consumer {
	items := make([]types.Consumer, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetConsumer(ctx, items[i])
	}
	return items
}

func TestConsumerGet(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNConsumer(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetConsumer(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestConsumerRemove(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNConsumer(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveConsumer(ctx,
			item.Index,
		)
		_, found := keeper.GetConsumer(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestConsumerGetAll(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNConsumer(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllConsumer(ctx)),
	)
}
