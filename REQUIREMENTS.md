# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

-   Index :http://localhost:3000/api/product

-   Show (args: product id): http://localhost:3000/api/product/:id

-   Create (args: Product)[token required]: http://localhost:3000/api/product -> body :{"name":"product_1", "price":"150$", "category":"sale"}

-   [OPTIONAL] Top 5 most popular products
-   [OPTIONAL] Products by category (args: product category)

#### Users

-   Index [token required]: http://localhost:3000/api/user

-   Show (args: id)[token required]: http://localhost:3000/api/user/:id

-   Create (args: User)[token required]: http://localhost:3000/api/user -> body:{"firstName":"Nguyen", "lastName":"Tran", "password":"123"}

#### Orders

-   Current Order by user (args: user id)[token required]: http://localhost:3000/api/order/:id

-   [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

#### Product

-   id
-   name
-   price
-   [OPTIONAL] category

#### User

-   id
-   firstName
-   lastName
-   password

#### Orders

-   id
-   id of each product in the order
-   quantity of each product in the order
-   user_id
-   status of order (active or complete)

## Data Types

#### products

|`Columns`|`type`|id|`SERIAL`| name | `varchar(50)`| price | `integer` | category | `varchar(50)`

#### users

|`Columns`|`type`|id|`SERIAL`| first_name|`varchar(100)` | last_name |`varchar(100)` | pass |`varchar`

#### orders

|`Columns`|`type`|id|`SERIAL`| product_id|`integer` | quantity_product |`integer` | user_id |`integer` | order_status |`varchar(100)`

#### order_product

|`Columns`|`type`|order_id|`integer`| product_id|`integer` | quantity |`integer`
