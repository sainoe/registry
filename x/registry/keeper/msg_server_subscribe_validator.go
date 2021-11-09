package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sainoe/registry/x/registry/types"
)

func (k msgServer) SubscribeValidator(goCtx context.Context, msg *types.MsgSubscribeValidator) (*types.MsgSubscribeValidatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the consumer chain exists in the registry store
	consumer, isFound := k.GetConsumer(ctx, msg.ChainID)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Consumer chain doesn't exist")
	}

	// Append the validator address to the consumer entry validator list
	consumer.Validators = append(consumer.Validators, msg.Creator)

	// Commit the state update to the consumer store
	k.SetConsumer(ctx, consumer)

	return &types.MsgSubscribeValidatorResponse{}, nil
}
