import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  daysElem: document.querySelector('[data-days]'),
  hoursElem: document.querySelector('[data-hours]'),
  minutesElem: document.querySelector('[data-minutes]'),
  secondsElem: document.querySelector('[data-seconds]'),
};

let selectedTime = null;
let timerId = null;
refs.startBtn.setAttribute('disabled', 'true');

const onBtnStartClick = () => {
  refs.startBtn.setAttribute('disabled', 'true');
  refs.startBtn.removeEventListener('click', onBtnStartClick);
  timerId = setInterval(() => {
    let currentTime = new Date();
    const countSecond = selectedTime - currentTime;
    if (countSecond < 0) {
      clearInterval(timerId);
      return;
    }
    addLeadingZero(convertMs(countSecond));
  }, 1000);
};

const changeTime = time => {
  resetTimer();
  clearInterval(timerId);
  let currentTime = new Date();
  selectedTime = time;

  if (currentTime > time) {
    refs.startBtn.setAttribute('disabled', 'true');
    Notify.failure('Please choose a date in the future', {
      timeout: 3000,
    });
  } else {
    refs.startBtn.removeAttribute('disabled');
    refs.startBtn.addEventListener('click', onBtnStartClick);
  }
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    changeTime(selectedDates[0]);
  },
};

const resetTimer = () => {
  refs.startBtn.removeEventListener('click', onBtnStartClick);
  refs.daysElem.textContent = '00';
  refs.hoursElem.textContent = '00';
  refs.minutesElem.textContent = '00';
  refs.secondsElem.textContent = '00';
};
const addLeadingZero = ({ days, hours, minutes, seconds }) => {
  refs.daysElem.textContent = String(days).padStart(2, 0);
  refs.hoursElem.textContent = String(hours).padStart(2, 0);
  refs.minutesElem.textContent = String(minutes).padStart(2, 0);
  refs.secondsElem.textContent = String(seconds).padStart(2, 0);
};

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

flatpickr('#datetime-picker', options);
