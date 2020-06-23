DROP DATABASE IF EXISTS roleDB;

CREATE database roleDB;

USE roleDB;

CREATE TABLE role (
  id int NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);


SELECT * FROM role;