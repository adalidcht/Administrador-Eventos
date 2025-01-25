document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const eventForm = document.getElementById('eventForm');
    if (eventForm) {
        const editEventId = localStorage.getItem('editEventId');
        if (editEventId) {
            loadEvent(editEventId);
        }
        eventForm.addEventListener('submit', handleEventFormSubmit);
    }
});

async function handleLogin(event) {
    event.preventDefault();
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

    login(correo, contraseña);
}

async function handleEventFormSubmit(event) {
    event.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const lugar = document.getElementById('lugar').value;
    const fecha = document.getElementById('fecha').value;
    const usuarioID = localStorage.getItem('userId'); // Obtener el ID del usuario desde localStorage

    if (!usuarioID) {
        alert('Debe iniciar sesión para guardar un evento.');
        return;
    }

    const eventId = localStorage.getItem('editEventId');
    if (eventId) {
        await updateEvent(eventId, { ID: eventId, Titulo: titulo, Descripcion: descripcion, Lugar: lugar, Fecha: fecha, UsuarioID: usuarioID });
        localStorage.removeItem('editEventId');
    } else {
        await createEvent({ Titulo: titulo, Descripcion: descripcion, Lugar: lugar, Fecha: fecha, UsuarioID: usuarioID });
    }

    window.location.href = 'events.html';
}

async function loadEvent(eventId) {
    const usuarioID = localStorage.getItem('userId'); // Obtener el ID del usuario desde localStorage

    if (!usuarioID) {
        alert('Debe iniciar sesión para editar un evento.');
        window.location.href = 'index.html'; // Redirigir a la página de inicio de sesión
        return;
    }

    try {
        const response = await fetch(`http://localhost:60177/api/Eventoes/${eventId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const event = await response.json();
        document.getElementById('titulo').value = event.Titulo;
        document.getElementById('descripcion').value = event.Descripcion;
        document.getElementById('lugar').value = event.Lugar;
        document.getElementById('fecha').value = new Date(event.Fecha).toISOString().slice(0, 16);
        document.getElementById('form-title').textContent = 'Editar Evento';
    } catch (error) {
        console.error('Error loading event:', error);
        alert('Error al cargar el evento. Por favor, inténtelo de nuevo más tarde.');
    }
}

async function createEvent(eventData) {
    try {
        const response = await fetch('http://localhost:60177/api/Eventoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        fetchEvents();
    } catch (error) {
        console.error('Error creating event:', error);
        alert('Error al crear el evento. Por favor, inténtelo de nuevo más tarde.');
    }
}

async function updateEvent(eventId, eventData) {
    try {
        const response = await fetch(`http://localhost:60177/api/Eventoes/${eventId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        fetchEvents();
    } catch (error) {
        console.error('Error updating event:', error);
        alert('Error al actualizar el evento. Por favor, inténtelo de nuevo más tarde.');
    }
}