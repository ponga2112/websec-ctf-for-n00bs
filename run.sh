#!/bin/bash

#
## TODO: Need a python wrapper script that will spawn both static server and api 
# 

# simple hacky (and temporary) startup routine
python3 -m http.server 8001 & python3 ./api/test.py


