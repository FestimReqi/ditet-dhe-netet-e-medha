document.addEventListener("DOMContentLoaded", function () {
  // Array of target dates for each countdown
  const targetDates = [
    // 1
    new Date("2024-01-11T23:59:59").getTime(),
    // 2
    new Date("2024-02-05T23:59:59").getTime(),
    // 3
    new Date("2024-02-24T23:59:59").getTime(),
    // 4
    new Date("2024-03-11T23:59:59").getTime(),
    // 5
    new Date("2024-04-05T23:59:59").getTime(),
    // 6
    new Date("2024-04-09T23:59:59").getTime(),
    // 7
    new Date("2024-04-10T23:59:59").getTime(),
    // 8
    new Date("2024-06-15T23:59:59").getTime(),
    // 9
    new Date("2024-06-16T23:59:59").getTime(),
    // 10
    new Date("2024-07-07T23:59:59").getTime(),
    // 11
    new Date("2024-07-16T23:59:59").getTime(),
    // 12
    new Date("2024-09-14T23:59:59").getTime(),
  ];

  // Update all countdowns every second
  const countdownIntervals = [];

  for (let i = 0; i < targetDates.length; i++) {
    const countdownId = i + 1;

    countdownIntervals.push(setupCountdown(countdownId, targetDates[i]));
  }

  function setupCountdown(countdownId, targetDate) {
    return setInterval(function () {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Display the countdown on the webpage
      document.getElementById(`days${countdownId}`).innerText = days + " days";
      document.getElementById(`hours${countdownId}`).innerText =
        hours + " hours";
      document.getElementById(`minutes${countdownId}`).innerText =
        minutes + " minutes";
      document.getElementById(`seconds${countdownId}`).innerText =
        seconds + " seconds";

      // Check if the countdown is over
      if (timeDifference < 0) {
        clearInterval(countdownIntervals[countdownId - 1]);
        document.getElementById(`countdown${countdownId}`).innerHTML =
          "Countdown expired!";
      }
    }, 1000);
  }
});
