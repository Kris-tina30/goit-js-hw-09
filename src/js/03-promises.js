import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const firstDelay = document.querySelector('input, [name="delay"]');
const delayStep = document.querySelector('input, [name="step"]');
const amount = document.querySelector('input, [name="amount"]');

console.log(Number(amount.value));
console.log(Number(delayStep.value));
console.log(Number(firstDelay.value));


form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  for (let i = 0; i <= Number(amount.value); i += 1) {
    createPromise(i + 1, Number(firstDelay.value) + Number(delayStep.value) * i)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
