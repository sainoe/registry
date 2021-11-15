package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sainoe/registry/x/registry/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SubscriptionAll(c context.Context, req *types.QueryAllSubscriptionRequest) (*types.QueryAllSubscriptionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)
	return &types.QueryAllSubscriptionResponse{
		Subscription: k.GetSubscriptionsByValidator(ctx, ""), Pagination: nil}, nil
}

func (k Keeper) Subscription(c context.Context, req *types.QueryGetSubscriptionRequest) (*types.QueryGetSubscriptionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	out := types.Subscription{}

	// Get the store from context
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, types.ValidatorConsumerIndexKey(req.Index, ""))
	defer iterator.Close()
	// out.Index = out.Index + string(types.ValidatorConsumerIndexKey("", "")) + ":"
	idx := 0
	for ; iterator.Valid(); iterator.Next() {
		out.Index += "{idx:" + strconv.Itoa(idx) + ", key:" + string(iterator.Key()) +
			", value:" + string(iterator.Value()) + "},"
		idx++
	}

	// val, found := k.GetSubscription(
	// 	ctx,
	// 	req.Index,
	// )
	// if !found {
	// 	return nil, status.Error(codes.InvalidArgument, "not found")
	// }

	return &types.QueryGetSubscriptionResponse{Subscription: out}, nil
}

func (k Keeper) SubscriptionByValidator(c context.Context, req *types.QueryGetSubscriptionByValidatorRequest) (*types.QueryGetSubscriptionByValidatorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	subscriptions := k.GetSubscriptionsByValidator(ctx, req.Index)

	return &types.QueryGetSubscriptionByValidatorResponse{
		Subscription: subscriptions,
	}, nil
}
