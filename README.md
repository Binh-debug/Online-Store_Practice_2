# Online-Store ( Practice_2 )

**_Practice Lesson On How to Create APIs For Website_**

## Setup and run project on local

1. **Step 1**: _Install Packages_

    Run command: `npm i` to install all packages required

    List packages required:

    - Express (typescript)
    - db-migrate for migrations
    - jsonwebtoken for working with JWT
    - jasmine for testing app
    - Pg for database
    - Cors

2. **Step 2**: _Create database and connect to database_

    - **Create user**

        `CREATE USER developer WITH PASSWORD '1234'`;

        > Grant all database privileges to user in both database

        `GRANT ALL PRIVILEGES ON DATABASE online_store_dev to developer;`

        `GRANT ALL PRIVILEGES ON DATABASE online_store_test to developer;`

    - **Create database**

        `CREATE DATABASE online_store_dev;` for development environment

        `CREATE DATABASE online_store_test;` for test environment

        `ALTER DATABASE online_store_test OWNER TO tester;` fix bug schema public

    - **Connect to database**

        `\c online_store_dev`

3. **Step 3**: _Setting environment variables_

    - _HOST = localhost_
    - _DATABASE = online_store_dev_
    - _TEST_DATABASE= online_store_test_
    - _PORT=3000_
    - _PG_USER = developer_
    - _PASSWORD = pass123_
    - _ENV=dev_
    - _PORT = 3000_
    - _SECRET_KEY= prayForYou_

4. **Step 4**: _Run migration script_

    `npm run migration:up`

5. **Step 5**: _Start Project_

    `npm run start` or `npm run dev`

## After build done run migration for databases

Run command: `npm run migration:run` with .ENV file config

## Testing with jasmine

Run command: `npm run test-code` or `npm run test` for testing

## Format Code

-   `npm run lint`

-   `npm run prettier-format`
