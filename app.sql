DROP DATABASE IF EXISTS appDB;

CREATE database appDB;

USE appDB;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE info (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  department_id INT,
  manager_id INT,
  salary DECIMAL,
  PRIMARY KEY (id)
);


SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM info;

INSERT INTO info (first_name, last_name, role_id, department_id, manager_id, salary)
VALUES ('Dick', 'Grayson', 1, 1, 1, 45000)
