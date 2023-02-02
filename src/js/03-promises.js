import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  onExecute(Number(delay.value), Number(step.value), Number(amount.value));
  e.currentTarget.reset();
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve({ position, delay });
  } else {
    return Promise.reject({ position, delay });
  }
}

const onExecute = (firstDelay, delayStep, amount) => {
  for (let i = 1, delay = firstDelay; i <= amount; i += 1, delay += delayStep) {
    setTimeout(
      () =>
        createPromise(i, delay)
          .then(({ position, delay }) => {
            Notify.success(` Fulfilled promise ${position} in ${delay}ms`, {
              timeout: 2500,
            });
          })
          .catch(({ position, delay }) => {
            Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
              timeout: 2500,
            });
          }),
      delay
    );
  }
};
