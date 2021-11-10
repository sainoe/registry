package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		ConsumerList:     []Consumer{},
		SubscriptionList: []Subscription{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in consumer
	consumerIndexMap := make(map[string]struct{})

	for _, elem := range gs.ConsumerList {
		index := string(ConsumerKey(elem.Index))
		if _, ok := consumerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for consumer")
		}
		consumerIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in subscription
	subscriptionIndexMap := make(map[string]struct{})

	for _, elem := range gs.SubscriptionList {
		index := string(SubscriptionKey(elem.Index))
		if _, ok := subscriptionIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for subscription")
		}
		subscriptionIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
