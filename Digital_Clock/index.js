function updateClock(){

    let curDate = new Date();

    let hours = curDate.getHours().toString().padStart(2, 0);
    let meridiam = hours>12 ? "PM" : "AM";
    if(hours>12){
        hours %=12;
    }
    let minutes = curDate.getMinutes().toString().padStart(2, 0);
    let secs = curDate.getSeconds().toString().padStart(2, 0);

    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${secs} ${meridiam}`;
}

updateClock();
setInterval(updateClock, 1000);