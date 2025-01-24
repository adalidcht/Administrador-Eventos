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

-- Crear tabla Usuario
CREATE TABLE Usuario (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Correo VARCHAR(100) NOT NULL UNIQUE,
	Contraseña VARCHAR(255) NOT NULL,
    RolID INT,
    FOREIGN KEY (RolID) REFERENCES Rol(ID)
);

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
