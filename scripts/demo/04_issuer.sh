#!/bin/bash


### Creating Issuers

echo "Creating issuer for bank: Barclays"
millicashd tx issuer create-issuer \
 did:millicent:net:millicash:barclays did:millicent:net:millicash:barclays-gbplicense-credential sGBP 100 \
 --from barclays \
 --chain-id millicash -y --broadcast-mode block

 echo "Creating issuer for bank: lloyds"
millicashd tx issuer create-issuer \
 did:millicent:net:millicash:lloyds did:millicent:net:millicash:lloyds-gbplicense-credential sGBP 100 \
 --from lloyds \
 --chain-id millicash -y --broadcast-mode block

  echo "Creating issuer for bank: HSBC"
millicashd tx issuer create-issuer \
 did:millicent:net:millicash:hsbc did:millicent:net:millicash:hsbc-gbplicense-credential sGBP 100 \
 --from hsbc \
 --chain-id millicash -y --broadcast-mode block

   echo "Creating issuer for bank: JPMorgan"
millicashd tx issuer create-issuer \
 did:millicent:net:millicash:jpmorgan did:millicent:net:millicash:jpmorgan-dollarlicense-credential sUSD 100 \
 --from jpmorgan \
 --chain-id millicash -y --broadcast-mode block


### Self Issuing KYCs to issuers

echo "Self-issuing proof of kyc to itself: Barclays"
millicashd tx issuer issue-user-credential \
	did:millicent:net:millicash:barclays did:millicent:net:millicash:barclays secret 1000 1000 1000  \
	--credential-id did:millicent:net:millicash:barclays-pokyc \
	--from barclays \
	--chain-id millicash -y --broadcast-mode block

echo "Self-issuing proof of kyc to itself: Lloyds"
millicashd tx issuer issue-user-credential \
	did:millicent:net:millicash:lloyds did:millicent:net:millicash:lloyds secret 1000 1000 1000  \
	--credential-id did:millicent:net:millicash:lloyds-pokyc \
	--from lloyds \
	--chain-id millicash -y --broadcast-mode block

echo "Self-issuing proof of kyc to itself: HSBC"
millicashd tx issuer issue-user-credential \
	did:millicent:net:millicash:hsbc did:millicent:net:millicash:hsbc secret 1000 1000 1000  \
	--credential-id did:millicent:net:millicash:hsbc-pokyc \
	--from hsbc \
	--chain-id millicash -y --broadcast-mode block

echo "Self-issuing proof of kyc to itself: JPMorgan"
millicashd tx issuer issue-user-credential \
	did:millicent:net:millicash:jpmorgan did:millicent:net:millicash:jpmorgan secret 1000 1000 1000  \
	--credential-id did:millicent:net:millicash:jpmorgan-pokyc \
	--from jpmorgan \
	--chain-id millicash -y --broadcast-mode block


### Mint Tokens

 echo "Mint tokens for Barclays"
millicashd tx issuer mint-token \
 did:millicent:net:millicash:barclays did:millicent:net:millicash:barclays-gbplicense-credential 1000sGBP \
 --from barclays \
 --chain-id millicash -y --broadcast-mode block

  echo "Mint tokens for Lloyds"
millicashd tx issuer mint-token \
 did:millicent:net:millicash:lloyds did:millicent:net:millicash:lloyds-gbplicense-credential 1000sGBP \
 --from lloyds \
 --chain-id millicash -y --broadcast-mode block

 echo "Mint tokens for HSBC"
millicashd tx issuer mint-token \
 did:millicent:net:millicash:hsbc did:millicent:net:millicash:hsbc-gbplicense-credential 1000sGBP \
 --from hsbc \
 --chain-id millicash -y --broadcast-mode block

  echo "Mint tokens for JPMorgan"
millicashd tx issuer mint-token \
 did:millicent:net:millicash:jpmorgan did:millicent:net:millicash:jpmorgan-dollarlicense-credential 1000sUSD \
 --from jpmorgan \
 --chain-id millicash -y --broadcast-mode block

echo "Check minted tokens"
 millicashd query bank total --output json | jq