#!/bin/sh
rm -rf src
npx @hey-api/openapi-ts -i ./openapi.gen.yaml -o ./src -c @hey-api/client-fetch
