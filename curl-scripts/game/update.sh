
# ID=2 TOKEN=tokengoeshere TEXT=textgoeshere sh curl-scripts/game/update.sh

curl "https://wdi-library-api.herokuapp.com/games/${ID}" \
  --include --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{ "game": { "cell": { "index": "'"${INDEX}"'", "value": "'"${VALUE}"'" },"over": "'"${OVER}"'" } }'
