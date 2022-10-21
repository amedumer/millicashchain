#!/bin/bash
myArray=(\"$(millicashd keys show euregulator -a)\",\"$(millicashd keys show usregulator -a)\")
echo $myArray