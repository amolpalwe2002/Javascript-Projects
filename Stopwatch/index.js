
const display = document.getElementById("stopwatch");

let timer = null;
let startTime =0;
let elapseTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapseTime;

        timer = setInterval(update, 100);
        isRunning = true;
    }
    
}
function stop(){

    if(isRunning){
        clearInterval(timer);
        elapseTime = Date.now() - startTime;
        isRunning = false;
    }

}
function reset(){
    clearInterval(timer);
    startTime =0;
    elapseTime = 0;
    isRunning = false;

    display.innerHTML = `00:00:00:00`;

}

function update(){

    // const curTime = Date.now();

    elapseTime = Date.now() - startTime;

    let hours = Math.floor(elapseTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    let minutes = Math.floor((elapseTime / (1000 * 60) )%60).toString().padStart(2, 0);
    let secs = Math.floor((elapseTime / (1000) )%60).toString().padStart(2, 0);
    let miliSecs = Math.floor((elapseTime % (1000) )/10).toString().padStart(2, 0);

    display.innerHTML = `${hours}:${minutes}:${secs}:${miliSecs}`;


}