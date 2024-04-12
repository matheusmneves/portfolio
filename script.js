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

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const graduation = document.querySelector('.graduation');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
console.log(items);

let futureDate = new Date(2025,3,30,11,59,59);
console.log(futureDate);

const year = futureDate.getFullYear();
const day = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

let weekday = futureDate.getDate();
weekday = weekdays[futureDate.getDay()];

graduation.textContent = `Graduation ${year}, ${month} ${day} ${weekday}, ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    console.log(t);

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    let days = t/oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days,hours,minutes,seconds];

    function format(item) {
        if(item < 10) {
            return item = `0${item}`;
        }
        return item;
    } 

    items.forEach(function(item,index) {
        item.innerHTML = format(values[index]);
    });

    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">I'm graduated!!!</h4>`
    }

}

let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();