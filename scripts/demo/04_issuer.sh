#!/bin/bash


### Creating Issuers

echo "Creating issuer for bank: Barclays"
cashd tx issuer create-issuer \
 did:millicent:net:cash:barclays did:millicent:net:cash:barclays-gbplicense-credential sGBP 100 \
 --from barclays \
 --chain-id cash -y --broadcast-mode block

 echo "Creating issuer for bank: lloyds"
cashd tx issuer create-issuer \
 did:millicent:net:cash:lloyds did:millicent:net:cash:lloyds-gbplicense-credential sGBP 100 \
 --from lloyds \
 --chain-id cash -y --broadcast-mode block

  echo "Creating issuer for bank: HSBC"
cashd tx issuer create-issuer \
 did:millicent:net:cash:hsbc did:millicent:net:cash:hsbc-gbplicense-credential sGBP 100 \
 --from hsbc \
 --chain-id cash -y --broadcast-mode block

   echo "Creating issuer for bank: JPMorgan"
cashd tx issuer create-issuer \
 did:millicent:net:cash:jpmorgan did:millicent:net:cash:jpmorgan-dollarlicense-credential sUSD 100 \
 --from jpmorgan \
 --chain-id cash -y --broadcast-mode block


### Self Issuing KYCs to issuers

echo "Self-issuing proof of kyc to itself: Barclays"
cashd tx issuer issue-user-credential \
	did:millicent:net:cash:barclays did:millicent:net:cash:barclays secret 1000 1000 1000  \
	--credential-id did:millicent:net:cash:barclays-pokyc \
	--from barclays \
	--chain-id cash -y --broadcast-mode block

echo "Self-issuing proof of kyc to itself: Lloyds"
cashd tx issuer issue-user-credential \
	did:millicent:net:cash:lloyds did:millicent:net:cash:lloyds secret 1000 1000 1000  \
	--credential-id did:millicent:net:cash:lloyds-pokyc \
	--from lloyds \
	--chain-id cash -y --broadcast-mode block

echo "Self-issuing proof of kyc to itself: HSBC"
cashd tx issuer issue-user-credential \
	did:millicent:net:cash:hsbc did:millicent:net:cash:hsbc secret 1000 1000 1000  \
	--credential-id did:millicent:net:cash:hsbc-pokyc \
	--from hsbc \
	--chain-id cash -y --broadcast-mode block

echo "Self-issuing proof of kyc to itself: JPMorgan"
cashd tx issuer issue-user-credential \
	did:millicent:net:cash:jpmorgan did:millicent:net:cash:jpmorgan secret 1000 1000 1000  \
	--credential-id did:millicent:net:cash:jpmorgan-pokyc \
	--from jpmorgan \
	--chain-id cash -y --broadcast-mode block


### Mint Tokens

 echo "Mint tokens for Barclays"
cashd tx issuer mint-token \
 did:millicent:net:cash:barclays did:millicent:net:cash:barclays-gbplicense-credential 1000sGBP \
 --from barclays \
 --chain-id cash -y --broadcast-mode block

  echo "Mint tokens for Lloyds"
cashd tx issuer mint-token \
 did:millicent:net:cash:lloyds did:millicent:net:cash:lloyds-gbplicense-credential 1000sGBP \
 --from lloyds \
 --chain-id cash -y --broadcast-mode block

 echo "Mint tokens for HSBC"
cashd tx issuer mint-token \
 did:millicent:net:cash:hsbc did:millicent:net:cash:hsbc-gbplicense-credential 1000sGBP \
 --from hsbc \
 --chain-id cash -y --broadcast-mode block

  echo "Mint tokens for JPMorgan"
cashd tx issuer mint-token \
 did:millicent:net:cash:jpmorgan did:millicent:net:cash:jpmorgan-dollarlicense-credential 1000sUSD \
 --from jpmorgan \
 --chain-id cash -y --broadcast-mode block

echo "Check minted tokens"
 cashd query bank total --output json | jq