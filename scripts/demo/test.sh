#!/bin/bash
myArray=(\"$(cashd keys show euregulator -a)\",\"$(cashd keys show usregulator -a)\")
echo $myArray