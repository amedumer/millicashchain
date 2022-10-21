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
    echo "y" | cashd keys add euregulator
    echo "y" | cashd keys add usregulator
    echo "y" | cashd keys add lloyds # e-money token issuer 
    echo "y" | cashd keys add barclays # e-money token issuer 
    echo "y" | cashd keys add hsbc # e-money token issuer 
    echo "y" | cashd keys add jpmorgan # e-money token issuer 
    echo "y" | cashd keys add bob
    echo "y" | cashd keys add alice
    echo "y" | cashd keys add charlie
    echo "y" | cashd keys add dora
 
    echo "Adding genesis account"
    cashd add-genesis-account $(cashd keys show validator -a) 1000000000stake --
    # this is to have the accounts on chain 
    cashd add-genesis-account $(cashd keys show lloyds -a) 100000stake
    cashd add-genesis-account $(cashd keys show barclays -a) 100000stake
    cashd add-genesis-account $(cashd keys show hsbc -a) 100000stake
    cashd add-genesis-account $(cashd keys show jpmorgan -a) 100000stake
    cashd add-genesis-account $(cashd keys show bob -a) 100000stake
    cashd add-genesis-account $(cashd keys show alice -a) 100000stake
    cashd add-genesis-account $(cashd keys show dora -a) 100000stake
    cashd add-genesis-account $(cashd keys show charlie -a) 100000stake
    cashd add-genesis-account $(cashd keys show usregulator -a) 100000stake
    ## add the regulator
    regulators=(\"$(cashd keys show euregulator -a)\",\"$(cashd keys show usregulator -a)\")
    cashd add-genesis-account $(cashd keys show euregulator -a) 100000stake --regulator $regulators --
    cashd gentx validator 700000000stake --chain-id cash
    cashd collect-gentxs
fi


echo "Starting Cosmos Cash chain"
cashd start