# temporal-tables-demo

## Purpose
Simple example project for an API using a database with temporal tables, this project exposes a CRUD API which have the particularity to use a temporal database, allowing to keep an history of all modifications made

## Setup project
In order to setup the project to work you need [Node.js](https://nodejs.org/en), [Yarn](https://yarnpkg.com/fr/) and a [postgres server](https://www.postgresql.org/)

Once you have all of these installed, you can install project's dependencies by running the command `yarn` on the root of the repository

Then, you'll have to setup a database, fill the config/config.json file with the data you want to use (database name / port / pass etc...). You can now create your database : 
```bash
yarn db:create
```
run the migrations : 
```bash
yarn db:migrate
```
And then you're ready to go ! Just start the server by typing :
```bash
yarn start
```

This will launch a server listening on port 3000 with these routes inside :
- /v1/products POST
- /v1/products GET
- /v1/products/:id GET
- /v1/products/:id PATCH
- /v1/products/:id DELETE

Products are resources with only an id::UUID and a name::string property.


