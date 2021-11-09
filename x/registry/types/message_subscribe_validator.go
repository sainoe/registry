package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSubscribeValidator = "subscribe_validator"

var _ sdk.Msg = &MsgSubscribeValidator{}

func NewMsgSubscribeValidator(creator string, chainID string) *MsgSubscribeValidator {
	return &MsgSubscribeValidator{
		Creator: creator,
		ChainID: chainID,
	}
}

func (msg *MsgSubscribeValidator) Route() string {
	return RouterKey
}

func (msg *MsgSubscribeValidator) Type() string {
	return TypeMsgSubscribeValidator
}

func (msg *MsgSubscribeValidator) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSubscribeValidator) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSubscribeValidator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
