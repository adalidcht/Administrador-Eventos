# Sistema de Administración de Eventos

## Requisitos

- Visual Studio 2022
- SQL Server
- .NET Framework 4.8
- Node.js (para el frontend)
- npm (para el frontend)

## Configuración del Backend

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/administracion-eventos.git
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

5. **Compila y ejecuta el proyecto**:

   En Visual Studio, compila y ejecuta el proyecto. Asegúrate de que el servidor esté funcionando correctamente en `http://localhost:60177`.

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

   Esto debería iniciar un servidor de desarrollo y abrir el frontend en tu navegador.

## Uso del Sistema

1. **Inicio de Sesión**:

   - Abre el navegador y navega a `http://localhost:3000` (o la URL donde esté corriendo tu frontend).
   - Completa el formulario de inicio de sesión con tu nombre, correo, contraseña y rol.
   - Haz clic en "Iniciar sesión".

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
   - Confirma la eliminación en el cuadro de diálogo.

## Notas Adicionales

- Asegúrate de que el backend y el frontend estén corriendo simultáneamente para que el sistema funcione correctamente.
- Puedes ver y manipular el contenido de `localStorage` desde la consola del navegador para verificar la información del usuario y otros datos almacenados.

## Problemas Comunes

- **Error de conexión a la base de datos**: Verifica que la cadena de conexión en `Web.config` esté configurada correctamente y que el servidor SQL Server esté en funcionamiento.
- **Error al iniciar sesión**: Asegúrate de que el backend esté corriendo y que la URL de la API en el frontend esté configurada correctamente.
- **Error al cargar eventos**: Verifica que el backend esté corriendo y que la base de datos esté configurada correctamente.

Si encuentras algún problema, revisa los mensajes de error en la consola del navegador y en la consola de Visual Studio para obtener más detalles.

---

¡Gracias por usar el Sistema de Administración de Eventos! Si tienes alguna pregunta o necesitas ayuda, no dudes en abrir un issue en el repositorio.
```

Este README proporciona una guía completa para configurar y usar tanto el backend como el frontend del sistema de administración de eventos. Asegúrate de ajustar las URLs y los nombres de los archivos según sea necesario para que coincidan con tu configuración específica.
Este README proporciona una guía completa para configurar y usar tanto el backend como el frontend del sistema de administración de eventos. Asegúrate de ajustar las URLs y los nombres de los archivos según sea necesario para que coincidan con tu configuración específica.

adalidcht: damelo completo el archivo

GitHub Copilot: Claro, aquí tienes el archivo 

README.md

 completo con las instrucciones detalladas para configurar y usar tanto el backend como el frontend del sistema de administración de eventos:

```markdown
# Sistema de Administración de Eventos

## Requisitos

- Visual Studio 2022
- SQL Server
- .NET Framework 4.8
- Node.js (para el frontend)
- npm (para el frontend)

## Configuración del Backend

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/administracion-eventos.git
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

5. **Compila y ejecuta el proyecto**:

   En Visual Studio, compila y ejecuta el proyecto. Asegúrate de que el servidor esté funcionando correctamente en `http://localhost:60177`.

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

   Esto debería iniciar un servidor de desarrollo y abrir el frontend en tu navegador.

## Uso del Sistema

1. **Inicio de Sesión**:

   - Abre el navegador y navega a `http://localhost:3000` (o la URL donde esté corriendo tu frontend).
   - Completa el formulario de inicio de sesión con tu nombre, correo, contraseña y rol.
   - Haz clic en "Iniciar sesión".

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
   - Confirma la eliminación en el cuadro de diálogo.

## Notas Adicionales

- Asegúrate de que el backend y el frontend estén corriendo simultáneamente para que el sistema funcione correctamente.
- Puedes ver y manipular el contenido de `localStorage` desde la consola del navegador para verificar la información del usuario y otros datos almacenados.

## Problemas Comunes

- **Error de conexión a la base de datos**: Verifica que la cadena de conexión en `Web.config` esté configurada correctamente y que el servidor SQL Server esté en funcionamiento.
- **Error al iniciar sesión**: Asegúrate de que el backend esté corriendo y que la URL de la API en el frontend esté configurada correctamente.
- **Error al cargar eventos**: Verifica que el backend esté corriendo y que la base de datos esté configurada correctamente.

Si encuentras algún problema, revisa los mensajes de error en la consola del navegador y en la consola de Visual Studio para obtener más detalles.

