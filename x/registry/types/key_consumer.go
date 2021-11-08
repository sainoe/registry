package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ConsumerKeyPrefix is the prefix to retrieve all Consumer
	ConsumerKeyPrefix = "Consumer/value/"
)

// ConsumerKey returns the store key to retrieve a Consumer from the index fields
func ConsumerKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
