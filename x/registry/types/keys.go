package types

const (
	// ModuleName defines the module name
	ModuleName = "registry"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_registry"

	ValidatorToConsumerKey = "validator_consumer/"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

func ValidatorConsumerIndexKey(valAddr string, consID string) []byte {
	var key []byte

	indexBytes := []byte(ValidatorToConsumerKey + valAddr + consID)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}

// Set ValidatorConsumerIndexKey()
// Utility function for validator keys using separ
// prefix + validatorID + consumerID
