# EMAIL=qq@q.com PASSWORD=q sh curl-scripts/auth/sign-in.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
  --include --request POST \
  --header "Content-Type: application/json" \
  --data '{ "credentials": { "email": "'"${EMAIL}"'", "password": "'"${PASSWORD}"'" }}'

echo