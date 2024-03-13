let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

//displaying the current time automatically

function stopwatch(){
    seconds++;
    if (seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
              minutes = 0;
              hours++;
         }
    }
    let h = hours < 0 ? "0" + hours : hours;
    let m = minutes < 0 ? "0" + minutes : minutes;
    let s = seconds < 0 ? "0" + seconds : seconds;
    displayTime.innerHTML = h +":"+ m +":"+ s;
    
}

// on clicking start the stopwatch starts counting

function watchStart(){
if(timer!== null)
{
    clearInterval(timer);
}
timer = setInterval(stopwatch,1000);

}

// on clicking stop the stopwatch stops counting

function watchStop(){
    clearInterval(timer);
}

// on clicking reset the stopwatch resets counting

function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00"
}