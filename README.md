

Backend 
step to run :-

    cd backend
    cp env.sample .env.local
    npm i
    export NODE_ENV=LOCAL
    npm run migration:up
    npm run seed:up
    node app.js

IN client side : 

    cd frontend
    npm i
    npm start

