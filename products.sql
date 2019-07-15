-- Dropping DB as it exists--
DROP DATABASE IF EXISTS bamazon_db;

-- Creating the DB again --
CREATE DATABASE bamazon_db;

-- Targeting bamazon database --
USE bamazon_db;

-- Creating the products table --
CREATE TABLE products (
	item_id INTEGER(30) NOT NULL,
    product_name VARCHAR (30) NOT NULL,
    department_name VARCHAR (30) NOT NULL,
    price INTEGER(30) NOT NULL,
    stock_quantity INTEGER(100) NOT NULL
);