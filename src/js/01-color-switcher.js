const buttonStart = document.querySelector('[data-start]');
console.log(buttonStart.disabled);
const buttonStop = document.querySelector('[data-stop]');
console.dir(buttonStop);
const body = document.querySelector('body');
console.log(body);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

buttonStartClickHandler = event => {
  console.log(buttonStart.disabled);

  timerId = setInterval(() => {
    buttonStart.disabled = true;
    buttonStop.disabled = false;

    body.style.backgroundColor = getRandomHexColor();
    console.log(buttonStart.disabled);
  }, 1000);
};

buttonStopClickHandler = event => {
  clearInterval(timerId);

  buttonStop.disabled = true;
  buttonStart.disabled = false;
};

buttonStart.addEventListener('click', buttonStartClickHandler);
buttonStop.addEventListener('click', buttonStopClickHandler);
