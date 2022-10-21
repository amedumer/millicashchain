#!/bin/bash

echo "Create Regulator VC to activate the Regulator did"
millicashd tx regulator activate-regulator-credential \
TheAuthority EU \
--subject-did did:cosmos:net:millicash:regulator \
--from regulator --chain-id millicash -y --broadcast-mode block


echo "Create Registration VC for EMTi did"
millicashd tx regulator issue-registration-credential \
did:cosmos:net:millicash:regulator did:cosmos:net:millicash:emti \
EU "First Galactic Bank" "FGB" \
--credential-id did:cosmos:net:millicash:emti-registration-credential \
--from regulator --chain-id millicash -y --broadcast-mode block


echo "Create License VC for EMTi did (sEUR)"
millicashd tx regulator issue-license-credential \
did:cosmos:net:millicash:regulator did:cosmos:net:millicash:emti \
MICAEMI IRL "Another Financial Services Body (AFFB)" sEUR 10000 \
--credential-id did:cosmos:net:millicash:emti-eurolicense-credential \
--from regulator --chain-id millicash -y --broadcast-mode block


echo "Create License VC for EMTi did (sUSD)"
millicashd tx regulator issue-license-credential \
did:cosmos:net:millicash:regulator did:cosmos:net:millicash:emti \
MICAEMI PG "Yet Another Financial Services Body (YAFFB)" sUSD 10000 \
--credential-id did:cosmos:net:millicash:emti-dollarlicense-credential \
--from regulator --chain-id millicash -y --broadcast-mode block


echo "Revoke the (sUSD) license"
millicashd tx verifiablecredential revoke-credential \
did:cosmos:net:millicash:emti-dollarlicense-credential \
--from regulator --chain-id millicash -y --broadcast-mode block


echo "Creating User VC for user alice"
millicashd tx issuer issue-user-credential \
did:cosmos:net:millicash:emti did:cosmos:key:$(millicashd keys show alice -a) zkp_secret 1000 1000 1000 \
--credential-id did:cosmos:cred:emti-user-alice \
--from emti --chain-id millicash -y --broadcast-mode block


echo "Creating User VC for user bob"
millicashd tx issuer issue-user-credential \
did:cosmos:net:millicash:emti did:cosmos:key:$(millicashd keys show bob -a) zkp_secret 1000 1000 1000  \
--credential-id did:cosmos:cred:emti-user-bob \
--from emti --chain-id millicash -y --broadcast-mode block


echo "Querying verifiable credentials"
millicashd query verifiablecredential verifiable-credentials --output json | jq

echo "Revoke Bob's user credential"
millicashd tx verifiablecredential revoke-credential did:cosmos:cred:emti-user-bob \
--from emti --chain-id millicash -y --broadcast-mode block


echo "Querying verifiable credentials"
millicashd query verifiablecredential verifiable-credentials --output json | jq


echo "Validating verifiable credentials"
millicashd query verifiablecredential validate-verifiable-credential did:cosmos:net:millicash:emti-eurolicense-credential \
$(millicashd keys show regulator -p) --output json | jq
