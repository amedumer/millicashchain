#!/bin/bash

# Barclays sends Alice 10 sGBP
cashd tx bank send \
 $(cashd keys show barclays -a) $(cashd keys show alice -a) 10sGBP \
 --from barclays \
 --chain-id cash -y --broadcast-mode block

# Lloyds sends Bob 25 sGBP
cashd tx bank send \
 $(cashd keys show lloyds -a) $(cashd keys show bob -a) 25sGBP \
 --from lloyds \
 --chain-id cash -y --broadcast-mode block

 # HSBC sends Charlie 35 sGBP
cashd tx bank send \
 $(cashd keys show hsbc -a) $(cashd keys show charlie -a) 35sGBP \
 --from charlie \
 --chain-id cash -y --broadcast-mode block

# Charlie sends Alice 5sGBP
 cashd tx bank send \
 $(cashd keys show charlie -a) $(cashd keys show alice -a) 5sGBP \
 --from charlie \
 --chain-id cash -y --broadcast-mode block

# Bob sends Alice 10sGBP
 cashd tx bank send \
 $(cashd keys show bob -a) $(cashd keys show alice -a) 10sGBP \
 --from bob \
 --chain-id cash -y --broadcast-mode block