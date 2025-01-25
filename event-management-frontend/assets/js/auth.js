document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

async function handleLogin(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const rolNombre = document.getElementById('rol').value;

    const userData = {
        Nombre: nombre,
        Correo: correo,
        Contraseña: contraseña,
        RolNombre: rolNombre
    };

    try {
        const response = await fetch('http://localhost:60177/api/Usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const user = await response.json();
        localStorage.setItem('userName', user.nombre);
        localStorage.setItem('userId', user.$id);
        window.location.href = 'events.html';
    } catch (error) {
        console.error('Error during login:', error);
        alert(`Error al iniciar sesión. Por favor, inténtelo de nuevo más tarde. Detalles: ${error.message}`);
    }
}