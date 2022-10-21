#!/bin/bash

echo "Creating key for user user1"
echo 'y' | millicashd keys add user1
echo 'y' | millicashd keys add user2

echo "Sending tokens to user 1 from validator"
millicashd tx bank send \
 $(millicashd keys show validator -a) $(millicashd keys show user1 -a) 100000stake \
 --from validator \
 --chain-id millicash -y --broadcast-mode block

echo "Sending tokens to user 2 from validator"
millicashd tx bank send \
 $(millicashd keys show validator -a) $(millicashd keys show user2 -a) 100000stake \
 --from validator \
 --chain-id millicash -y --broadcast-mode block


echo "Creating decentralized did for user1"
millicashd tx did create-did user1 \
 --from user1 \
 --chain-id millicash -y --broadcast-mode block

echo "Creating decentralized did for user2"
millicashd tx did create-did user2 \
 --from user2 \
 --chain-id millicash -y --broadcast-mode block


echo "Creating verifiable credential for user :user1"
millicashd tx issuer issue-user-credential \
	did:cosmos:net:millicash:emti did:cosmos:net:millicash:user1 secret 1000 1000 1000  \
	--credential-id did:cosmos:net:millicash:user1-pokyc \
	--from emti \
	--chain-id millicash -y --broadcast-mode block


echo "Creating verifiable credential for user :user2"
millicashd tx issuer issue-user-credential \
	did:cosmos:net:millicash:emti did:cosmos:net:millicash:user2 secret 1000 1000 1000  \
	--credential-id did:cosmos:net:millicash:user2-pokyc \
	--from emti \
	--chain-id millicash -y --broadcast-mode block


echo "Self-issuing proof of kyc to itself: emti"
millicashd tx issuer issue-user-credential \
	did:cosmos:net:millicash:emti did:cosmos:net:millicash:emti secret 1000 1000 1000  \
	--credential-id did:cosmos:net:millicash:emti-pokyc \
	--from emti \
	--chain-id millicash -y --broadcast-mode block


echo "Querying all data"
millicashd query did dids --output json | jq
millicashd query verifiablecredential verifiable-credentials --output json | jq

echo "Sending issuer tokens to users from emti"
millicashd tx bank send \
 $(millicashd keys show emti -a) $(millicashd keys show user1 -a) 10sEUR \
 --from emti \
 --chain-id millicash -y --broadcast-mode block


echo "Sending issuer tokens to users from emti"
millicashd tx bank send \
 $(millicashd keys show emti -a) $(millicashd keys show user2 -a) 10sEUR \
 --from emti \
 --chain-id millicash -y --broadcast-mode block


echo "Querying balances for users"
millicashd query bank balances $(millicashd keys show user1 -a) --output json | jq
millicashd query bank balances $(millicashd keys show user2 -a) --output json | jq

echo "Pause tokens for issuer: validator"
millicashd tx issuer pause-token \
 did:cosmos:net:millicash:emti did:cosmos:net:millicash:eurolicense-credential \
 --from regulator \
 --chain-id millicash -y --broadcast-mode block


echo "Sending paused issuer tokens to user from validator: should fail"
millicashd tx bank send \
 $(millicashd keys show user1 -a) $(millicashd keys show user2 -a) 10sEUR \
 --from user1 \
 --chain-id millicash -y --broadcast-mode block


echo "Querying balances for user2 should be 10sEUR"
millicashd query bank balances $(millicashd keys show user2 -a) --output json | jq
