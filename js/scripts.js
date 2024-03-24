(function () {

  const clock = document.querySelector('#clock');
  const start = document.querySelector('#start');
  const pause = document.querySelector('#pause');
  const reset = document.querySelector('#reset');
  let seconds = 0;
  let timer;

  function createTime(seconds) {
    const date = new Date(seconds * 1000);  
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  function startClock() {
    timer = setInterval(function() {
      seconds++;
      clock.innerHTML = createTime(seconds);
    }, 1000);
  }

  start.addEventListener('click', function(e) {
    clock.classList.remove('paused');
    clearInterval(timer);
    startClock();
  });

  pause.addEventListener('click', function(e) {
    clearInterval(timer);
    clock.classList.add('paused');    
  });

  reset.addEventListener('click', function(e) {
    clearInterval(timer);
    clock.innerHTML = ' ';
    clock.classList.remove('paused');
    seconds = 0;
  });


})();

