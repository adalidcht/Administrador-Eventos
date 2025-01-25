# Sistema de Administración de Eventos

## Tecnologías

- **Backend**: ASP.NET Framework 4.8, C#
- **Base de Datos**: SQL Server
- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Herramientas**: Visual Studio 2022, Node.js, npm

## Descripción

El Sistema de Administración de Eventos es una aplicación web diseñada para gestionar eventos de manera eficiente. La aplicación está dividida en dos partes principales: el backend y el frontend.

- **Backend**: Implementado en ASP.NET Framework 4.8, el backend actúa como un servidor web que maneja la lógica del servidor, la gestión de la base de datos y proporciona una API RESTful para interactuar con el frontend. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre las entidades de la base de datos.
- **Frontend**: Desarrollado con HTML, CSS, JavaScript y Bootstrap, el frontend proporciona una interfaz de usuario interactiva y fácil de usar para gestionar eventos. Consume la API proporcionada por el backend para realizar las operaciones necesarias.

### Funcionalidades

1. **Inicio de Sesión**: Los usuarios pueden iniciar sesión proporcionando su nombre, correo, contraseña y rol.
2. **Administración de Eventos**: Los usuarios pueden ver la lista de eventos, agregar nuevos eventos, editar eventos existentes y eliminar eventos.
3. **Autenticación Básica**: Implementa una autenticación básica mediante verificación de usuario con email y contraseña.


## Requisitos

- Visual Studio 2022
- SQL Server
- .NET Framework 4.8
- Node.js (para el frontend)
- npm (para el frontend)

## Configuración del Backend

1. **Clona el repositorio**:

   ```bash
   git clone git@github.com:adalidcht/Administrador-Eventos.git
   ```

2. **Abre el proyecto en Visual Studio 2022**.

3. **Configura la cadena de conexión en `Web.config`**:

   Abre el archivo `Web.config` y configura la cadena de conexión para tu servidor SQL Server:

   ```xml
   <connectionStrings>
       <add name="AdministradorEventosDB" connectionString="Server=YOUR_SERVER_NAME;Database=AdministradorEventosDB;Trusted_Connection=True;" providerName="System.Data.SqlClient" />
   </connectionStrings>
   ```

4. **Ejecuta el script SQL para crear la base de datos y las tablas necesarias**:

   En SQL Server Management Studio, abre y ejecuta el script SQL proporcionado en el repositorio para crear la base de datos y las tablas necesarias.

## Configuración del Frontend

1. **Navega al directorio del frontend**:

   ```bash
   cd administracion-eventos/frontend
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Configura las URLs de la API**:

   Asegúrate de que las URLs de la API en los archivos JavaScript del frontend apunten a `http://localhost:60177` o la URL donde esté corriendo tu backend.

4. **Inicia el servidor del frontend**:

   ```bash
   npm start
   ```

# Uso del Sistema

1. **Inicio de Sesión**:

   - Abre el navegador y navega a `http://localhost:3000` (o la URL donde esté corriendo tu frontend).
   - Completa el formulario de inicio de sesión con tu nombre, correo, contraseña y rol.
   - Haz clic en "Iniciar sesión".
   - Solo pueden editarse Eventos y agregar nuevos si se inicia sesión.

2. **Administración de Eventos**:

   - Después de iniciar sesión, serás redirigido a la página de eventos.
   - Aquí puedes ver la lista de eventos, agregar nuevos eventos, editar eventos existentes y eliminar eventos.

3. **Agregar un Evento**:

   - Haz clic en "Agregar Evento".
   - Completa el formulario con los detalles del evento.
   - Haz clic en "Guardar".

4. **Editar un Evento**:

   - En la lista de eventos, haz clic en "Editar" junto al evento que deseas modificar.
   - Actualiza los detalles del evento en el formulario.
   - Haz clic en "Guardar".

5. **Eliminar un Evento**:

   - En la lista de eventos, haz clic en "Eliminar" junto al evento que deseas eliminar.

## Notas Adicionales

- Asegúrate de que el backend y el frontend estén corriendo simultáneamente para que el sistema funcione correctamente.
- Tambien puede usarse la extensión de Visual Studio Code `LiveServer` para probar funcionalidades

## Problemas Comunes

- **Error de conexión a la base de datos**: Verifica que la cadena de conexión en `Web.config` esté configurada correctamente y que el servidor SQL Server esté en funcionamiento.
- **Error al cargar eventos**: Verifica que el backend esté corriendo y que la base de datos esté configurada correctamente.
