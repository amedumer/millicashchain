#!/bin/bash

echo "Creating issuer for user: emti"
millicashd tx issuer create-issuer \
 did:cosmos:net:millicash:emti did:cosmos:net:millicash:emti-eurolicense-credential sEUR 100 \
 --from emti \
 --chain-id millicash -y --broadcast-mode block


echo "Querying all issuers"
millicashd query issuer issuers --output json | jq

echo "Mint tokens for issuer: emti"
millicashd tx issuer mint-token \
 did:cosmos:net:millicash:emti did:cosmos:net:millicash:emti-eurolicense-credential 9999sEUR \
 --from emti \
 --chain-id millicash -y --broadcast-mode block


echo "Check that the tokens have been minted"
millicashd query bank total --output json | jq

echo "Burn tokens for issuer: emti"
millicashd tx issuer burn-token \
 did:cosmos:net:millicash:emti did:cosmos:net:millicash:emti-eurolicense-credential 1000sEUR \
 --from emti \
 --chain-id millicash -y --broadcast-mode block


echo "Check that the tokens have been burned"
millicashd query bank total --output json | jq

echo "Pause tokens for issuer: emti"
millicashd tx issuer pause-token \
 did:cosmos:net:millicash:emti did:cosmos:net:millicash:emti-eurolicense-credential \
 --from emti \
 --chain-id millicash -y --broadcast-mode block


echo "Querying all issuers"
millicashd query issuer issuers --output json | jq

echo "Unpause tokens for issuer: emti"
millicashd tx issuer pause-token \
 did:cosmos:net:millicash:emti did:cosmos:net:millicash:emti-eurolicense-credential \
 --from emti \
 --chain-id millicash -y --broadcast-mode block


echo "Querying all issuers"
millicashd query issuer issuers --output json | jq
