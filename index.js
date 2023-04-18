const stopwatchList = document.querySelector('.stopwatch__list');

const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnCircle = document.getElementById('circle');
const btnReset = document.getElementById('reset');



const miutesTime = document.getElementById('miutes');
const secondsTime = document.getElementById('seconds');
const msTime = document.getElementById('ms');

let min = 0;
let sec = 0;
let ms = 0;

let intervalId;

function getZero(num) {
	if (num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
}


function startStopwatch() {
	intervalId = setInterval(() => {
		ms++;
		if (ms === 100) {
			ms=0;
			sec++;
		} else if (sec === 60) {
			min++;
		}
		miutesTime.textContent = getZero(min);
		secondsTime.textContent = getZero(sec);
		msTime.textContent = getZero(ms);
	}, 10);
}

function resetStopwatch() {
	min = 0;
	sec = 0;
	ms = 0;
	miutesTime.textContent = getZero(0);
	secondsTime.textContent = getZero(0);
	msTime.textContent = getZero(0);
	clearInterval(intervalId);
	stopwatchList.innerHTML = '';
}

function stopStopwatch() {
	clearInterval(intervalId);
}

function circleStopwatch() {
	const elementLi = document.createElement('li');
	elementLi.classList.add('stopwatch__item');
	const a = `${getZero(min)} : ${getZero(sec)} : ${getZero(ms)} `;
	elementLi.textContent = a;
	stopwatchList.append(elementLi);
}


btnStart.addEventListener('click', startStopwatch);
btnReset.addEventListener('click', resetStopwatch);
btnStop.addEventListener('click', stopStopwatch);
btnCircle.addEventListener('click', circleStopwatch);







