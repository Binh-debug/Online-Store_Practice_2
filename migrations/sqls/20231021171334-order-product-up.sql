CREATE TABLE order_product (
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER  REFERENCES products(id),
    quantity INTEGER ,
    PRIMARY KEY (order_id, product_id)
);