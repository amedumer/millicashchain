echo "Create EU Regulator VC to activate the Regulator did"
cashd tx regulator activate-regulator-credential \
TheAuthority EU \
--subject-did did:millicent:net:cash:euregulator \
--from euregulator --chain-id cash -y --broadcast-mode block

echo "Create US Regulator VC to activate the Regulator did"
cashd tx regulator activate-regulator-credential \
TheAuthority US \
--subject-did did:millicent:net:cash:usregulator \
--from usregulator --chain-id cash -y --broadcast-mode block


### Registration VCs

echo "Create Registration VC for Barclays did (from EU Regulator)"
cashd tx regulator issue-registration-credential \
did:millicent:net:cash:euregulator did:millicent:net:cash:barclays \
EU "Barclays" "BRC" \
--credential-id did:millicent:net:cash:barclays-registration-credential \
--from euregulator --chain-id cash -y --broadcast-mode block

echo "Create Registration VC for Lloyds did (from EU Regulator)"
cashd tx regulator issue-registration-credential \
did:millicent:net:cash:euregulator did:millicent:net:cash:lloyds \
EU "Lloyds" "LYD" \
--credential-id did:millicent:net:cash:lloyds-registration-credential \
--from euregulator --chain-id cash -y --broadcast-mode block

echo "Create Registration VC for HSBC did (from EU Regulator)"
cashd tx regulator issue-registration-credential \
did:millicent:net:cash:euregulator did:millicent:net:cash:hsbc \
EU "HSBC" "HSBC" \
--credential-id did:millicent:net:cash:hsbc-registration-credential \
--from euregulator --chain-id cash -y --broadcast-mode block

echo "Create Registration VC for JPMorgan did (from US Regulator)"
cashd tx regulator issue-registration-credential \
did:millicent:net:cash:usregulator did:millicent:net:cash:jpmorgan \
EU "JPMorgan" "JPM" \
--credential-id did:millicent:net:cash:jpmorgan-registration-credential \
--from usregulator --chain-id cash -y --broadcast-mode block


### License VCs

echo "Create License VC for Barclays did (sGBP) (From EU Regulator)"
cashd tx regulator issue-license-credential \
did:millicent:net:cash:euregulator did:millicent:net:cash:barclays \
MICAEMI IRL "Barclays Financial Services" sGBP 100000 \
--credential-id did:millicent:net:cash:barclays-gbplicense-credential \
--from euregulator --chain-id cash -y --broadcast-mode block

echo "Create License VC for Lloyds did (sGBP) (From EU Regulator)"
cashd tx regulator issue-license-credential \
did:millicent:net:cash:euregulator did:millicent:net:cash:lloyds \
MICAEMI IRL "Lloyds Financial Services" sGBP 100000 \
--credential-id did:millicent:net:cash:lloyds-gbplicense-credential \
--from euregulator --chain-id cash -y --broadcast-mode block

echo "Create License VC for HSBC did (sGBP) (From EU Regulator)"
cashd tx regulator issue-license-credential \
did:millicent:net:cash:euregulator did:millicent:net:cash:hsbc \
MICAEMI IRL "HSBC Financial Services" sGBP 100000 \
--credential-id did:millicent:net:cash:hsbc-gbplicense-credential \
--from euregulator --chain-id cash -y --broadcast-mode block

echo "Create License VC for JP Morgan did (sUSD) (From US Regulator)"
cashd tx regulator issue-license-credential \
did:millicent:net:cash:usregulator did:millicent:net:cash:jpmorgan \
MICAEMI IRL "JPMorgan Financial Services" sUSD 100000 \
--credential-id did:millicent:net:cash:jpmorgan-dollarlicense-credential \
--from usregulator --chain-id cash -y --broadcast-mode block

echo "Querying verifiable credentials"
cashd query verifiablecredential verifiable-credentials --output json | jq
