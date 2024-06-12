
const addButton = document.getElementById('addButton');
const viewButton = document.getElementById('viewButton');
const addEventForm = document.getElementById('addEventForm');
const saveEventButton = document.getElementById('saveEventButton');
const eventsContainer = document.getElementById('eventsContainer');
const eventDate = document.getElementById('eventDate');
const eventName = document.getElementById('eventName');
const unSaveEventButton = document.getElementById('unSaveEventButton');
const tgInfo = window.Telegram.WebApp
let events = [];

function ShowList() {
    eventsContainer.innerHTML = '';
    if(events.length <= 0 || undefined) {
        const eventElement = document.createElement('div');
        if(tgInfo.initDataUnsafe?.user?.username) {
            eventElement.innerHTML = `<div>Пока события не добавлено. Нажмите "Добавить событие"</div>`
        }else{
            eventElement.innerHTML = `<div>Вы не авторизованы</div>`
        }
        eventsContainer.appendChild(eventElement);
    }else{
    events.forEach(event => { 
        const eventElement = document.createElement('div');
        eventElement.id = event.id;
        console.log(event)
        eventElement.innerHTML = `
            <div id="event-item">
                <div class="remindeText">${event.remindeText}</div>
                <div class="remindeDate">${event.remindeDate}</div>
                <button id="deleteEventButton" value="${event.id}" >Удалить</button>
                </div>
                `;
        eventsContainer.appendChild(eventElement);
    });
}}
document.addEventListener("click", function(event) {
    if(event.target && event.target.id === "deleteEventButton") {
        const eventId = event.target.getAttribute('value');
        console.log(eventId);
        deleteEvent(eventId)
    }
});
//  <button onclick="deleteEvent('${event.id}')">Удалить</button>
const getData = async () => {
    try {
        await fetch(`http://localhost:3000/api/reminders/getbyuser?chatId=${tgInfo.initDataUnsafe?.user?.id}`) // prod for get user reminders
        // await fetch(`http://localhost:3000/api/reminders/getall`) // local for get all reminders
        .then(response => response.json())
        .then(data => {console.log(data); events = data}).then(()=> ShowList())       
    } catch (error) {
        console.log(error)
    }
}
viewButton.addEventListener('click', () => {
    if(tgInfo.initDataUnsafe?.user?.username) {
        getData()
    }else{
        eventsContainer.innerHTML = '';
        const eventElement = document.createElement('div');
        eventElement.innerHTML = `<div>Данные не загружены</div>`
        eventsContainer.appendChild(eventElement);
    }
})
getData()

const createDate = async (date) => {
    let response = await fetch('http://localhost:3000/api/reminders/create', {
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
unSaveEventButton.addEventListener('click', () => {
    addEventForm.classList.toggle('hidden');
    eventDate.value = '';
    eventName.value = '';
});

async function deleteEvent(eventId) { 
    // возможность отменить удаление (таймер 5 сек)
    if (eventId) {
    const eventElement = document.getElementById(eventId);
    eventElement.style.display = 'none'; // скрываем элемент

    setTimeout(() => {
        eventElement.remove(); // удаляем элемент из DOM через 10 секунд
    }, 2000);
    console.log(eventId)
    const info = {
        id: eventId
    }
    try {
        let response = await fetch(`http://localhost:3000/api/reminders/delete`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(info)
          });
       } catch (error) {
        
       }
    }
}
function editEvent(eventId, eventDate, eventName) {
    eventDateInput.value = eventDate;
    eventNameInput.value = eventName;

    saveEventButton.onclick = function() {
        // Обновляем данные события
        addEventForm.classList.add('hidden');
    }
    addEventForm.classList.remove('hidden');
}
saveEventButton.addEventListener('click', () => {
    const newEvent = {
        chatId: tgInfo.initDataUnsafe?.user?.id || "not auth",
        userId: tgInfo.initDataUnsafe?.user?.username,
        date: eventDate.value,
        eventName: eventName.value,
        another_info: JSON.stringify(tgInfo),
    };
    if(tgInfo.initDataUnsafe?.user?.id && tgInfo.initDataUnsafe?.user?.username) {
        try {
            createDate(newEvent) 
        } catch (error) {
           console.log(error) 
        }
    }else{
        console.log("ошибка")
    }
    
    events.push(newEvent);
    addEventForm.classList.add('hidden');
    eventDate.value = '';
    eventName.value = '';
});

{/* <button onclick="editEvent('${event.id}', '${event.date}', '${event.name}')">Редактировать</button> */}
