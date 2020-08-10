function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
          clearInterval(timer);
          document.getElementById("timer").innerHTML = "EXPIRED";
      }
  }, 1000);
}
window.onclick = function () {
  var eightMinutes = 60 * 8,
      display = document.getElementById('timer');
  startTimer(eightMinutes, display);
};