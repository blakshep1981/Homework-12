DROP DATABASE IF EXISTS departmentDB;

CREATE database departmentDB;

USE departmentDB;

CREATE TABLE department (
  id int NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM department;