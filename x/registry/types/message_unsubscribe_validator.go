package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUnsubscribeValidator = "unsubscribe_validator"

var _ sdk.Msg = &MsgUnsubscribeValidator{}

func NewMsgUnsubscribeValidator(creator string, chainID string) *MsgUnsubscribeValidator {
	return &MsgUnsubscribeValidator{
		Creator: creator,
		ChainID: chainID,
	}
}

func (msg *MsgUnsubscribeValidator) Route() string {
	return RouterKey
}

func (msg *MsgUnsubscribeValidator) Type() string {
	return TypeMsgUnsubscribeValidator
}

func (msg *MsgUnsubscribeValidator) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUnsubscribeValidator) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUnsubscribeValidator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
