(()=>{"use strict";const t=document.getElementById("addButton"),e=document.getElementById("viewButton"),n=document.getElementById("addEventForm"),o=document.getElementById("saveEventButton"),d=document.getElementById("eventsContainer"),a=document.getElementById("eventDate"),c=document.getElementById("eventName");let l=[];(async()=>{try{await fetch("http://localhost:3000/data").then((t=>t.json())).then((t=>{console.log(t),l=t.data}))}catch(t){console.log(t)}})(),t.addEventListener("click",(()=>{n.classList.toggle("hidden")})),o.addEventListener("click",(()=>{const t={date:a.value,name:c.value,id:Date.now()};(async t=>{await fetch("http://localhost:3000",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)})})(t),l.push(t),n.classList.add("hidden"),a.value="",c.value=""})),e.onclick=function(){d.innerHTML="",l.forEach((t=>{const e=document.createElement("div");e.id=t.id,console.log(t),e.innerHTML=`\n            <p><strong>${t.date}</strong> - ${t.name}</p>\n            <button onclick="deleteEvent('${t.id}')">Удалить</button>\n            <button onclick="editEvent('${t.id}', '${t.date}', '${t.name}')">Редактировать</button>\n        `,d.appendChild(e)}))}})();