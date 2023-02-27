function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;



const buttonStartClickHandler = event => {
  timerId = setInterval(() => {
    buttonStart.disabled = true;
    buttonStop.disabled = false;

    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const buttonStopClickHandler = event => {
  clearInterval(timerId);

  buttonStop.disabled = true;
  buttonStart.disabled = false;
};
buttonStart.addEventListener('click', buttonStartClickHandler);
buttonStop.addEventListener('click', buttonStopClickHandler);