#!/bin/bash

GENESIS_FILE=~/.millicash/config/genesis.json
if [ -f $GENESIS_FILE ]
then
    echo "Genesis file exist, would you like to delete it? (y/n)"
    read delete_config
fi

if [[
	$delete_config == "Y" ||
	$delete_config == "y" ||
	! -f $GENESIS_FILE
   ]];
then
    rm -r ~/.millicash

    echo "Initialising chain"
    millicashd init --chain-id=millicash millicash
    echo "y" | millicashd keys add validator
    echo "y" | millicashd keys add regulator
    echo "y" | millicashd keys add emti # e-money token issuer 
    echo "y" | millicashd keys add arti # asset-referenced token issuer 
    echo "y" | millicashd keys add bob
    echo "y" | millicashd keys add alice
 
    echo "Adding genesis account"
    millicashd add-genesis-account $(millicashd keys show validator -a) 1000000000stake --
    # this is to have the accounts on chain 
    millicashd add-genesis-account $(millicashd keys show emti -a) 1000stake
    millicashd add-genesis-account $(millicashd keys show arti -a) 1000stake
    millicashd add-genesis-account $(millicashd keys show bob -a) 1000stake
    millicashd add-genesis-account $(millicashd keys show alice -a) 1000stake
    ## add the regulator
    millicashd add-genesis-account $(millicashd keys show regulator -a) 1000stake --regulator $(millicashd keys show regulator -a) --
    millicashd gentx validator 700000000stake --chain-id millicash
    millicashd collect-gentxs
fi


echo "Starting Cosmos Cash chain"
millicashd start