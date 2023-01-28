const ref = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

ref.btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    ref.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  ref.btnStart.setAttribute('disabled', 'true');
});

ref.btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  ref.btnStart.removeAttribute('disabled');
});
