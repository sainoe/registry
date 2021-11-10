package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/sainoe/registry/x/registry/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SubscriptionAll(c context.Context, req *types.QueryAllSubscriptionRequest) (*types.QueryAllSubscriptionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var subscriptions []types.Subscription
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	subscriptionStore := prefix.NewStore(store, types.KeyPrefix(types.SubscriptionKeyPrefix))

	pageRes, err := query.Paginate(subscriptionStore, req.Pagination, func(key []byte, value []byte) error {
		var subscription types.Subscription
		if err := k.cdc.Unmarshal(value, &subscription); err != nil {
			return err
		}

		subscriptions = append(subscriptions, subscription)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSubscriptionResponse{Subscription: subscriptions, Pagination: pageRes}, nil
}

func (k Keeper) Subscription(c context.Context, req *types.QueryGetSubscriptionRequest) (*types.QueryGetSubscriptionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSubscription(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetSubscriptionResponse{Subscription: val}, nil
}
