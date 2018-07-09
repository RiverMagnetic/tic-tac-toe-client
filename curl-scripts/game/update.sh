
# ID= TOKEN= INDEX=1 VALUE="x" OVER=false sh curl-scripts/game/update.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{ "game": { "cell": { "index": "'"${INDEX}"'", "value": "'"${VALUE}"'" },"over": "'"${OVER}"'" } }'
  
  # Written differently here to visualize what is needed to make this work in the rest of my code:
  # --data '{ 
  #     "game": { 
  #       "cell": { 
  #         "index": "'"${INDEX}"'", 
  #         "value": "'"${VALUE}"'" 
  #       },
  #       "over": "'"${OVER}"'" 
  #     }
  #   }'

