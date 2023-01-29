import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  //   inputElem: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysElem: document.querySelector('[data-days]'),
  hoursElem: document.querySelector('[data-hours]'),
  minutesElem: document.querySelector('[data-minutes]'),
  secondsElem: document.querySelector('[data-seconds]'),
};
const currentTime = null;
const selectedTime = null;

refs.startBtn.setAttribute('disabled', 'true');

refs.startBtn.addEventListener('click', () => {
  console.log(new Date());
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (options.defaultDate > selectedDates[0]) {
      refs.startBtn.setAttribute('disabled', 'true');
      Notify.failure('Please choose a date in the future', {
        timeout: 3000,
      });
    } else {
      refs.startBtn.removeAttribute('disabled');
      //selectedTime = selectedDates[0];
      //   console.log(selectedDates[0]);
      //   console.log('conv', convertMs(selectedDates[0]));
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr('#datetime-picker', options);
