package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// SubscriptionKeyPrefix is the prefix to retrieve all Subscription
	SubscriptionKeyPrefix = "Subscription/value/"
)

// SubscriptionKey returns the store key to retrieve a Subscription from the index fields
func SubscriptionKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
