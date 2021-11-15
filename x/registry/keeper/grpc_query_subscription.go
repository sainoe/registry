package keeper

import (
	"context"

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
	b := store.Get(types.ValidatorConsumerIndexKey(req.Index, req.ConsumerID))
	if b == nil {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetSubscriptionResponse{Subscription: out}, nil
}

func (k Keeper) SubscriptionByValidator(c context.Context, req *types.QueryGetSubscriptionByValidatorRequest) (*types.QueryGetSubscriptionByValidatorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	subscriptions := k.GetSubscriptionsByValidator(ctx, req.Index)

	consumers := []*types.Consumer{}
	for _, sub := range subscriptions {
		consumer, _ := k.GetConsumer(ctx, sub.ConsumerID)
		consumers = append(consumers, &consumer)
	}

	return &types.QueryGetSubscriptionByValidatorResponse{
		Validator: req.Index,
		Consumers: consumers,
	}, nil
}
