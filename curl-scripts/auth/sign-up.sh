# EMAIL=pikachu PASSWORD=pikachu PASSWORD_CONFIRMATION=pikachu
# sh curl-scripts/auth/sign-up.sh
# production: 'https://aqueous-atoll-85096.herokuapp.com'
# development: 'https://tic-tac-toe-wdi.herokuapp.com/'

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-up" \
  --include --request POST \
  --header "Content-Type: application/json" \
  --data '{ "credentials": { "email": "'"${EMAIL}"'", "password": "'"${PASSWORD}"'", "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'" }}'


echo