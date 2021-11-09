package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sainoe/registry/x/registry/types"
)

func (k msgServer) UnsubscribeValidator(goCtx context.Context, msg *types.MsgUnsubscribeValidator) (*types.MsgUnsubscribeValidatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Execute the transaction logic
	if err := k.removeValidatorFromConsumer(ctx, msg.ChainID, msg.Creator); err != nil {
		return nil, err
	}

	return &types.MsgUnsubscribeValidatorResponse{}, nil
}

// removeValidatorFromConsumer retrieves the consumer object list and removes the given validator address
func (k msgServer) removeValidatorFromConsumer(ctx sdk.Context, consumerID string, validatorAddress string) error {
	// Check if the consumer chain exists in the registry store
	consumer, isFound := k.GetConsumer(ctx, consumerID)
	if !isFound {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Consumer chain does not exist")
	}

	validators := consumer.Validators

	// Find the position of the validator to be removed
	position := getValidatorPosition(validators, validatorAddress)
	if position < 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Validator not subscribed")
	}

	// update the consumer validator list
	// updatedValidators := make([]string, len(validators)-1)
	updatedValidators := append(validators[:position], validators[position+1:]...)
	consumer.Validators = updatedValidators

	// persist the updated validators to the consumer store
	k.SetConsumer(ctx, consumer)

	return nil
}

// getValidatorPosition tries to find a given validator from a list
// otherwise returns -1
func getValidatorPosition(validators []string, target string) int {
	for pos, valAdrs := range validators {
		if valAdrs == target {
			return pos
		}
	}

	return -1
}
