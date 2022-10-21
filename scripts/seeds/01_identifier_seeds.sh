#!/bin/bash

echo "Create a DID doc for the regulator (by the regulator account)"
millicashd tx did create-did regulator \
 --from regulator \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:cosmos:net:millicash:regulator --output json | jq

echo "Create a DID doc for the EMTi (by the validator)"
millicashd tx did create-did emti --from validator \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:cosmos:net:millicash:emti --output json | jq

echo "Add the EMTi account verification method to the the EMTi DID doc (by the validator account)"
millicashd tx did add-verification-method emti $(millicashd keys show emti -p) \
 --from validator \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:cosmos:net:millicash:emti --output json | jq

echo "Querying dids"
millicashd query did dids --output json | jq

echo "Add a service to the EMTi DID doc (by the EMTi account)"
millicashd tx did add-service emti emti-agent DIDComm "https://agents.millicash.app.beta.starport.cloud/emti" \
--from emti \
--chain-id millicash -y --broadcast-mode block

millicashd query did did did:cosmos:net:millicash:emti --output json | jq

echo "Adding a verification relationship from decentralized did for validator"
millicashd tx did set-verification-relationship emti $(millicashd keys show validator -a) --relationship assertionMethod --relationship capabilityInvocation \
--from emti \
--chain-id millicash -y --broadcast-mode block

millicashd query did did did:cosmos:net:millicash:emti --output json | jq

echo "Revoking verification method from decentralized did for user: validator"
millicashd tx did revoke-verification-method emti $(millicashd keys show validator -a) \
--from emti \
--chain-id millicash -y --broadcast-mode block

echo "Querying dids"
millicashd query did did did:cosmos:net:millicash:emti --output json | jq

echo "Deleting service from EMTi did document (by EMTi user)"
millicashd tx did delete-service emti emti-agent \
--from emti \
--chain-id millicash -y --broadcast-mode block


echo "Add a controller to the EMTi did document (by EMTi user)"
millicashd tx did add-controller emti $(millicashd keys show alice -a) \
--from emti \
--chain-id millicash -y --broadcast-mode block

echo "Querying dids"
millicashd query did did did:cosmos:net:millicash:emti --output json | jq

echo "Remove a controller from the EMTi did document (by alice user)"
millicashd tx did delete-controller emti $(millicashd keys show alice -a) \
--from alice \
--chain-id millicash -y --broadcast-mode block

echo "Querying dids"
millicashd query did did did:cosmos:net:millicash:emti --output json | jq
