package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sainoe/registry/x/registry/types"
)

func (k msgServer) RegisterConsumer(goCtx context.Context, msg *types.MsgRegisterConsumer) (*types.MsgRegisterConsumerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRegisterConsumerResponse{}, nil
}
