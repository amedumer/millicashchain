#!/bin/bash


# millicashd tx did create-did alice --from alice --chain-id millicash
# sleep 5

echo "Link ALICE did to the Aries agent at http://localhost:7090 having a service enpoint on http://localhost:7091"
millicashd tx did link-aries-agent alice http://localhost:7090 http://localhost:7091 --from alice --chain-id millicash
sleep 5
millicashd query did dids --output json | jq


# millicashd tx did create-did bob --from bob --chain-id millicash
# sleep 5
echo "Link BOB did to the Aries agent at http://localhost:8090 having a service enpoint on http://localhost:8091"
millicashd tx did link-aries-agent bob http://localhost:8090 http://localhost:8091 --from bob --chain-id millicash
sleep 5
millicashd query did dids --output json | jq
~

