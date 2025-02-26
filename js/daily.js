if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction1, errorFunction1);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function successFunction1(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var apiKey = "8891d02638504842786690943645d56e";
    var url1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,current&appid=${apiKey}&units=metric`;
    fetch(url1).then(response => response.json()).then(data1 => displayWeather1(data1)).catch(error => console.error('Error fetching data1: ' + error));
}

function errorFunction1() {
    console.log("Unable to retrieve your location.");
}

function getWeather1() {
    var location = document.getElementById('cityInput').value;
    var apiKey = '71a989d9218d2ed433c826160899c09f';
    var geocodeApi = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`;
    fetch(geocodeApi).then(response => response.json()).then(city => getCityFromPosition(city)).catch(error => error);
    function getCityFromPosition(city) {
        var lat = city[0].lat;
        var lon = city[0].lon;
        var url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,current&appid=${apiKey}&units=metric`;
        fetch(url2).then(response => response.json()).then(data1 => displayWeather1(data1)).catch(error => console.error('Error fetching data1: ' + error));
    }
}

function displayWeather1(data1) {
    $('#daysSlider').empty();
    var currentDay = new Date();
    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var dayIndex = currentDay.getDay() + 1;
    if(dayIndex === 7) {
        dayIndex = 0; 
    }
    var day = daysOfWeek[dayIndex];
    var dateIndex = currentDay.getDate();
    var monthIndex = currentDay.getMonth();
    if(monthIndex === 3 || monthIndex === 5 || monthIndex === 8 || monthIndex === 10) {
        if(dateIndex ===  30) {
            dateIndex += 1;
            if(dateIndex === 31) {
                dateIndex = 1;
            }
        } else {
        dateIndex += 1;
        }
    } else if(monthIndex === 1) {
        if(dateIndex === 29) {
            dateIndex = 1;
            dateIndex += 1;
        } else {
        dateIndex += 1;
        }
    } else if (monthIndex === 0 || monthIndex === 2 || monthIndex === 4 || monthIndex === 6 || monthIndex === 7 || monthIndex === 9 || monthIndex === 11) {
        if(dateIndex === 31) {
            dateIndex += 1;
            if(dateIndex === 32) {
                dateIndex = 1;
            }
        } else {
            dateIndex += 1;
        }
    }
for (let days of data1.daily) {
    var card = document.createElement('div');
    card.innerHTML = `
        <div class="card py-5 mb-2">
            <h5>${day} ${dateIndex}</h5>
            <img src="${"https://openweathermap.org/img/wn/" + days.weather[0].icon + "@4x.png"}" alt="" class="img-fluid" width="100" height="100">
            <h1><i class="bi bi-thermometer mx-1"></i>${Math.round(days.temp.max)}/${Math.round(days.temp.min)}°C</h1>
            <h4>${days.weather[0].main}</h4>
            <h6 style="text-transform: capitalize;">${days.weather[0].description}</h6>
            <p><i class="bi bi-droplet mx-1"></i>${days.humidity}%</p>
        </div>
    `;
    $('#daysSlider').append(card);
    dayIndex++;
    if(dayIndex === 7) {
        dayIndex = 0; 
    }
    if(monthIndex === 4 || monthIndex === 6 || monthIndex === 9 || monthIndex === 11) {
        if(dateIndex ===  31) {
            dateIndex = 1;
            dateIndex += 1;
        } else {
        dateIndex += 1;
        }
    } else if(monthIndex === 2) {
        if(dateIndex === 29) {
            dateIndex = 1;
            dateIndex += 1;
        } else {
        dateIndex += 1;
        }
    } else if (monthIndex === 1 || monthIndex === 3 || monthIndex === 5 || monthIndex === 7 || monthIndex === 8 || monthIndex === 10 || monthIndex === 12) {
        if(dateIndex === 32) {
            dateIndex = 1;
            dateIndex += 1;
        } else {
            dateIndex += 1;
        }
    }
    day = daysOfWeek[dayIndex];
}
$('#daysSlider').removeClass('slick-initialized slick-slider');
sliderDaily();

$('#hoursSlider').empty();
var currentTime = new Date();
var currentHour = currentTime.getHours();
var hoursOfDay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var hour = hoursOfDay[currentHour];

for(let hours of data1.hourly) {
    var card = document.createElement('div');
    card.innerHTML = `
        <div class="card py-5 mb-2">
            <h5>${hour}:00</h5>
            <img src="${"https://openweathermap.org/img/wn/" + hours.weather[0].icon + "@4x.png"}" alt="" class="img-fluid" width="100" height="100">
            <h1><i class="bi bi-thermometer mx-1"></i>${Math.round(hours.temp)}°C</h1>
            <h4>${hours.weather[0].main}</h4>
            <h6 style="text-transform: capitalize;">${hours.weather[0].description}</h6>
            <p><i class="bi bi-droplet mx-1"></i>${hours.humidity}%</p>
        </div>
    `;
    $('#hoursSlider').append(card);
    currentHour++;
    if(currentHour == 24) {
        currentHour = 0;
    }
    hour = hoursOfDay[currentHour];
}
$('#hoursSlider').removeClass('slick-initialized slick-slider');
sliderHourly();
}