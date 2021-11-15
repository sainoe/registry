package keeper

import (
	"strings"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sainoe/registry/x/registry/types"
)

// SetSubscription set a specific subscription in the store from its index
func (k Keeper) SetSubscription(ctx sdk.Context, subscription types.Subscription) {
	// store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SubscriptionKeyPrefix))
	// b := k.cdc.MustMarshal(&subscription)
	k.SetValidatorConsumerIndex(ctx, subscription.Index, subscription.ConsumerID)
	// store.Set(types.SubscriptionKey(
	// subscription.Index,
	// ), b)
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

	// redo 2
}

// GetAllSubscription returns all subscription
func (k Keeper) GetAllSubscription(ctx sdk.Context) (list []types.Subscription) {
	list = k.GetSubscriptionsByValidator(ctx, "")
	return
}

// take the valAddress and ConsID
func (k Keeper) SetValidatorConsumerIndex(ctx sdk.Context, validatorAddress string, consumerID string) {
	store := ctx.KVStore(k.storeKey)
	indexKey := types.ValidatorConsumerIndexKey(validatorAddress, consumerID)
	// validator address and consumer ID length prefix
	store.Set(indexKey, []byte{})
}

func (k Keeper) GetSubscriptionsByValidator(ctx sdk.Context, valAddr string) []types.Subscription {
	out := []types.Subscription{}

	// Get the store from context
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, types.ValidatorConsumerIndexKey(valAddr, ""))
	defer iterator.Close()
	// out.Index = out.Index + string(types.ValidatorConsumerIndexKey("", "")) + ":"
	for ; iterator.Valid(); iterator.Next() {
		// extract validator and conasumer address from the subscription key
		subscriptionKey := string(iterator.Key())
		valConsumerKey := strings.SplitN(subscriptionKey, "/", 2)[1]
		valAddr, consumerID := valConsumerKey[0:45], valConsumerKey[45:]

		// create a new subscription struct
		subscription := types.Subscription{
			Index:      valAddr,
			ConsumerID: consumerID,
		}
		out = append(out, subscription)
	}

	return out
}
