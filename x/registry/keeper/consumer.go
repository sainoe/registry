package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sainoe/registry/x/registry/types"
)

// SetConsumer set a specific consumer in the store from its index
func (k Keeper) SetConsumer(ctx sdk.Context, consumer types.Consumer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ConsumerKeyPrefix))
	b := k.cdc.MustMarshal(&consumer)
	store.Set(types.ConsumerKey(
		consumer.Index,
	), b)
}

// GetConsumer returns a consumer from its index
func (k Keeper) GetConsumer(
	ctx sdk.Context,
	index string,

) (val types.Consumer, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ConsumerKeyPrefix))

	b := store.Get(types.ConsumerKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveConsumer removes a consumer from the store
func (k Keeper) RemoveConsumer(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ConsumerKeyPrefix))
	store.Delete(types.ConsumerKey(
		index,
	))
}

// GetAllConsumer returns all consumer
func (k Keeper) GetAllConsumer(ctx sdk.Context) (list []types.Consumer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ConsumerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Consumer
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
