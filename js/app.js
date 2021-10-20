// Navigation Bar Toggle
const toggle = document.getElementById("toggle"),
    themebtn = document.querySelector(".theme");

toggle.addEventListener("click", () => themebtn.classList.toggle("active"));

//Theme Changes
const theme = document.getElementById("nav"),
    themes = document.querySelectorAll("li");

theme.addEventListener("click", (e) => {
    const html = document.querySelector("html");

    themes.forEach(theme => theme.className = '');

    if (e.target.textContent === "Beach") {
        html.className = "beach";
        e.target.classList.add("click");
    }

    else if (e.target.textContent === "Pink") {
        html.className = "pink";
        e.target.classList.add("click");
    }

    else if (e.target.textContent === "Space") {
        html.className = "space";
        e.target.classList.add("click");
    }

    else if (e.target.textContent === "Country") {
        html.className = "country";
        e.target.classList.add("click");
    }

    settime();
});

// Clock Date Day
const hourui = document.querySelector(".hour"),
    minuteui = document.querySelector(".minute"),
    secondui = document.querySelector(".second");

const timeui = document.querySelector(".time"),
    dateui = document.querySelector(".dat");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const days = document.querySelectorAll(".week");

function settime() {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const today = date.getDate();
    const hour = date.getHours();
    const hoursforclock = (hour % 12 === 0) ? 12 : hour % 12;
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const getampm = hour < 12 ? "AM" : "PM";

    rotation(hourui, hoursforclock / 12);
    rotation(minuteui, minute / 60);
    rotation(secondui, second / 60);

    days[day].className = "week today";

    timeui.innerText = `${hoursforclock}:${minute < 10 ? `0${minute}` : minute} ${getampm}`;

    dateui.innerText = `${months[month]} ${today}, ${year}`;
}

function rotation(needle, rotate) {
    needle.style.setProperty("--rotation", rotate * 360);
}

settime();

setInterval(settime, 1000);

