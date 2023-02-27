import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const buttonStart = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

buttonStart.disabled = true;
buttonStart.addEventListener('click', () => {
  timer.start();
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const dateNow = new Date();
    console.log(dateNow);
    if (selectedDates[0] - dateNow > 0) {
      buttonStart.disabled = false;
    } else {
      buttonStart.disabled = true;
      Notify.warning('Please choose a date in the future');
    }
  },
};

const fp = flatpickr('#datetime-picker', options);

const timer = {
  intervalId: null,

  start() {
    const selectedDate = fp.selectedDates[0];
    console.log(selectedDate);

    this.intervalId = setInterval(() => {
      const currentTime = new Date().getTime();

      const deltaTime = selectedDate - currentTime;
      console.log(deltaTime);
      buttonStart.disabled = true;
      if (deltaTime < 0) {
        clearInterval(this.intervalId);
      }
      const time = convertMs(deltaTime);
      updateClock(time);
    }, 1000);
  },
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));

  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function updateClock({ days, hours, minutes, seconds }) {
  dataDays.textContent = `${days}`;
  dataHours.textContent = `${hours}`;
  dataMinutes.textContent = ` ${minutes}`;
  dataSeconds.textContent = ` ${seconds}`;
}
