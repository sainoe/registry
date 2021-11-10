package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sainoe/registry/x/registry/types"
)

// SetSubscription set a specific subscription in the store from its index
func (k Keeper) SetSubscription(ctx sdk.Context, subscription types.Subscription) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SubscriptionKeyPrefix))
	b := k.cdc.MustMarshal(&subscription)
	store.Set(types.SubscriptionKey(
		subscription.Index,
	), b)
}

// GetSubscription returns a subscription from its index
func (k Keeper) GetSubscription(
	ctx sdk.Context,
	index string,

) (val types.Subscription, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SubscriptionKeyPrefix))

	b := store.Get(types.SubscriptionKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSubscription removes a subscription from the store
func (k Keeper) RemoveSubscription(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SubscriptionKeyPrefix))
	store.Delete(types.SubscriptionKey(
		index,
	))
}

// GetAllSubscription returns all subscription
func (k Keeper) GetAllSubscription(ctx sdk.Context) (list []types.Subscription) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SubscriptionKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Subscription
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
