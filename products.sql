-- Dropping DB as it exists--
DROP DATABASE IF EXISTS bamazon_db;

-- Creating the DB again --
CREATE DATABASE bamazon_db;

-- Targeting bamazon database --
USE bamazon_db;

-- Creating the products table --
CREATE TABLE products (
	item_id INTEGER(30) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR (30) NOT NULL,
    department_name VARCHAR (30) NOT NULL,
    price DECIMAL NOT NULL,
    stock_quantity INTEGER(30) NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('ASUS Laptop', 'Computers', 199.99, 20),
('Lamp', 'Home & Business', 100.99, 23), 
('Blender', 'Home & Kitchen', 20.99, 25),
('Bose Speaker', 'Electronics', 59.99, 25),
('iPad', 'Electronics', 249.99, 25),
('National Treasure', 'Movies & TV', 1.99, 25),
('First Act Guitar', 'Musical Instruments', 89.99, 25),
('Breath of the Wild', 'Video Games', 59.99, 25),
('Velvet pillow', 'Bed & Bath', 10.99, 25),
('Nice big couch', 'Home & Kitchen', 2.99, 25);

SELECT * FROM products;