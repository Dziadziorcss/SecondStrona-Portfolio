let menu = document.querySelector('#menu-icon')
let glowny = document.querySelector('.ikony-glowny')

menu.addEventListener('click', () => {
	glowny.classList.toggle('open');
})


const tekst = document.querySelector(".tekst");

const textArray = ["Portfolio;"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
	if(charIndex < textArray[textArrayIndex].length) {
		tekst.textContent += textArray[textArrayIndex].charAt(charIndex);
		charIndex++
		setTimeout(type, typingDelay);
	}
	else {
		setTimeout(erase, newTextDelay);
	}
}

function erase() {
	if(charIndex > 0) {
		tekst.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
		charIndex--;
		setTimeout(erase, erasingDelay);
	}
	else {
		textArrayIndex++;
		if(textArrayIndex>=textArray.length) textArrayIndex=0;
		setTimeout(type, typingDelay + 1100);
	}
}

document.addEventListener("DOMContentLoaded", function() {
	setTimeout(type, newTextDelay + 250);
});