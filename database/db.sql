CREATE TABLE ESPECIE ( NOMBRE_ESPECIE VARCHAR(20) PRIMARY KEY );

CREATE TABLE RAZA (
    NOMBRE_RAZA VARCHAR(50) PRIMARY KEY,
    NOMBRE_ESPECIE VARCHAR(20),
    FOREIGN KEY (NOMBRE_ESPECIE) REFERENCES ESPECIE (NOMBRE_ESPECIE) ON DELETE CASCADE
);

INSERT INTO ESPECIE VALUES ("Perro"), ("Gato"), ("Lagarto");

INSERT INTO
    RAZA
VALUES ("Labrador Retriever", "Perro"),
    ("Pastor Alemán", "Perro"),
    ("Bulldog Francés", "Perro"),
    ("Golden Retriever", "Perro"),
    ("Beagle", "Perro");

INSERT INTO
    RAZA
VALUES ("Persa", "Gato"),
    ("Siamés", "Gato"),
    ("Maine Coon", "Gato"),
    ("Bengala", "Gato"),
    ("Ragdoll", "Gato");

INSERT INTO
    RAZA
VALUES ("Gecko Leopardo", "Lagarto"),
    ("Dragón Barbudo", "Lagarto"),
    ("Anolis Verde", "Lagarto"),
    ("Iguana Verde", "Lagarto"),
    ("Gecko Crestado", "Lagarto");

CREATE TABLE TAMANO (
    ID_TAMANO int(10) NOT NULL AUTO_INCREMENT,
    TAMANO varchar(100),
    PESO_MINIMO int(10),
    PESO_MAXIMO int(10),
    NOMBRE_ESPECIE varchar(10) NOT NULL,
    PRIMARY KEY (ID_TAMANO)
);

ALTER TABLE TAMANO
ADD CONSTRAINT tamaño FOREIGN KEY (NOMBRE_ESPECIE) REFERENCES ESPECIE (NOMBRE_ESPECIE);

INSERT INTO
    TAMANO
VALUES (
        NULL,
        'Pequeño',
        3,
        10,
        'Perro'
    ),
    (
        NULL,
        'Mediano',
        10,
        25,
        'Perro'
    ),
    (
        NULL,
        'Grande',
        25,
        50,
        'Perro'
    ),
    (
        NULL,
        'Pequeño',
        50,
        100,
        'Perro'
    );

INSERT INTO
    TAMANO
VALUES (NULL, 'Pequeño', 0, 4, 'Gato'),
    (NULL, 'Mediano', 4, 7, 'Gato'),
    (NULL, 'Grande', 7, 50, 'Gato');

INSERT INTO
    TAMANO
VALUES (
        NULL,
        'Pequeño',
        0,
        10,
        'Lagarto'
    ),
    (
        NULL,
        'Mediano',
        10,
        50,
        'Lagarto'
    ),
    (
        NULL,
        'Grande',
        50,
        200,
        'Lagarto'
    );

CREATE TABLE TIPO_CUARTO (
    ID_TIPO_CUARTO int(10) NOT NULL AUTO_INCREMENT,
    NOMBRE_CUARTO varchar(50),
    PRECIO_CUARTO int(10) NOT NULL,
    ID_TAMANO int(10) NOT NULL,
    PRIMARY KEY (ID_TIPO_CUARTO)
);

ALTER TABLE TIPO_CUARTO
ADD CONSTRAINT `puede hospedar` FOREIGN KEY (ID_TAMANO) REFERENCES TAMANO (ID_TAMANO);

INSERT INTO
    TIPO_CUARTO
VALUES (NULL, 'Modern Nature', 250, 1),
    (NULL, 'Modern Nature', 250, 2),
    (NULL, 'Modern Nature', 250, 3),
    (NULL, 'Modern Nature', 250, 4),
    (
        NULL,
        'Classic Nostalgia',
        300,
        1
    ),
    (
        NULL,
        'Classic Nostalgia',
        300,
        2
    ),
    (
        NULL,
        'Classic Nostalgia',
        300,
        3
    ),
    (
        NULL,
        'Classic Nostalgia',
        300,
        4
    ),
    (NULL, 'Ensueño', 200, 1),
    (NULL, 'Ensueño', 200, 2),
    (NULL, 'Ensueño', 200, 3),
    (NULL, 'Ensueño', 200, 4),
    (NULL, 'Feline Heaven', 90, 5),
    (NULL, 'Feline Heaven', 90, 6),
    (NULL, 'Feline Heaven', 90, 7),
    (
        NULL,
        'Purrfect Retreat',
        100,
        5
    ),
    (
        NULL,
        'Purrfect Retreat',
        100,
        6
    ),
    (
        NULL,
        'Purrfect Retreat',
        100,
        7
    ),
    (NULL, 'Feline Oasis', 90, 5),
    (NULL, 'Feline Oasis', 90, 6),
    (NULL, 'Feline Oasis', 90, 7),
    (
        NULL,
        'Scaly Sanctuary',
        90,
        11
    ),
    (
        NULL,
        'Scaly Sanctuary',
        90,
        12
    ),
    (
        NULL,
        'Scaly Sanctuary',
        90,
        13
    ),
    (
        NULL,
        'Lizard Lagoon',
        110,
        11
    ),
    (
        NULL,
        'Lizard Lagoon',
        110,
        12
    ),
    (
        NULL,
        'Lizard Lagoon',
        110,
        13
    ),
    (
        NULL,
        'Exotic Habitat Villa',
        100,
        11
    ),
    (
        NULL,
        'Exotic Habitat Villa',
        100,
        12
    ),
    (
        NULL,
        'Exotic Habitat Villa',
        100,
        13
    );

CREATE TABLE SUCURSAL (
    ID_SUCURSAL int(10) NOT NULL AUTO_INCREMENT,
    NOMBRE_SUCURSAL varchar(255) UNIQUE,
    CALLE_DIRECCION varchar(255),
    NUMERO_DIRECCION varchar(255),
    NOMBRE_COLONIA_DIRECCION varchar(255),
    NOMBRE_MUNICIPIO_DIRECCION varchar(255),
    CODIGO_POSTAL_DIRECCION int(5),
    ENTIDAD_DIRECCION varchar(255),
    PRIMARY KEY (ID_SUCURSAL)
);

INSERT INTO
    SUCURSAL (
        NOMBRE_SUCURSAL,
        CALLE_DIRECCION,
        NUMERO_DIRECCION,
        NOMBRE_COLONIA_DIRECCION,
        NOMBRE_MUNICIPIO_DIRECCION,
        CODIGO_POSTAL_DIRECCION,
        ENTIDAD_DIRECCION
    )
VALUES (
        'Ciudad de México',
        'Revolución',
        1775,
        'San Ángel',
        'Álvaro Obregón',
        01000,
        'Ciudad de México'
    ),
    (
        'Monterrey',
        'Alejandro de Humboldt',
        1115,
        'Mirador',
        'Monterrey',
        01000,
        'Nuevo León'
    ),
    (
        'Mérida',
        'Calle 70',
        526,
        'Centro',
        'Mérida',
        97000,
        'Yucatán'
    );

CREATE TABLE CUARTO (
    ID_CUARTO int(10) NOT NULL AUTO_INCREMENT,
    NUMERO_CUARTO int(10),
    ID_TIPO_CUARTO int(10) NOT NULL,
    ID_SUCURSAL int(10) NOT NULL,
    PRIMARY KEY (ID_CUARTO)
);

ALTER TABLE CUARTO
ADD CONSTRAINT tiene FOREIGN KEY (ID_SUCURSAL) REFERENCES SUCURSAL (ID_SUCURSAL);

ALTER TABLE CUARTO
ADD CONSTRAINT tipo FOREIGN KEY (ID_TIPO_CUARTO) REFERENCES TIPO_CUARTO (ID_TIPO_CUARTO);

INSERT INTO
    CUARTO (
        NUMERO_CUARTO,
        ID_TIPO_CUARTO,
        ID_SUCURSAL
    )
VALUES (100, 31, 1),
    (101, 32, 1),
    (102, 33, 1),
    (103, 34, 1),
    (200, 35, 1),
    (201, 36, 1),
    (202, 37, 1),
    (203, 38, 1),
    (300, 39, 1),
    (301, 40, 1),
    (302, 41, 1),
    (303, 42, 1),
    (100, 43, 2),
    (101, 44, 2),
    (102, 45, 2),
    (200, 46, 2),
    (201, 47, 2),
    (202, 48, 2),
    (300, 49, 2),
    (301, 50, 2),
    (302, 51, 2),
    (100, 52, 3),
    (101, 53, 3),
    (102, 54, 3),
    (200, 55, 3),
    (201, 56, 3),
    (202, 57, 3),
    (300, 58, 3),
    (301, 59, 3),
    (302, 60, 3);

CREATE TABLE TIPO_SERVICIO (
    ID_SERVICIO int(10) NOT NULL AUTO_INCREMENT,
    NOMBRE_SERVICIO varchar(50),
    COSTO_BASE int(10),
    COSTO_EXTRA int(10),
    PRIMARY KEY (ID_SERVICIO)
);

INSERT INTO
    TIPO_SERVICIO (
        NOMBRE_SERVICIO,
        COSTO_BASE,
        COSTO_EXTRA
    )
VALUES ('Masaje relajante', 30, 20),
    ('Masaje terapéutico', 50, 20),
    ('Masaje de lujo', 70, 30),
    ('Baño y cepillado', 30, 20),
    ('Corte de pelo', 40, 30),
    ('Servicio completo', 60, 40),
    ('Aromaterapia básica', 25, 15),
    (
        'Aromaterapia y masaje',
        40,
        20
    ),
    (
        'Aromaterapia de lujo',
        60,
        30
    );

CREATE TABLE MASCOTA (
    ID_MASCOTA int(10) NOT NULL AUTO_INCREMENT,
    NOMBRE_MASCOTA varchar(50),
    FECHA_NACIMIENTO date,
    CRUAC int(10),
    NOMBRE_RAZA varchar(10) NOT NULL,
    ID_TAMANO int(10),
    FOTOGRAFIA varbinary(2000),
    CONDICIONES_CONDUCTUALES longtext,
    CONDICIONES_FISICAS longtext,
    PRIMARY KEY (ID_MASCOTA)
);

ALTER TABLE MASCOTA
ADD CONSTRAINT raza FOREIGN KEY (NOMBRE_RAZA) REFERENCES RAZA (NOMBRE_RAZA);

ALTER TABLE MASCOTA
ADD CONSTRAINT tamano FOREIGN KEY (ID_TAMANO) REFERENCES TAMANO (ID_TAMANO);

CREATE TABLE CLIENTE (
  ID_CLIENTE       int(10) NOT NULL AUTO_INCREMENT, 
  CURP             varchar(18), 
  NOMBRES_CLIENTES varchar(50), 
  PRIMER_APELLIDO  varchar(90), 
  SEGUNDO_APELLIDO varchar(90), 
  PRIMARY KEY (ID_CLIENTE));

CREATE TABLE RESERVACION (
    ID_RESERVACION int(10) NOT NULL AUTO_INCREMENT,
    ID_CLIENTE int(10) NOT NULL,
    ID_MASCOTA int(10) NOT NULL,
    PRIMARY KEY (ID_RESERVACION)
);

ALTER TABLE RESERVACION
ADD CONSTRAINT asociado FOREIGN KEY (ID_CLIENTE) REFERENCES CLIENTE (ID_CLIENTE);

ALTER TABLE RESERVACION
ADD CONSTRAINT asocia FOREIGN KEY (ID_MASCOTA) REFERENCES MASCOTA (ID_MASCOTA);