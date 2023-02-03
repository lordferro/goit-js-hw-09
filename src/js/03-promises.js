import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  delayAmount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form'),
};

const data = {
  firstDelay: 0,
  delayStep: 0,
  delayAmount: 0,
}

const promises = [];

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  getData();
  createPromiseFromParams(data);   
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        return resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
        
      } else {
        return reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}

function createPromiseFromParams({firstDelay, delayStep, delayAmount}) {
  let delay = firstDelay;
  
  for (let position = 1; position <= delayAmount; position++) {
    
    const a = createPromise(position, delay);
    a.then(x=>x).catch(y=>y)
    delay += delayStep;
  } 
}

function getData() {
  data.firstDelay = Number(refs.firstDelay.value);
  data.delayStep = Number(refs.delayStep.value);
  data.delayAmount = Number(refs.delayAmount.value);
}
