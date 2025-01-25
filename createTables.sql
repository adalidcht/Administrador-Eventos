-- Crear base de datos
CREATE DATABASE AdministradorEventosdb;
GO

-- Usar la base de datos
USE AdministradorEventosdb;
GO

-- Crear tabla Rol
CREATE TABLE Rol (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL
);
GO

-- Crear tabla Usuario
CREATE TABLE Usuario (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Correo VARCHAR(100) NOT NULL UNIQUE,
    Contraseña VARCHAR(255) NOT NULL,
    RolID INT,
    FOREIGN KEY (RolID) REFERENCES Rol(ID)
);
GO

-- Crear tabla Evento
CREATE TABLE Evento (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Titulo VARCHAR(100) NOT NULL,
    Descripcion TEXT,
    Lugar VARCHAR(100) NOT NULL,
    Fecha DATETIME NOT NULL,
    UsuarioID INT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuario(ID)
);
GO

-- Insertar ejemplos en la tabla Rol
INSERT INTO Rol (Nombre) VALUES ('Administrador');
INSERT INTO Rol (Nombre) VALUES ('Organizador');
INSERT INTO Rol (Nombre) VALUES ('Asistente');
INSERT INTO Rol (Nombre) VALUES ('Invitado');
INSERT INTO Rol (Nombre) VALUES ('Superusuario');
GO

-- Insertar ejemplos en la tabla Usuario
INSERT INTO Usuario (Nombre, Correo, Contraseña, RolID) VALUES 
('Juan Pérez', 'juan.perez@email.com', 'password123', 1),
('María López', 'maria.lopez@email.com', 'mypass456', 2),
('Carlos Sánchez', 'carlos.sanchez@email.com', 'secure789', 3),
('Ana Fernández', 'ana.fernandez@email.com', 'admin1234', 1),
('Luis Gómez', 'luis.gomez@email.com', 'organizer123', 2);
GO

-- Insertar ejemplos en la tabla Evento
INSERT INTO Evento (Titulo, Descripcion, Lugar, Fecha, UsuarioID) VALUES 
('Concierto de Verano', 'Un concierto al aire libre con bandas locales.', 'Parque Central', '2025-03-15 18:00:00', 2),
('Conferencia de Tecnología', 'Un evento para discutir las últimas tendencias en tecnología.', 'Centro de Convenciones', '2025-04-20 09:00:00', 1),
('Taller de Fotografía', 'Aprende técnicas básicas y avanzadas de fotografía.', 'Estudio Creativo', '2025-05-10 15:00:00', 3),
('Clase de Cocina Internacional', 'Una clase práctica sobre cocina internacional.', 'Academia de Cocina Gourmet', '2025-06-05 10:00:00', 4),
('Torneo de Ajedrez', 'Compite con los mejores jugadores de la ciudad.', 'Club de Ajedrez Elite', '2025-07-25 14:00:00', 5);
GO

