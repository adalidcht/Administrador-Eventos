# Sistema de Administración de Eventos

## Requisitos

- Visual Studio 2022
- SQL Server
- .NET Framework 4.8

## Configuración

1. Clona el repositorio:


2. Abre el proyecto en Visual Studio 2022.

3. Configura la cadena de conexión en `Web.config`:
   <connectionStrings> <add name="AdministradorEventosDB" connectionString="Server=YOUR_SERVER_NAME;Database=AdministradorEventosDB;Trusted_Connection=True;" providerName="System.Data.SqlClient" /> </connectionStrings>

4. Ejecuta el script SQL para crear la base de datos y las tablas necesarias.

5. Compila y ejecuta el proyecto.
