CREATE DATABASE dbcolors;

USE dbcolors;

CREATE TABLE color (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  hex varchar(50) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

DESCRIBE color;

INSERT INTO color(name, country) VALUES ('Blanco', '#ffffff'), ('Negro', '#000000');

select * from color;