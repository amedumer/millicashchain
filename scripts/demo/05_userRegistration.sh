#!/bin/bash


echo "Barclays registers user Alice"
cashd tx issuer issue-user-credential \
did:millicent:net:cash:barclays did:millicent:net:cash:alice zkp_secret 1000 1000 1000 \
--credential-id did:millicent:cred:barclays-user-alice \
--from barclays --chain-id cash -y --broadcast-mode block

echo "Lloyds registers user Bob"
cashd tx issuer issue-user-credential \
did:millicent:net:cash:lloyds did:millicent:net:cash:bob zkp_secret 1000 1000 1000 \
--credential-id did:millicent:cred:lloyds-user-bob \
--from lloyds --chain-id cash -y --broadcast-mode block

echo "HSBC registers user Charlie"
cashd tx issuer issue-user-credential \
did:millicent:net:cash:lloyds did:millicent:net:cash:charlie zkp_secret 1000 1000 1000 \
--credential-id did:millicent:cred:hsbc-user-charlie \
--from lloyds --chain-id cash -y --broadcast-mode block

echo "JPMorgan registers user Dora"
cashd tx issuer issue-user-credential \
did:millicent:net:cash:jpmorgan did:millicent:net:cash:dora zkp_secret 1000 1000 1000 \
--credential-id did:millicent:cred:jpmorgan-user-dora \
--from jpmorgan --chain-id cash -y --broadcast-mode block


