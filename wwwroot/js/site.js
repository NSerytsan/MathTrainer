const timer_el = document.getElementById("timer");
const start_btn_el = document.getElementById("start-btn");

let seconds = 0;
let interval = null;

start_btn_el.addEventListener('click', start_timer);

function timer() {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;
   
    timer_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start_timer() {
    if (interval) {
        return;
    }
    interval = setInterval(timer, 1000);
}