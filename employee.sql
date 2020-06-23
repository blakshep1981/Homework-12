DROP DATABASE IF EXISTS employeeDB;

CREATE database employeeDB;

USE employeeDB;

CREATE TABLE employee (
  id int NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

SELECT * FROM employee;