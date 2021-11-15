package tests

import (
	"testing"

	"github.com/stretchr/testify/require"
	dbm "github.com/tendermint/tm-db"

	"github.com/cosmos/cosmos-sdk/store/rootmulti"
	"github.com/cosmos/cosmos-sdk/store/types"
)

func initTestStores(t *testing.T) types.KVStore { //, types.KVStore) {
	db := dbm.NewMemDB()
	ms := rootmulti.NewStore(db)

	key1 := types.NewKVStoreKey("store1")
	// key2 := types.NewKVStoreKey("store2")
	require.NotPanics(t, func() { ms.MountStoreWithDB(key1, types.StoreTypeIAVL, db) })
	// require.NotPanics(t, func() { ms.MountStoreWithDB(key2, types.StoreTypeIAVL, db) })
	require.NoError(t, ms.LoadLatestVersion())
	return ms.GetKVStore(key1) //, ms.GetKVStore(key2)
}

func TestIterator(t *testing.T) {
	kvs := initTestStores(t)
	kvs.Set([]byte("a/b/"), []byte("x"))
	t.Logf("%v", kvs.Has([]byte("a/b/")))

	itr := kvs.Iterator(nil, nil)

	t.Logf("%s", string(itr.Value()))

}
