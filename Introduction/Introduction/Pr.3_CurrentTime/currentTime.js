var time = new Date();
var hours = time.getHours();
if (hours < 10) {
    hours = "0" + hours;
}
var minutes = time.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
}
console.log(hours + ":" + minutes)