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
    echo "y" | millicashd keys add euregulator
    echo "y" | millicashd keys add usregulator
    echo "y" | millicashd keys add lloyds # e-money token issuer 
    echo "y" | millicashd keys add barclays # e-money token issuer 
    echo "y" | millicashd keys add hsbc # e-money token issuer 
    echo "y" | millicashd keys add jpmorgan # e-money token issuer 
    echo "y" | millicashd keys add bob
    echo "y" | millicashd keys add alice
    echo "y" | millicashd keys add charlie
    echo "y" | millicashd keys add dora
 
    echo "Adding genesis account"
    millicashd add-genesis-account $(millicashd keys show validator -a) 1000000000milli --
    # this is to have the accounts on chain 
    millicashd add-genesis-account $(millicashd keys show lloyds -a) 100000milli
    millicashd add-genesis-account $(millicashd keys show barclays -a) 100000milli
    millicashd add-genesis-account $(millicashd keys show hsbc -a) 100000milli
    millicashd add-genesis-account $(millicashd keys show jpmorgan -a) 100000milli
    millicashd add-genesis-account $(millicashd keys show bob -a) 100000milli
    millicashd add-genesis-account $(millicashd keys show alice -a) 100000milli
    millicashd add-genesis-account $(millicashd keys show dora -a) 100000milli
    millicashd add-genesis-account $(millicashd keys show charlie -a) 100000milli
    millicashd add-genesis-account $(millicashd keys show usregulator -a) 100000milli
    ## add the regulator
    regulators=(\"$(millicashd keys show euregulator -a)\",\"$(millicashd keys show usregulator -a)\")
    millicashd add-genesis-account $(millicashd keys show euregulator -a) 100000milli --regulator $regulators --
    millicashd gentx validator 700000000milli --chain-id cash
    millicashd collect-gentxs

    sed -i -e 's/stake/milli/g' $GENESIS_FILE

fi

echo "Starting Cosmos Cash chain"
millicashd start