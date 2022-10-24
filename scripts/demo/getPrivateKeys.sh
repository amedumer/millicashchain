#!/bin/bash
echo "y" | millicashd keys export alice --unsafe --unarmored-hex
echo "y" | millicashd keys export bob --unsafe --unarmored-hex