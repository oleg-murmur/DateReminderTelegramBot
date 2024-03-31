
const addButton = document.getElementById('addButton');
const viewButton = document.getElementById('viewButton');
const addEventForm = document.getElementById('addEventForm');
const saveEventButton = document.getElementById('saveEventButton');
const eventsContainer = document.getElementById('eventsContainer');
const eventDate = document.getElementById('eventDate');
const eventName = document.getElementById('eventName');

let events = [];

const getData = async () => {
    try {
        await fetch('http://localhost:3000/data')
        .then(response => response.json())
        .then(data => {console.log(data); events = data.data})        
    } catch (error) {
        console.log(error)
    }

    // console.log(data)
}
getData()
const createDate = async (date) => {
    let response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(date)
      });
}


addButton.addEventListener('click', () => {
    addEventForm.classList.toggle('hidden');
});



function deleteEvent(eventId) {
    const eventElement = document.getElementById(eventId);
    if (eventElement) {
        events.splice(eventId - 1, 1);
        eventElement.remove();
    }
}
function editEvent(eventId, eventDate, eventName) {
    eventDateInput.value = eventDate;
    eventNameInput.value = eventName;
    
    // Подписываемся на событие сохранения отредактированного события
    saveEventButton.onclick = function() {
        // Обновляем данные события
        // Ваша логика по обновлению данных события
        
        // Закрываем форму после сохранения
        addEventForm.classList.add('hidden');
    }
    addEventForm.classList.remove('hidden');
}
saveEventButton.addEventListener('click', () => {
    const newEvent = {
        date: eventDate.value,
        name: eventName.value,
        id: Date.now()
    };
    createDate(newEvent)
    events.push(newEvent);
    addEventForm.classList.add('hidden');
    eventDate.value = '';
    eventName.value = '';
});
viewButton.onclick = function() {
    eventsContainer.innerHTML = ''; // Очищаем контейнер перед заполнением

    // Отображаем все события
    events.forEach(event => { 
        const eventElement = document.createElement('div');
        eventElement.id = event.id;
        console.log(event)
        eventElement.innerHTML = `
            <p><strong>${event.date}</strong> - ${event.name}</p>
            <button onclick="deleteEvent('${event.id}')">Удалить</button>
            <button onclick="editEvent('${event.id}', '${event.date}', '${event.name}')">Редактировать</button>
        `;
        eventsContainer.appendChild(eventElement);
    });
}