package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgRegisterConsumer{}, "registry/RegisterConsumer", nil)
	cdc.RegisterConcrete(&MsgSubscribeValidator{}, "registry/SubscribeValidator", nil)
	cdc.RegisterConcrete(&MsgUnsubscribeValidator{}, "registry/UnsubscribeValidator", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRegisterConsumer{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSubscribeValidator{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUnsubscribeValidator{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
