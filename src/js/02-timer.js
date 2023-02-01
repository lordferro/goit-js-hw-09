// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputDateTime: document.querySelector('#datetime-picker'),
  notification: document.querySelector('.js-notification'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const flatPickerOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkIfDateInFuture();
  },
};
const flatPicker = flatpickr(refs.inputDateTime, flatPickerOptions);

const NOTIFICATION_DELAY = 5000;
let timeOutId = null;

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onStartBtnClick);

function checkIfDateInFuture() {
  if (flatPicker.selectedDates[0] < Date.now()) {
    Notify.failure('Please chose a date in the future');
  } else {
    refs.startBtn.disabled = false;
  }
}

function onStartBtnClick() {
  const targetTime = flatPicker.selectedDates[0].getTime();
   timeOutId = setInterval(() => {
        const deltaMs = targetTime - (Date.now());
       const restDate = convertMs(deltaMs)
        updateClockFace(restDate);
        if (Number(deltaMs) < 1000) {
          clearInterval(timeOutId);
        }
        
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateClockFace({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
}