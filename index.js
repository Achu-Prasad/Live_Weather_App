const apiKey = "df472463e552c8a5ae5ea010a506f9f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city){
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C"
    document.querySelector(".humidityper").innerHTML = Math.round(data.main.humidity) + "%"
    document.querySelector(".windspeed").innerHTML = Math.round(data.wind.speed) + " km/hr"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./images/snow.png";
    }
}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
