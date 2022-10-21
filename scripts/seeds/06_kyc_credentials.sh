#!/bin/bash

KYC_CRED=new-kyc-cred-$RANDOM
IDENTITY_CRED=new-identity-cred-$RANDOM
ISSUER_KYC_CRED=new-issuer-kyc-cred-01

echo "Creating key for user user1"
echo 'y' | millicashd keys add user1

echo
echo "Sending tokens to user1 from validator"
millicashd tx bank send $(millicashd keys show validator -a) $(millicashd keys show user1 -a) 100000stake --from validator --chain-id millicash -y

echo
echo "Creating decentralized did for user"
millicashd tx did create-did --from user1 --chain-id millicash -y

echo
echo "Creating identity verifiable credential for user :validator"
millicashd tx verifiablecredential create-verifiable-credential did:millicash:$(millicashd keys show user1 -a) $IDENTITY_CRED secret alice dublin 1-1-1970 1234 3531234  --from validator --chain-id millicash -y

echo
echo "Adding identity service to decentralized did for users"
millicashd tx did add-service did:millicash:$(millicashd keys show user1 -a) $IDENTITY_CRED IdentityCredential millicash:$IDENTITY_CRED --from user1 --chain-id millicash -y

echo
echo "Creating verifiable credential for user :user1 with issuer :validator"
millicashd tx verifiablecredential create-kyc-verifiable-credential \
	did:millicash:$(millicashd keys show user1 -a) $KYC_CRED secret 1000 1000 1000  \
	--from validator --chain-id millicash -y

echo
echo "Adding service to decentralized did for users"
millicashd tx did add-service did:millicash:$(millicashd keys show user1 -a) $KYC_CRED UserCredential millicash:$KYC_CRED --from user1 --chain-id millicash -y

echo
echo "Creating verifiable credential for user :validator with issuer :validator"
millicashd tx verifiablecredential create-kyc-verifiable-credential \
	did:millicash:$(millicashd keys show validator -a) $ISSUER_KYC_CRED secret 1000 1000 1000  \
	--from validator --chain-id millicash -y

echo
echo "Adding service to decentralized did for validator"
millicashd tx did add-service did:millicash:$(millicashd keys show validator -a) $ISSUER_KYC_CRED UserCredential millicash:$ISSUER_KYC_CRED --from user1 --chain-id millicash -y

echo
echo "Querying verifiable credentials"
millicashd query verifiablecredential verifiable-credential $KYC_CRED --output json | jq

echo
echo "Sending issuer tokens to user from validator"
millicashd tx bank send $(millicashd keys show validator -a) $(millicashd keys show user1 -a) 100000seuro --from validator --chain-id millicash -y

echo
echo "Querying balances for user"
gaiad query bank balances $(millicashd keys show user1 -a) --output json | jq

