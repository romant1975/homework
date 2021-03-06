var currentTime = 0,
    count = 0,
    doc = document,
    startStopChange = 'Start',
    pauseTimeDisplay = 0,
    BEGIN_TIME = 0,
    on_display,
    mls =0;

function startOn() { 
    date = new Date();
    BEGIN_TIME = date.getTime() - pauseTimeDisplay; 
    on_display = setInterval("this.view_display()", 10); 
    startStopChange = ( startStopChange == 'Start' ? 'Pause' : 'Start'); 
    doc.getElementById('startPause').setAttribute("value", startStopChange); 
};

function startOff() {
    pauseTimeDisplay = currentTime - BEGIN_TIME;
    clearInterval(on_display);
    startStopChange = ( startStopChange == 'Start' ? 'Pause' : 'Start');
    doc.getElementById('startPause').setAttribute("value", startStopChange);
};

function onOff() {
    if (startStopChange == 'Start') {
        return startOn();
    } else {
        return startOff();
    }
};

function clearСlock() {
    pauseTimeDisplay = 0;
    clearInterval(on_display);
    doc.getElementById('display').value = "00:00:00.";
    doc.getElementById('displayMls').value = "000";
    doc.getElementById('startPause').setAttribute("value", startStopChange);

};
function view_display() {
	cDate = new Date ();
    currentTime = cDate.getTime();
    count = currentTime - BEGIN_TIME;
    var t = parseInt(count),
    milliseconds = Math.floor((t % 1000)) + 000,
    seconds = Math.floor((t / 1000) % 60),
    minutes = Math.floor((t / 1000 / 60) % 60),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    milliseconds = (milliseconds < 10 ? '00' + milliseconds : milliseconds);
    milliseconds = (milliseconds < 100 ? '0' + milliseconds : milliseconds);
    seconds = (seconds < 10 ? '0' + seconds : seconds);
    minutes = (minutes < 10 ? '0' + minutes : minutes);
    hours = (hours < 10 ? '0' + hours : hours);
    var timerId = hours + ":" + minutes + ":" + seconds + ":";
    doc.getElementById('display').value = timerId;
    doc.getElementById('displayMls').value =  milliseconds;
    mls = milliseconds;
};

doc.getElementById('startPause').addEventListener("click", onOff);
doc.getElementById('reset').addEventListener("click", clearСlock);