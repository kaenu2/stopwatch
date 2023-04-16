"use strict";

const deadLine = "2023-12-31";

const title = document.querySelector('h3');

title.textContent = `${deadLine} dl`;

const getTime = (endtime) => {
	const total = Date.parse(endtime) - Date.parse(new Date());
	const days = Math.floor(total / (1000 * 60 * 60 * 24));
	const hourse = Math.floor(total / ( 1000 * 60 * 60) %  24);
	const minutes = Math.floor(total / (1000 * 60) % 60);
	const seconds = Math.floor((total / 1000) % 60);
	return {
		total,
		days,
		hourse,
		minutes,
		seconds,
	};
};

function getZero(num) {
	if (num < 10) {
		return `0${num}`;
	}
	return num;
}


const setClock = (endtime) => {
	const days = document.getElementById('days');
	const hourse = document.getElementById('hourse');
	const minutes = document.getElementById('min');
	const seconds = document.getElementById('sec');
	const timerId = setInterval(updateClock, 1000);

	updateClock();

	function updateClock() {
		const t = getTime(endtime);
		days.innerHTML = getZero(t.days);
		hourse.innerHTML = getZero(t.hourse);
		minutes.innerHTML = getZero(t.minutes);
		seconds.innerHTML = getZero(t.seconds);
		if (t.total <= 0) {
			clearInterval(timerId);
		}
	}
};

setClock(deadLine);




// console.log(getTime(deadLine));
