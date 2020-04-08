#!/usr/bin/bash

(sleep 2; chromium "http://localhost:8000") &

python -m http.server
