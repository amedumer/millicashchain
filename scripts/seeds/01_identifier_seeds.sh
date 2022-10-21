#!/bin/bash

echo "Create a DID doc for the regulator (by the regulator account)"
cashd tx did create-did regulator \
 --from regulator \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:cosmos:net:cash:regulator --output json | jq

echo "Create a DID doc for the EMTi (by the validator)"
cashd tx did create-did emti --from validator \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:cosmos:net:cash:emti --output json | jq

echo "Add the EMTi account verification method to the the EMTi DID doc (by the validator account)"
cashd tx did add-verification-method emti $(cashd keys show emti -p) \
 --from validator \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:cosmos:net:cash:emti --output json | jq

echo "Querying dids"
cashd query did dids --output json | jq

echo "Add a service to the EMTi DID doc (by the EMTi account)"
cashd tx did add-service emti emti-agent DIDComm "https://agents.millicash.app.beta.starport.cloud/emti" \
--from emti \
--chain-id cash -y --broadcast-mode block

cashd query did did did:cosmos:net:cash:emti --output json | jq

echo "Adding a verification relationship from decentralized did for validator"
cashd tx did set-verification-relationship emti $(cashd keys show validator -a) --relationship assertionMethod --relationship capabilityInvocation \
--from emti \
--chain-id cash -y --broadcast-mode block

cashd query did did did:cosmos:net:cash:emti --output json | jq

echo "Revoking verification method from decentralized did for user: validator"
cashd tx did revoke-verification-method emti $(cashd keys show validator -a) \
--from emti \
--chain-id cash -y --broadcast-mode block

echo "Querying dids"
cashd query did did did:cosmos:net:cash:emti --output json | jq

echo "Deleting service from EMTi did document (by EMTi user)"
cashd tx did delete-service emti emti-agent \
--from emti \
--chain-id cash -y --broadcast-mode block


echo "Add a controller to the EMTi did document (by EMTi user)"
cashd tx did add-controller emti $(cashd keys show alice -a) \
--from emti \
--chain-id cash -y --broadcast-mode block

echo "Querying dids"
cashd query did did did:cosmos:net:cash:emti --output json | jq

echo "Remove a controller from the EMTi did document (by alice user)"
cashd tx did delete-controller emti $(cashd keys show alice -a) \
--from alice \
--chain-id cash -y --broadcast-mode block

echo "Querying dids"
cashd query did did did:cosmos:net:cash:emti --output json | jq
