if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function successFunction(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var apiKey = '71a989d9218d2ed433c826160899c09f';
    var url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(url1).then(response => response.json()).then(data => displayWeather(data)).catch(error => alert('Error fetching data: ' + error));
}

function errorFunction() {
    console.log("Unable to retrieve your location.");
}

function getWeather() {
    var city = document.getElementById('cityInput').value;
    var apiKey = '71a989d9218d2ed433c826160899c09f';
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url).then(response => response.json()).then(data => displayWeather(data)).catch(error => alert('Error fetching data: ' + error));
}

function displayWeather(data) {
    if (data.cod != 200) {
        alert('City not found');
        return;
    }
    console.log(data);
    var cityName = document.getElementById('cityName').innerHTML = `${data.name}, ${data.sys.country}`;
    var weatherIcon = document.getElementById('weatherIcon');
    weatherIcon.setAttribute('src',
    'https://openweathermap.org/img/wn/' +
    data.weather[0].icon +
    '@4x.png')
    var weather = document.getElementById('weather').innerHTML = `${data.weather[0].main}`;
    var weatherDescription = document.getElementById('weatherDescription');
    var temperature = document.getElementById('temperature').innerHTML = `<i class="bi bi-thermometer mx-1"></i>${Math.round(data.main.temp_max)}/${Math.round(data.main.temp_min)}°C`;
    var humidity = document.getElementById('humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
    var windSpeed = document.getElementById('windSpeed');
    var windDirection = document.getElementById('windDirection');
    weatherDescription.innerHTML = `${data.weather[0].description}`;
    weatherDescription.style.textTransform = "capitalize";
    windSpeed.innerHTML = `Wind Speed: ${ Math.round((data.wind.speed * 3600)/1000) } km/h`;   
    var deg = data.wind.deg;
    switch(true) {
        case (deg >= 337.5 && deg < 22.5):
            windDirection.innerHTML = "Wind Description: N";
            break;
        case (deg >= 22.5 && deg < 67.5):
            windDirection.innerHTML = "Wind Direction: NE";
            break;
        case (deg >= 67.5 && deg < 112.5):
            windDirection.innerHTML = "Wind Direction: E";
            break;
        case (deg >= 112.5 && deg < 157.5):
            windDirection.innerHTML = "Wind Direction: SE";
            break;
        case (deg >= 157.5 && deg <= 180):
            windDirection.innerHTML = "Wind Direction: S";
            break;
        case (deg >= 180 && deg < 247.5):
            windDirection.innerHTML = "Wind Direction: SW";
            break;
        case (deg >= 247.5 && deg  < 292.5):
            windDirection.innerHTML = "Wind Direction: W";
            break;
        case (deg >= 292.5 && deg <   337.5):
            windDirection.innerHTML = "Wind Direction: NW";
            break;
        default: 
            windDirection.innerHTML = "Wind Direction: ?"           
    };
};