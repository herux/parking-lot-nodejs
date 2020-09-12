# parking-lot-nodejs
Parking Lot using nodejs as backend 

# how to start 
- unpack the zip file
- go into the folder
- type 
  npm install
- create environment variable, example is for linux or mac
  export RATE_LIMIT_COUNT=10 # rate-limit hit counter
  export RATE_LIMIT_SECREQ=10 # rate-limit second max
  export PARK_COUNT=10 # the number of cars that can park 
  if you do not set environment variable, aplication will run using default value, which is 10 for all variable
- type
  node index.js
  
# list of endpoint 
  - endpoint: http://localhost:3030/apis/park_a_car
    method  : POST
    input mimetype: application/json --> ex: {"plateNumber":"123","carColor":"black"}
  - endpoint: http://localhost:3030/apis/unpark_car
    method  : POST
    input mimetype: application/json --> ex: {"plateNumber":"121"}
  - endpoint: http://localhost:3030/apis/park_info?plateNumber=121
    method  : GET
    
  
  
