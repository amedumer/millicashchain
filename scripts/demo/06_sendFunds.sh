#!/bin/bash

# Barclays sends Alice 10 sGBP
millicashd tx bank send \
 $(millicashd keys show barclays -a) $(millicashd keys show alice -a) 10sGBP \
 --from barclays \
 --chain-id millicash -y --broadcast-mode block

# Lloyds sends Bob 25 sGBP
millicashd tx bank send \
 $(millicashd keys show lloyds -a) $(millicashd keys show bob -a) 25sGBP \
 --from lloyds \
 --chain-id millicash -y --broadcast-mode block

 # HSBC sends Charlie 35 sGBP
millicashd tx bank send \
 $(millicashd keys show hsbc -a) $(millicashd keys show charlie -a) 35sGBP \
 --from charlie \
 --chain-id millicash -y --broadcast-mode block

# Charlie sends Alice 5sGBP
 millicashd tx bank send \
 $(millicashd keys show charlie -a) $(millicashd keys show alice -a) 5sGBP \
 --from charlie \
 --chain-id millicash -y --broadcast-mode block

# Bob sends Alice 10sGBP
 millicashd tx bank send \
 $(millicashd keys show bob -a) $(millicashd keys show alice -a) 10sGBP \
 --from bob \
 --chain-id millicash -y --broadcast-mode block