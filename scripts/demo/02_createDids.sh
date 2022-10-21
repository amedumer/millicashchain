echo "Create a DID doc for the EU Regulator (by the EU Regulator account)"
millicashd tx did create-did euregulator \
 --from euregulator \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:millicent:net:millicash:euregulator --output json | jq

echo "Create a DID doc for the US Regulator (by the US Regulator account)"
millicashd tx did create-did usregulator \
 --from usregulator \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:millicent:net:millicash:usregulator --output json | jq

echo "Create a DID doc for Barclays (by Barclays)"
millicashd tx did create-did barclays --from barclays \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:millicent:net:millicash:barclays --output json | jq

echo "Create a DID doc for Lloyds (by Lloyds)"
millicashd tx did create-did lloyds --from lloyds \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:millicent:net:millicash:lloyds --output json | jq

echo "Create a DID doc for HSBC (by HSBC)"
millicashd tx did create-did hsbc --from hsbc \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:millicent:net:millicash:hsbc --output json | jq

echo "Create a DID doc for JPMorgan (by JPMorgan)"
millicashd tx did create-did jpmorgan --from jpmorgan \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:millicent:net:millicash:jpmorgan --output json | jq

echo "Create a DID doc for Alice (by Alice)"
millicashd tx did create-did alice --from alice \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:millicent:net:millicash:alice --output json | jq

echo "Create a DID doc for Bob (by Bob)"
millicashd tx did create-did bob --from bob \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:millicent:net:millicash:bob --output json | jq

echo "Create a DID doc for Charlie (by Charlie)"
millicashd tx did create-did charlie --from charlie \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:millicent:net:millicash:charlie --output json | jq

echo "Create a DID doc for Dora (by Dora)"
millicashd tx did create-did dora --from dora \
 --chain-id millicash -y --broadcast-mode block

millicashd query did did did:millicent:net:millicash:dora --output json | jq