package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sainoe/registry/x/registry/types"
)

func (k msgServer) SubscribeValidator(goCtx context.Context, msg *types.MsgSubscribeValidator) (*types.MsgSubscribeValidatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Execute the transaction logic
	if err := k.addValidatorToConsumer(ctx, msg.ChainID, msg.Creator); err != nil {
		return nil, err
	}

	return &types.MsgSubscribeValidatorResponse{}, nil
}

func (k msgServer) addValidatorToConsumer(ctx sdk.Context, consumerID string, validatorAddress string) error {
	// Check if the consumer chain exists in the registry store
	consumer, isFound := k.GetConsumer(ctx, consumerID)
	if !isFound {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Consumer chain does not exist")
	}

	// Check if the sender already exists in the validator list
	if existsInValidators(consumer.Validators, validatorAddress) {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Validator is already subscribed") // Or do nothing if omnipotent
	}

	// Append the validator address to the consumer entry validator list
	consumer.Validators = append(consumer.Validators, validatorAddress)

	// Commit the updated state to the consumer store
	k.SetConsumer(ctx, consumer)

	// Create and commit subscription to its store
	k.createSubscription(ctx, consumerID, validatorAddress)

	return nil
}

// Create and commit a subscription
func (k msgServer) createSubscription(ctx sdk.Context, consumerID string, validatorAddress string) {
	// Create and commit a subscription
	newSubscription := types.Subscription{
		Index:      validatorAddress,
		ConsumerID: consumerID,
	}
	k.SetSubscription(ctx, newSubscription)
}

// existsInValidators checks if a target address exists in validator address list
func existsInValidators(validators []string, target string) bool {
	for _, valAdrs := range validators {
		if valAdrs == target {
			return true
		}
	}
	return false
}
