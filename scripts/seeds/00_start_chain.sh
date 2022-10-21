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
    cashd init --chain-id=cash cash
    echo "y" | cashd keys add validator
    echo "y" | cashd keys add regulator
    echo "y" | cashd keys add emti # e-money token issuer 
    echo "y" | cashd keys add arti # asset-referenced token issuer 
    echo "y" | cashd keys add bob
    echo "y" | cashd keys add alice
 
    echo "Adding genesis account"
    cashd add-genesis-account $(cashd keys show validator -a) 1000000000stake --
    # this is to have the accounts on chain 
    cashd add-genesis-account $(cashd keys show emti -a) 1000stake
    cashd add-genesis-account $(cashd keys show arti -a) 1000stake
    cashd add-genesis-account $(cashd keys show bob -a) 1000stake
    cashd add-genesis-account $(cashd keys show alice -a) 1000stake
    ## add the regulator
    cashd add-genesis-account $(cashd keys show regulator -a) 1000stake --regulator $(cashd keys show regulator -a) --
    cashd gentx validator 700000000stake --chain-id cash
    cashd collect-gentxs
fi


echo "Starting Cosmos Cash chain"
cashd start