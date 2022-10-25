#!/bin/bash
echo "Private key of Alice"
echo "y" | millicashd keys export alice --unsafe --unarmored-hex
echo "Private key of Bob"
echo "y" | millicashd keys export bob --unsafe --unarmored-hex