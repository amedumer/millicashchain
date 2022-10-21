echo "Create a DID doc for the EU Regulator (by the EU Regulator account)"
cashd tx did create-did euregulator \
 --from euregulator \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:millicent:net:cash:euregulator --output json | jq

echo "Create a DID doc for the US Regulator (by the US Regulator account)"
cashd tx did create-did usregulator \
 --from usregulator \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:millicent:net:cash:usregulator --output json | jq

echo "Create a DID doc for Barclays (by Barclays)"
cashd tx did create-did barclays --from barclays \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:millicent:net:cash:barclays --output json | jq

echo "Create a DID doc for Lloyds (by Lloyds)"
cashd tx did create-did lloyds --from lloyds \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:millicent:net:cash:lloyds --output json | jq

echo "Create a DID doc for HSBC (by HSBC)"
cashd tx did create-did hsbc --from hsbc \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:millicent:net:cash:hsbc --output json | jq

echo "Create a DID doc for JPMorgan (by JPMorgan)"
cashd tx did create-did jpmorgan --from jpmorgan \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:millicent:net:cash:jpmorgan --output json | jq

echo "Create a DID doc for Alice (by Alice)"
cashd tx did create-did alice --from alice \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:millicent:net:cash:alice --output json | jq

echo "Create a DID doc for Bob (by Bob)"
cashd tx did create-did bob --from bob \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:millicent:net:cash:bob --output json | jq

echo "Create a DID doc for Charlie (by Charlie)"
cashd tx did create-did charlie --from charlie \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:millicent:net:cash:charlie --output json | jq

echo "Create a DID doc for Dora (by Dora)"
cashd tx did create-did dora --from dora \
 --chain-id cash -y --broadcast-mode block

cashd query did did did:millicent:net:cash:dora --output json | jq