#!/bin/sh
rm -rf lib src
npx @hey-api/openapi-ts@0.58.0 -i ./openapi.gen.yaml -o ./src -c @hey-api/client-fetch

