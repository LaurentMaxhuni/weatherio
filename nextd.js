if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction1, errorFunction1);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function successFunction1(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var apiKey = '71a989d9218d2ed433c826160899c09f';
    var url1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current&appid=${apiKey}&units=metric`;
    fetch(url1).then(response => response.json()).then(data1 => displayWeather1(data1)).catch(error => alert('Error fetching data1: ' + error));
}

function errorFunction1() {
    console.log("Unable to retrieve your location.");
}

function getWeather1() {
    var location = document.getElementById('cityInput').value;
    var apiKey = '71a989d9218d2ed433c826160899c09f';
    var geocodeApi = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`;
    fetch(geocodeApi).then(response => response.json()).then(city => getCityFromPosition(city)).catch(error => console.log(error));
    function getCityFromPosition(city) {
        var lat = city[0].lat;
        var lon = city[0].lon;
        var url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current&appid=${apiKey}&units=metric`;
        fetch(url2).then(response => response.json()).then(data1 => displayWeather1(data1)).catch(error => alert('Error fetching data1: ' + error));
    }
}



function displayWeather1(data1) {
    //First day
    var temperature1 = document.getElementById('temperature1').innerHTML = `<i class="bi bi-thermometer mx-1"></i>${Math.round((data1.daily[0].temp.max))}/${Math.round((data1.daily[0].temp.min))}°C`;
    var weather1 = document.getElementById('weather1').innerHTML = `${data1.daily[0].weather[0].main}`;
    var description1 = document.getElementById('weatherDescription1');
    description1.innerHTML = `${data1.daily[0].weather[0].description}`
    description1.style.textTransform = "capitalize";
    var humidity1 = document.getElementById('humidity1').innerHTML = `<i class="bi bi-droplet mx-1"></i>${data1.daily[0].humidity}%`;
    var weatherIcon1 = document.getElementById('weatherIcon1').src = 'https://openweathermap.org/img/wn/' +
    data1.daily[0].weather[0].icon +
    '@4x.png';

    //Second Day
    var temperature2 = document.getElementById('temperature2').innerHTML = `<i class="bi bi-thermometer mx-1"></i>${Math.round((data1.daily[1].temp.max))}/${Math.round((data1.daily[1].temp.min))}°C`;
    var weather2 = document.getElementById('weather2').innerHTML = `${data1.daily[1].weather[0].main}`;
    var description2 = document.getElementById('weatherDescription2');
    description2.innerHTML = `${data1.daily[1].weather[0].description}`
    description2.style.textTransform = "capitalize";
    var humidity2 = document.getElementById('humidity2').innerHTML = `<i class="bi bi-droplet mx-1"></i>${data1.daily[1].humidity}%`;
    var weatherIcon2 = document.getElementById('weatherIcon2').src = 'https://openweathermap.org/img/wn/' +
    data1.daily[1].weather[0].icon +
    '@4x.png';

    //Third Day
    var temperature3 = document.getElementById('temperature3').innerHTML = `<i class="bi bi-thermometer mx-1"></i>${Math.round((data1.daily[2].temp.max))}/${Math.round((data1.daily[2].temp.min))}°C`;
    var weather3 = document.getElementById('weather3').innerHTML = `${data1.daily[2].weather[0].main}`;
    var description3 = document.getElementById('weatherDescription3');
    description3.innerHTML = `${data1.daily[2].weather[0].description}`
    description3.style.textTransform = "capitalize";
    var humidity3 = document.getElementById('humidity3').innerHTML = `<i class="bi bi-droplet mx-1"></i>${data1.daily[2].humidity}%`;
    var weatherIcon3 = document.getElementById('weatherIcon3').src = 'https://openweathermap.org/img/wn/' +
    data1.daily[2].weather[0].icon +
    '@4x.png';

    //Fourth Day
    var temperature4 = document.getElementById('temperature4').innerHTML = `<i class="bi bi-thermometer mx-1"></i>${Math.round((data1.daily[3].temp.max))}/${Math.round((data1.daily[3].temp.min))}°C`;
    var weather4 = document.getElementById('weather4').innerHTML = `${data1.daily[3].weather[0].main}`;
    var description4 = document.getElementById('weatherDescription4');
    description4.innerHTML = `${data1.daily[3].weather[0].description}`;
    description4.style.textTransform = "capitalize";
    var humidity4 = document.getElementById('humidity4').innerHTML = `<i class="bi bi-droplet mx-1"></i>${data1.daily[3].humidity}%`;
    var weatherIcon4 = document.getElementById('weatherIcon4').src = 'https://openweathermap.org/img/wn/' +
    data1.daily[3].weather[0].icon +
    '@4x.png';

    //Fifth Day
    var temperature5 = document.getElementById('temperature5').innerHTML = `<i class="bi bi-thermometer mx-1"></i>${Math.round((data1.daily[4].temp.max))}/${Math.round((data1.daily[4].temp.min))}°C`;
    var weather5 = document.getElementById('weather5').innerHTML = `${data1.daily[4].weather[0].main}`;
    var description5 = document.getElementById('weatherDescription5');
    description5.innerHTML = `${data1.daily[4].weather[0].description}`;
    description5.style.textTransform = "capitalize";
    var humidity5 = document.getElementById('humidity5').innerHTML = `<i class="bi bi-droplet mx-1"></i>${data1.daily[4].humidity}%`;
    var weatherIcon5 = document.getElementById('weatherIcon5').src = 'https://openweathermap.org/img/wn/' +
    data1.daily[4].weather[0].icon +
    '@4x.png';

    //Sixth Day 
    var temperature6 = document.getElementById('temperature6').innerHTML = `<i class="bi bi-thermometer mx-1"></i>${Math.round((data1.daily[5].temp.max))}/${Math.round((data1.daily[5].temp.min))}°C`;
    var weather6 = document.getElementById('weather6').innerHTML = `${data1.daily[5].weather[0].main}`;
    var description6 = document.getElementById('weatherDescription6');
    description6.innerHTML = `${data1.daily[5].weather[0].description}`;
    description6.style.textTransform = "capitalize";
    var humidity6 = document.getElementById('humidity6').innerHTML = `<i class="bi bi-droplet mx-1"></i>${data1.daily[5].humidity}%`;
    var weatherIcon6 = document.getElementById('weatherIcon6').src = 'https://openweathermap.org/img/wn/' +
    data1.daily[5].weather[0].icon +
    '@4x.png';

    //Seventh Day
    var temperature7 = document.getElementById('temperature7').innerHTML = `<i class="bi bi-thermometer mx-1"></i>${Math.round((data1.daily[6].temp.max))}/${Math.round((data1.daily[6].temp.min))}°C`;
    var weather7 = document.getElementById('weather7').innerHTML = `${data1.daily[6].weather[0].main}`;
    var description7 = document.getElementById('weatherDescription7');
    description7.innerHTML = `${data1.daily[6].weather[0].description}`;
    description7.style.textTransform = "capitalize";
    var humidity7 = document.getElementById('humidity7').innerHTML = `<i class="bi bi-droplet mx-1"></i>${data1.daily[6].humidity}%`;
    var weatherIcon7 = document.getElementById('weatherIcon7').src = 'https://openweathermap.org/img/wn/' +
    data1.daily[6].weather[0].icon +
    '@4x.png';

    //Eigth Day
    var temperature8 = document.getElementById('temperature8').innerHTML = `<i class="bi bi-thermometer mx-1"></i>${Math.round((data1.daily[7].temp.max))}/${Math.round((data1.daily[7].temp.min))}°C`;
    var weather8 = document.getElementById('weather8').innerHTML = `${data1.daily[7].weather[0].main}`;
    var description8 = document.getElementById('weatherDescription8');
    description8.innerHTML = `${data1.daily[7].weather[0].description}`;
    description8.style.textTransform = "capitalize";
    var humidity8 = document.getElementById('humidity8').innerHTML = `<i class="bi bi-droplet mx-1"></i>${data1.daily[7].humidity}%`;
    var weatherIcon8 = document.getElementById('weatherIcon8').src = 'https://openweathermap.org/img/wn/' +
    data1.daily[7].weather[0].icon +
    '@4x.png';
    console.log(data1);
}