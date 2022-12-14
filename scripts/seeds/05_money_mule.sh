#!/bin/bash

echo "Starting money mule sceneario"

# sets up an account with a verifiable credential
# takes 1 arg the name of the account to set up
set_up_account() {
	echo 'y' | millicashd keys add aml$2$1 --keyring-backend test

	### send native tokens so user can create did
	millicashd tx bank send \
		$(millicashd keys show validator -a) $(millicashd keys show aml$2$1 --keyring-backend test -a) 100000stake --from validator --chain-id millicash -y

	### create did
        millicashd tx did create-did --from aml$2$1 --keyring-backend test --chain-id millicash -y

	### issue credential
        millicashd tx verifiablecredential create-verifiable-credential \
		did:millicash:$(millicashd keys show aml$2$1 --keyring-backend test -a) $2-cred-$1 secret$1 name address dob nationalId phoneNumber --from validator --chain-id millicash -y

	### attach credential to did document
        millicashd tx did add-service \
		did:millicash:$(millicashd keys show aml$2$1 --keyring-backend test -a) $2-cred-$1 UserCredential millicash:$2-cred-$1 \
		--from aml$2$1 --keyring-backend test --chain-id millicash -y


	echo "Querying data for aml$2$1"
	millicashd query did did did:millicash:$(millicashd keys show aml$2$1 --keyring-backend test -a) --output json | jq
	millicashd query verifiablecredential verifiable-credential $2-cred-$1 --output json | jq

	sleep 1
}


# Destination accounts – set up 10 accounts to receive the coins
for i in {0..10}
do
	set_up_account $i dest &
	wait
done

# “mule accounts” – we need 10,000 of these setting up.
for i in {0..9}
do
	for j in {0..9} 
	do
		set_up_account ${i}${j} mule &
	done
	wait
done

# Originating accounts; we begin with 15 accounts all with a balance of €10K.
for i in {0..9}
do
	set_up_account $i origin

	### send token to fraud accounts
	millicashd tx bank send \
		$(millicashd keys show validator -a) $(millicashd keys show amlorigin$i --keyring-backend test -a) 10000seuro --from validator --chain-id millicash -y

	for j in {0..9} 
	do
		### send token from fraud accounts to mules
		millicashd tx bank send \
			$(millicashd keys show amlorigin$i --keyring-backend test -a) $(millicashd keys show amlmule$i$j --keyring-backend test -a) 100seuro --from amlorigin$i --chain-id millicash -y
	
		echo "Querying data for amlmule$i$j"
		millicashd query bank balances $(millicashd keys show amlmule$i$j --keyring-backend test -a) --output json | jq
	done
done

# Transactions: We create 10,000 transactions of €150 (or if you want a more realistic version
# make the average transaction of €150 but each one varies between €135 and €165). These transactions are sent to the mule accounts. 

# The mule accounts deduct €20 and send the transactions to the destination accounts as suggested.
for i in {0..9}
do
	R=$(($RANDOM%10))
	echo $R
	for j in {0..9} 
	do
		### send token from mule accounts to dest
		millicashd tx bank send \
			 $(millicashd keys show amlmule${i}${j} --keyring-backend test -a) $(millicashd keys show amldest$R --keyring-backend test -a) 80seuro \
			 --from $(millicashd keys show amlmule${i}${j} --keyring-backend test -a) --chain-id millicash -y &
	done
	wait

	echo "Querying data for amldest$R"
	millicashd query bank balances $(millicashd keys show amldest$R --keyring-backend test -a) --output json | jq
done

