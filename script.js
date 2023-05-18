// Timer variables
let timerInterval;
let minutes = 0;
let seconds = 0;
let deciseconds = 0;

// Timer display element
const timerDisplay = document.querySelector('.timer');

// Real time element
const realTimeDisplay = document.getElementById('realTime');

// Button elements
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Timer functions
function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 100);
        startButton.textContent = "Pause";
    } else {
        pauseTimer();
        startButton.textContent = "Resume";
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    minutes = 0;
    seconds = 0;
    deciseconds = 0;
    updateTimer();
    startButton.textContent = "Start";
}

function updateTimer() {
    deciseconds++;
    if (deciseconds === 10) {
        seconds++;
        deciseconds = 0;
    }
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    const formattedTime = formatTime(minutes) + ':' + formatTime(seconds) + ':' + formatTime(deciseconds);
    timerDisplay.textContent = formattedTime;

    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const mins = currentTime.getMinutes().toString().padStart(2, '0');
    const secs = currentTime.getSeconds().toString().padStart(2, '0');
    realTimeDisplay.textContent = `${hours}:${mins}:${secs}`;
}

function formatTime(time) {
    return time.toString().padStart(2, '0');
}
