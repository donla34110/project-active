


function update() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    const mini = hours >=12 ? "pm" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds} ${mini}`;
    document.getElementById("con-items").textContent = time;
}

update();
setInterval(update, 1000);
