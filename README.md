# Online-Store ( Practice_2 )

**_Practice Lesson On How to Create APIs For Website_**

## Setup connect to database and run project on local

1.  **Step 1**: _Create database and connect to database_

    - **Create user**

        `CREATE USER developer WITH PASSWORD '1234'`;

    > Grant all database privileges to user in both database

        `GRANT ALL PRIVILEGES ON DATABASE online_store_dev to developer;`

        `GRANT ALL PRIVILEGES ON DATABASE online_store_test to developer;`

    - **Create database**

        `CREATE DATABASE online_store_dev;` for development environment

        `CREATE DATABASE online_store_test;` for test environment

    - **Connect to database**

        `\c online_store_dev`

## Run migration script

`npm run migration:up`

## Env file variables including port, database name, BE config, etc... app running

HOST = localhost
DATABASE = online_store_dev
TEST_DATABASE= online_store_test
PORT=3000
PG_USER = developer
PASSWORD = pass123
ENV=dev
PORT = 3000
SECRET_KEY= prayForYou

2. **Step 2**

### Install package and build project

Run command `npm i` first to install all packages required and `npm run build`
List packages required:

-   Express (typescript)
-   db-migrate for migrations
-   jsonwebtoken fworking with JWTs
-   jasmine for testing app
-   Pg for database
-   Cors

3. **Step 3**

### After build done run migration for databases

Run command `npm run migration:run` with .ENV file config

4. **Step 4**

### Run project

Run command `npm run start` or `npm run dev` running project on local

### Test code with jasmine package

Test source code
with command `npm run test-code` or `npm run test` for testing database

### Format

`npm run lint`
`npm run prettier-format`
