# TOKEN=tokengoeshere OLD_PASSWORD=pikachu NEW_PASSWORD=raichu sh curl-scripts/auth/change-password.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/change-password" \
  --include --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{ "passwords": { "old": "'"${OLD_PASSWORD}"'", "new": "'"${NEW_PASSWORD}"'" }}'

echo