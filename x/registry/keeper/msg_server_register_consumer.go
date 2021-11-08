package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sainoe/registry/x/registry/types"
)

func (k msgServer) RegisterConsumer(goCtx context.Context, msg *types.MsgRegisterConsumer) (*types.MsgRegisterConsumerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Store the consumer to the registry store
	newConsumer := types.Consumer{
		Index:   msg.ChainID,
		ChainID: msg.ChainID,
		Creator: msg.Creator,
	}

	k.SetConsumer(ctx, newConsumer)

	return &types.MsgRegisterConsumerResponse{}, nil
}
