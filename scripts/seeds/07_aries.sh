#!/bin/bash


# cashd tx did create-did alice --from alice --chain-id cash
# sleep 5

echo "Link ALICE did to the Aries agent at http://localhost:7090 having a service enpoint on http://localhost:7091"
cashd tx did link-aries-agent alice http://localhost:7090 http://localhost:7091 --from alice --chain-id cash
sleep 5
cashd query did dids --output json | jq


# cashd tx did create-did bob --from bob --chain-id cash
# sleep 5
echo "Link BOB did to the Aries agent at http://localhost:8090 having a service enpoint on http://localhost:8091"
cashd tx did link-aries-agent bob http://localhost:8090 http://localhost:8091 --from bob --chain-id cash
sleep 5
cashd query did dids --output json | jq
~

