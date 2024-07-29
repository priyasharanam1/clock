const button = document.getElementById("stop-btn");

function showTime(){
     const currentTime = new Date();
     const time = `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`;
     document.getElementById("time").innerText = time;
}

showTime();

let interval = setInterval(showTime, 1000);

button.addEventListener("click", ()=>{
    clearInterval(interval);
});

const alarm = document.getElementById("alarm");
const message = document.getElementById("message");

let i = 10;
function stopTime(){
    alarm.innerHTML = i--;
}
stopTime();

let timer = setInterval(stopTime,1000);

if(document.getElementById("alarm").innerText === 0){
    alarm.addEventListener("")
}