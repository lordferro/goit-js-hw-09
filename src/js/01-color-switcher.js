const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let intervalId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);
refs.startBtn.disabled = false;
refs.stopBtn.disabled = true;

function onStartBtnClick() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  intervalId = setInterval(() => {
    const newColor = getRandomHexColor();
    refs.body.style.backgroundColor = newColor;
  }, 1000);
}

function onStopBtnClick() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
