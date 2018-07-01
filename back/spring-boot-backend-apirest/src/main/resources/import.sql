INSERT INTO clientes (nombre,apellido,email,create_at) VALUES('Andrés','Guzmán','profesor@gmd.com.pe','2018-01-01');
INSERT INTO clientes (nombre,apellido,email,create_at) VALUES('Mr John','Doe','jhon@gmd.com.pe','2018-01-02');
INSERT INTO clientes (nombre,apellido,email,create_at) VALUES('Linus','Torvalds','linus@gmd.com.pe','2018-01-03');
INSERT INTO clientes (nombre,apellido,email,create_at) VALUES('Rasmus','Lerdorf','rasmus@gmd.com.pe','2018-01-04');
INSERT INTO clientes (nombre,apellido,email,create_at) VALUES('Erich','Gamma','erich@gmd.com.pe','2018-01-05');
INSERT INTO clientes (nombre,apellido,email,create_at) VALUES('Richard','Helm','helm@gmd.com.pe','2018-01-06');
INSERT INTO clientes (nombre,apellido,email,create_at) VALUES('Ralph','Jhonson','ralph@gmd.com.pe','2018-01-07');
INSERT INTO clientes (nombre,apellido,email,create_at) VALUES('John','Vlissides','vlissides@gmd.com.pe','2018-01-08');
INSERT INTO clientes (nombre,apellido,email,create_at) VALUES('Dr. James','Gosling','gosling@gmd.com.pe','2018-01-09');
INSERT INTO clientes (nombre,apellido,email,create_at) VALUES('Magma','Lee','magma@gmd.com.pe','2018-01-10');
INSERT INTO clientes (nombre,apellido,email,create_at) VALUES('Tornado','Roe','troe@gmd.com.pe','2018-01-11');
INSERT INTO clientes (nombre,apellido,email,create_at) VALUES('Jade','Dore','jdore@gmd.com.pe','2018-01-12');

INSERT INTO users (username, password, enabled) VALUES('andres', '$2a$10$bNfJhEdQx22Z3shr92cH.eEZeuiFh1EU2e6kzV6CkTL92TbKF.ViK', 1);
INSERT INTO users (username, password, enabled) VALUES('admin', '$2a$10$dqcB8DAj6uxXfI2X3wuUfOWymzJA8CI41p.b2vQqiJAo0.lbARACu', 1);

INSERT INTO authorities (user_id, authority) VALUES (1,'ROLE_USER');
INSERT INTO authorities (user_id, authority) VALUES (2,'ROLE_USER');
INSERT INTO authorities (user_id, authority) VALUES (2,'ROLE_ADMIN');