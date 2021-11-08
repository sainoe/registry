package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegisterConsumer = "register_consumer"

var _ sdk.Msg = &MsgRegisterConsumer{}

func NewMsgRegisterConsumer(creator string, chainID string) *MsgRegisterConsumer {
	return &MsgRegisterConsumer{
		Creator: creator,
		ChainID: chainID,
	}
}

func (msg *MsgRegisterConsumer) Route() string {
	return RouterKey
}

func (msg *MsgRegisterConsumer) Type() string {
	return TypeMsgRegisterConsumer
}

func (msg *MsgRegisterConsumer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRegisterConsumer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegisterConsumer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
