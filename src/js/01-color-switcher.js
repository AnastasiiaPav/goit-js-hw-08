
  const start = document.querySelector('[data-start]')
  const stop = document.querySelector('[data-stop]')
  const body = document.querySelector('body')
  console.log(body)

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  function randomColor() {
body.style.backgroundColor = `${getRandomHexColor}`;
  }

  let change;
  stop.setAttribute('disabled', 'disabled')


function buttonStart() {
    change =  setAttribute(randomColor, 1000);
    start.setAttribute('disabled', 'disabled');
    stop.removeAttribute('disadled')
};

function buttonStop() {
    newInterval(change);
    stop.removeAttribute('disabled');
    stop.setAttribute('disabled', 'disabled')
};

start.addEventListener('click', buttonStart);
stop.addEventListener('click', buttonStop)