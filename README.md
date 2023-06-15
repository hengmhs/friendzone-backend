# Rocket Academy Coding Bootcamp: Project 3 Backend

Run `npm i` to install NPM packages, then `npm start` to start the Express server.

## Participant Automated Listing System (P.A.L.S)

For Project 3, we built software for [Friendzone](https://friendzone.sg/) to automatically clean mobile numbers, identify past participants and generate participant groupings for their events. 

## Collaborators
[Mark Chan](https://github.com/markcwy-ra) [Sean Heng](https://github.com/hengmhs)

## Database Setup

1. Create the database:
```
npx sequelize db:create
```

2. Migrate the database tables:
```
npx sequelize db:migrate
```

3. Seed the database:
```
npx sequelize db:seed:all
```

If you want to delete the database:
```
npx sequelize db:drop
```

## .env 

You also need to provide a .env file with the following configurations:
```
PORT=8000
DB_USERNAME="your db username"
DB_NAME="your db name"
DB_PASSWORD="db password"
DB_HOST=127.0.0.1
DB_DIALECT=postgres
ISSUER_BASE_URL="Auth0 issuer base url"
AUDIENCE="Auth0 audience"
```


