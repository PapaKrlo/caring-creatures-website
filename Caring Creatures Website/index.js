function updateTimer() {
    const countdownDate = new Date("2023-04-05T00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.querySelector(".days").innerHTML = days + " <span>Days</span>";
    document.querySelector(".hours").innerHTML = hours + " <span>Hours</span>";
    document.querySelector(".minutes").innerHTML = minutes + " <span>Minutes</span>";
    document.querySelector(".seconds").innerHTML = seconds + " <span>Seconds</span>";
  
    if (distance < 0) {
      clearInterval(timerInterval);
      document.querySelector("#timer").innerHTML = "The event has started!";
    }
  }
  
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
  