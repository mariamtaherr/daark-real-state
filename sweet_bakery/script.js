let totalSeconds = 6 * 24 * 60 * 60 + 4 * 60 * 60 + 54 * 60 + 47;

function updateCountdown() {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

    if (totalSeconds > 0) {
        totalSeconds--;
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);
