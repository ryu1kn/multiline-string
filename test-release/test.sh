#!/bin/bash

set -euo pipefail

cd "$(dirname "$0")"

recreate_test_dir() { rm -rf "$1" && cp -r driver-project-template "$1"; }

test_dir=__driver-project-instance

recreate_test_dir "$test_dir"

cd "$test_dir"

npm pack ../..
npm install
npm install ./multiline-string-*.tgz

docker run --rm -v `pwd`:/app -w /app node:4 npm test
