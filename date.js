let date = new Date();
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let monthOfYear = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let monthIndex = date.getMonth();
let month = monthOfYear[monthIndex];
let datee = date.getDate();
if(datee == 1) { 
    datee = datee + 'st';
} else if(datee == 2) {
    datee = datee  + 'nd';
} else if(datee == 3) {
    datee = datee + 'rd';
} else if(datee > 3 && datee < 31) {
    datee = datee + 'th';
} else if(datee == 31) {
    datee = datee  + 'st';
}
let dayIndex = date.getDay();
let day = daysOfWeek[dayIndex];
let year = date.getFullYear();
document.getElementById('date').innerHTML = `<p><i class="bi bi-calendar3 mx-1"></i>${month} ${datee} ${year} / ${day}</p>`;

