let date = new Date();
date.setDate(date.getDate() + 1); // increment the date by 1
let daysOfWeek = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];

for (let i = 1; i < 9; i++) {
    let dayName = daysOfWeek[date.getDay()];
    document.getElementById('day' + i).innerHTML = dayName;
    date.setDate(date.getDate() + 1); // increment the date by 1
}