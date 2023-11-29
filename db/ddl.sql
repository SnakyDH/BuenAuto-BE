CREATE DATABASE buenauto;

CREATE SEQUENCE marca_id START 1;
CREATE TABLE marca(
	id_marca VARCHAR(10) DEFAULT 'M' || 	nextval('marca_id')::TEXT,
	nombre varchar(45)
);

ALTER TABLE marca ADD CONSTRAINT marca_pk PRIMARY KEY(id_marca);
ALTER TABLE marca ALTER COLUMN id_marca SET NOT NULL;

CREATE TABLE linea(
	id_linea int,
	id_marca varchar(10),
	nombre varchar(45)
);

ALTER TABLE linea ADD CONSTRAINT linea_pk PRIMARY KEY(id_linea);
ALTER TABLE linea ADD CONSTRAINT linea_fk FOREIGN KEY(id_marca) REFERENCES marca(id_marca);
ALTER TABLE linea ALTER COLUMN id_linea SET NOT NULL;

CREATE SEQUENCE tipo_id START 1;
CREATE TABLE tipo(
	id_tipo VARCHAR(10) DEFAULT 'T' || 	nextval('tipo_id')::TEXT,
	nombre varchar(45)
);
ALTER TABLE tipo ADD CONSTRAINT tipo_pk PRIMARY KEY(id_tipo);
ALTER TABLE tipo ALTER COLUMN id_tipo SET NOT NULL;

CREATE SEQUENCE color_id START 1;
CREATE TABLE color(
	id_color VARCHAR(10) DEFAULT 'C' || 	nextval('color_id')::TEXT,
	nombre varchar(45)
);
ALTER TABLE color ADD CONSTRAINT color_pk PRIMARY KEY(id_color);
ALTER TABLE color ALTER COLUMN id_color SET NOT NULL;

CREATE SEQUENCE automotor_id START 1;
CREATE TABLE automotor(
	id_automotor VARCHAR(10) DEFAULT 'A' || 	nextval('marca_id')::TEXT,
	id_linea int,
	id_color varchar(10),
	id_tipo varchar(10),
	modelo int,
	no_chasis varchar(45),
	placa varchar(6),
	valor float
);

ALTER TABLE automotor ADD CONSTRAINT automotor_pk PRIMARY KEY(id_automotor);
ALTER TABLE automotor ADD CONSTRAINT automotor_fkl FOREIGN KEY(id_linea) REFERENCES linea(id_linea);
ALTER TABLE automotor ADD CONSTRAINT automotor_fkc FOREIGN KEY(id_color) REFERENCES color(id_color);
ALTER TABLE automotor ADD CONSTRAINT automotor_fkt FOREIGN KEY(id_tipo) REFERENCES tipo(id_tipo);
ALTER TABLE automotor ALTER COLUMN id_automotor SET NOT NULL;

CREATE SEQUENCE sucursal_id START 10;

CREATE TABLE sucursal(
	id_sucursal VARCHAR(10) DEFAULT 'S' || 	nextval('sucursal_id')::TEXT,
	nombre varchar(45),
	ciudad varchar(45)
);
ALTER TABLE sucursal ADD CONSTRAINT sucursal_pk PRIMARY KEY(id_sucursal);
ALTER TABLE sucursal ALTER COLUMN id_sucursal SET NOT NULL;


CREATE TABLE cargo(
	id_cargo int, 
	nombre varchar(45)
);
ALTER TABLE cargo ADD CONSTRAINT cargo_pk PRIMARY KEY(id_cargo);
ALTER TABLE cargo ALTER COLUMN id_cargo SET NOT NULL;


CREATE SEQUENCE empleado_cod START 100;
CREATE TABLE empleado(
	codigo VARCHAR(10) DEFAULT 'E' || 	nextval('empleado_cod')::TEXT,
	id varchar(10),
	contraseña varchar(45),
	id_cargo int,
	fecha_nacimiento date,
	fecha_ingreso date,
	id_sucursal varchar(10), 
	salario float
);

ALTER TABLE empleado ADD CONSTRAINT empleado_pk PRIMARY KEY(codigo,id);
ALTER TABLE empleado ADD CONSTRAINT empleado_fkc FOREIGN KEY(id_cargo) REFERENCES cargo(id_cargo);
ALTER TABLE empleado ADD CONSTRAINT empleado_fks FOREIGN KEY(id_sucursal) REFERENCES sucursal(id_sucursal);
ALTER TABLE empleado ALTER COLUMN codigo SET NOT NULL;
ALTER TABLE empleado ALTER COLUMN id SET NOT NULL;

CREATE TABLE telefono_empleado(
	codigo_e varchar(10),
	id varchar(11),
	telefono varchar(11)
);

ALTER TABLE telefono_empleado ADD CONSTRAINT telefonoe_pk PRIMARY KEY(codigo_e,telefono);
ALTER TABLE telefono_empleado ADD CONSTRAINT telefonoe_fk FOREIGN KEY(codigo_e,id) REFERENCES empleado(codigo,id);
ALTER TABLE telefono_empleado ALTER COLUMN codigo_e SET NOT NULL;
ALTER TABLE telefono_empleado ALTER COLUMN telefono SET NOT NULL;

CREATE TABLE tipo_transaccion(
	id int,
	nombre varchar(45)
);
ALTER TABLE tipo_transaccion ADD CONSTRAINT tipotransaccion_pk PRIMARY KEY(id);
ALTER TABLE tipo_transaccion ALTER COLUMN id SET NOT NULL;

CREATE TABLE cliente(
	id_c varchar(11),
	nombre varchar(45),
	ciudad varchar(45),
	fecha_ingreso date,
	id_sucursal varchar(10)
);
ALTER TABLE cliente ADD CONSTRAINT cliente_pk PRIMARY KEY(id_c);
ALTER TABLE cliente ADD CONSTRAINT cliente_fk FOREIGN KEY(id_sucursal) REFERENCES sucursal(id_sucursal);
ALTER TABLE cliente ALTER COLUMN id_c SET NOT NULL;

CREATE TABLE telefono_cliente(
	id_cliente varchar(11),
	telefono varchar(11)
);
ALTER TABLE telefono_cliente ADD CONSTRAINT telefonoc_pk PRIMARY KEY(id_cliente,telefono);
ALTER TABLE telefono_cliente ADD CONSTRAINT telefonoc_fk FOREIGN KEY(id_cliente) REFERENCES cliente(id_c);
ALTER TABLE telefono_cliente ALTER COLUMN id_cliente SET NOT NULL;
ALTER TABLE telefono_cliente ALTER COLUMN telefono SET NOT NULL;


CREATE SEQUENCE transaccion_id START 1000;
CREATE TABLE transaccion(
	id VARCHAR(10) DEFAULT 'TR' || 	nextval('transaccion_id')::TEXT,
	fecha date,
	id_tipo int,
	valor float,
	id_cliente varchar(11),
	valorT float,
	id_sucursal varchar(10)
);
ALTER TABLE transaccion ADD CONSTRAINT transaccion_pk PRIMARY KEY(id);
ALTER TABLE transaccion ADD CONSTRAINT transaccion_fkt FOREIGN KEY(id_tipo) REFERENCES tipo_transaccion(id);
ALTER TABLE transaccion ADD CONSTRAINT transaccion_fkc FOREIGN KEY(id_cliente) REFERENCES cliente(id_c);
ALTER TABLE transaccion ADD CONSTRAINT transaccion_fks FOREIGN KEY(id_sucursal) REFERENCES sucursal(id_sucursal);
ALTER TABLE transaccion ALTER COLUMN id SET NOT NULL;

CREATE TABLE detalles_transaccion(
	id_automotor varchar(10),
	id_transaccion varchar(10)
);
ALTER TABLE detalles_transaccion ADD CONSTRAINT detallest_fka FOREIGN KEY(id_automotor) REFERENCES automotor(id_automotor);
ALTER TABLE detalles_transaccion ADD CONSTRAINT detallest_fkt FOREIGN KEY(id_transaccion) REFERENCES transaccion(id);
ALTER TABLE detalles_transaccion ADD CONSTRAINT detallest_pk PRIMARY KEY(id_automotor,id_transaccion);
ALTER TABLE detalles_transaccion ALTER COLUMN id_automotor SET NOT NULL;
ALTER TABLE detalles_transaccion ALTER COLUMN id_transaccion SET NOT NULL;


