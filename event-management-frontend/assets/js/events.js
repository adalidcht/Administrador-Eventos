const apiUrlEvents = 'http://localhost:60177/api/Eventoes';
const apiUrlUsers = 'http://localhost:60177/api/Usuarios';

async function fetchEvents() {
    try {
        const eventsResponse = await fetch(apiUrlEvents);
        if (!eventsResponse.ok) {
            throw new Error('Network response was not ok');
        }

        const events = await eventsResponse.json();
        displayEvents(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        alert('Failed to fetch events. Please try again later.');
    }
}

async function fetchUserName(userId) {
    try {
        const response = await fetch(`${apiUrlUsers}/${userId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const user = await response.json();
        return user.nombre;
    } catch (error) {
        console.error('Error fetching user:', error);
        return 'Unknown';
    }
}

async function displayEvents(events) {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';

    for (const event of events) {
        const userName = await fetchUserName(event.usuarioID);
        const eventRow = document.createElement('tr');
        eventRow.classList.add('table-light');
        eventRow.innerHTML = `
            <td>${event.id}</td>
            <td>${event.titulo}</td>
            <td>${event.descripcion}</td>
            <td>${event.lugar}</td>
            <td>${new Date(event.fecha).toLocaleString()}</td>
            <td>${event.usuarioID}</td>
            <td>${userName}</td>
            <td>
                <button class="btn btn-warning btn-sm w-100 mb-1" onclick="editEvent(${event.id})">Edit</button>
                <button class="btn btn-danger btn-sm w-100" onclick="deleteEvent(${event.id})">Delete</button>
            </td>
        `;
        eventList.appendChild(eventRow);
    }
}

async function deleteEvent(eventId) {
    try {
        const response = await fetch(`${apiUrlEvents}/${eventId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        fetchEvents();
    } catch (error) {
        console.error('Error deleting event:', error);
        alert('Failed to delete event. Please try again later.');
    }
}

function editEvent(eventId) {
    localStorage.setItem('editEventId', eventId);
    window.location.href = 'event-form.html';
}

document.addEventListener('DOMContentLoaded', fetchEvents);