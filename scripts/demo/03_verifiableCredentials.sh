#!/bin/bash
echo "Create UK Regulator VC to activate the Regulator did"
millicashd tx regulator activate-regulator-credential \
TheAuthority EU \
--subject-did did:millicent:net:millicash:ukregulator \
--from ukregulator --chain-id millicash -y --broadcast-mode block

echo "Create US Regulator VC to activate the Regulator did"
millicashd tx regulator activate-regulator-credential \
TheAuthority US \
--subject-did did:millicent:net:millicash:usregulator \
--from usregulator --chain-id millicash -y --broadcast-mode block


### Registration VCs

echo "Create Registration VC for Barclays did (from UK Regulator)"
millicashd tx regulator issue-registration-credential \
did:millicent:net:millicash:ukregulator did:millicent:net:millicash:barclays \
EU "Barclays" "BRC" \
--credential-id did:millicent:net:millicash:barclays-registration-credential \
--from ukregulator --chain-id millicash -y --broadcast-mode block

echo "Create Registration VC for Lloyds did (from UK Regulator)"
millicashd tx regulator issue-registration-credential \
did:millicent:net:millicash:ukregulator did:millicent:net:millicash:lloyds \
EU "Lloyds" "LYD" \
--credential-id did:millicent:net:millicash:lloyds-registration-credential \
--from ukregulator --chain-id millicash -y --broadcast-mode block

echo "Create Registration VC for HSBC did (from UK Regulator)"
millicashd tx regulator issue-registration-credential \
did:millicent:net:millicash:ukregulator did:millicent:net:millicash:hsbc \
EU "HSBC" "HSBC" \
--credential-id did:millicent:net:millicash:hsbc-registration-credential \
--from ukregulator --chain-id millicash -y --broadcast-mode block

echo "Create Registration VC for JPMorgan did (from US Regulator)"
millicashd tx regulator issue-registration-credential \
did:millicent:net:millicash:usregulator did:millicent:net:millicash:jpmorgan \
EU "JPMorgan" "JPM" \
--credential-id did:millicent:net:millicash:jpmorgan-registration-credential \
--from usregulator --chain-id millicash -y --broadcast-mode block


### License VCs

echo "Create License VC for Barclays did (sGBP) (From UK Regulator)"
millicashd tx regulator issue-license-credential \
did:millicent:net:millicash:ukregulator did:millicent:net:millicash:barclays \
MICAEMI IRL "Barclays Financial Services" sGBP 100000 \
--credential-id did:millicent:net:millicash:barclays-gbplicense-credential \
--from ukregulator --chain-id millicash -y --broadcast-mode block

echo "Create License VC for Lloyds did (sGBP) (From UK Regulator)"
millicashd tx regulator issue-license-credential \
did:millicent:net:millicash:ukregulator did:millicent:net:millicash:lloyds \
MICAEMI IRL "Lloyds Financial Services" sGBP 100000 \
--credential-id did:millicent:net:millicash:lloyds-gbplicense-credential \
--from ukregulator --chain-id millicash -y --broadcast-mode block

echo "Create License VC for HSBC did (sGBP) (From UK Regulator)"
millicashd tx regulator issue-license-credential \
did:millicent:net:millicash:ukregulator did:millicent:net:millicash:hsbc \
MICAEMI IRL "HSBC Financial Services" sGBP 100000 \
--credential-id did:millicent:net:millicash:hsbc-gbplicense-credential \
--from ukregulator --chain-id millicash -y --broadcast-mode block

echo "Create License VC for JP Morgan did (sUSD) (From US Regulator)"
millicashd tx regulator issue-license-credential \
did:millicent:net:millicash:usregulator did:millicent:net:millicash:jpmorgan \
MICAEMI IRL "JPMorgan Financial Services" sUSD 100000 \
--credential-id did:millicent:net:millicash:jpmorgan-dollarlicense-credential \
--from usregulator --chain-id millicash -y --broadcast-mode block

echo "Querying verifiable credentials"
millicashd query verifiablecredential verifiable-credentials --output json | jq
