#!/bin/bash


echo "Barclays registers user Alice"
millicashd tx issuer issue-user-credential \
did:millicent:net:millicash:barclays did:millicent:net:millicash:alice zkp_secret 1000 1000 1000 \
--credential-id did:millicent:cred:barclays-user-alice \
--from barclays --chain-id millicash -y --broadcast-mode block

echo "Lloyds registers user Bob"
millicashd tx issuer issue-user-credential \
did:millicent:net:millicash:lloyds did:millicent:net:millicash:bob zkp_secret 1000 1000 1000 \
--credential-id did:millicent:cred:lloyds-user-bob \
--from lloyds --chain-id millicash -y --broadcast-mode block

echo "HSBC registers user Charlie"
millicashd tx issuer issue-user-credential \
did:millicent:net:millicash:lloyds did:millicent:net:millicash:charlie zkp_secret 1000 1000 1000 \
--credential-id did:millicent:cred:hsbc-user-charlie \
--from lloyds --chain-id millicash -y --broadcast-mode block

echo "JPMorgan registers user Dora"
millicashd tx issuer issue-user-credential \
did:millicent:net:millicash:jpmorgan did:millicent:net:millicash:dora zkp_secret 1000 1000 1000 \
--credential-id did:millicent:cred:jpmorgan-user-dora \
--from jpmorgan --chain-id millicash -y --broadcast-mode block


