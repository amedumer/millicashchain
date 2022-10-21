#!/bin/bash

echo "Create Regulator VC to activate the Regulator did"
cashd tx regulator activate-regulator-credential \
TheAuthority EU \
--subject-did did:cosmos:net:cash:regulator \
--from regulator --chain-id cash -y --broadcast-mode block


echo "Create Registration VC for EMTi did"
cashd tx regulator issue-registration-credential \
did:cosmos:net:cash:regulator did:cosmos:net:cash:emti \
EU "First Galactic Bank" "FGB" \
--credential-id did:cosmos:net:cash:emti-registration-credential \
--from regulator --chain-id cash -y --broadcast-mode block


echo "Create License VC for EMTi did (sEUR)"
cashd tx regulator issue-license-credential \
did:cosmos:net:cash:regulator did:cosmos:net:cash:emti \
MICAEMI IRL "Another Financial Services Body (AFFB)" sEUR 10000 \
--credential-id did:cosmos:net:cash:emti-eurolicense-credential \
--from regulator --chain-id cash -y --broadcast-mode block


echo "Create License VC for EMTi did (sUSD)"
cashd tx regulator issue-license-credential \
did:cosmos:net:cash:regulator did:cosmos:net:cash:emti \
MICAEMI PG "Yet Another Financial Services Body (YAFFB)" sUSD 10000 \
--credential-id did:cosmos:net:cash:emti-dollarlicense-credential \
--from regulator --chain-id cash -y --broadcast-mode block


echo "Revoke the (sUSD) license"
cashd tx verifiablecredential revoke-credential \
did:cosmos:net:cash:emti-dollarlicense-credential \
--from regulator --chain-id cash -y --broadcast-mode block


echo "Creating User VC for user alice"
cashd tx issuer issue-user-credential \
did:cosmos:net:cash:emti did:cosmos:key:$(cashd keys show alice -a) zkp_secret 1000 1000 1000 \
--credential-id did:cosmos:cred:emti-user-alice \
--from emti --chain-id cash -y --broadcast-mode block


echo "Creating User VC for user bob"
cashd tx issuer issue-user-credential \
did:cosmos:net:cash:emti did:cosmos:key:$(cashd keys show bob -a) zkp_secret 1000 1000 1000  \
--credential-id did:cosmos:cred:emti-user-bob \
--from emti --chain-id cash -y --broadcast-mode block


echo "Querying verifiable credentials"
cashd query verifiablecredential verifiable-credentials --output json | jq

echo "Revoke Bob's user credential"
cashd tx verifiablecredential revoke-credential did:cosmos:cred:emti-user-bob \
--from emti --chain-id cash -y --broadcast-mode block


echo "Querying verifiable credentials"
cashd query verifiablecredential verifiable-credentials --output json | jq


echo "Validating verifiable credentials"
cashd query verifiablecredential validate-verifiable-credential did:cosmos:net:cash:emti-eurolicense-credential \
$(cashd keys show regulator -p) --output json | jq
