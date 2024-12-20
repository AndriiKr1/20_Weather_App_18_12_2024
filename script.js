const apiKey = "5a95e683f735185d2f28013fa349e69e";

const locationInput = document.getElementById("locationInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherContainer = document.getElementById("weatherContainer");

//https://api.openweathermap.org/data/2.5/weather?q={locationInput}&appid={apiKey}&units=metric

// elem.onclick - действие, которое будет запущено при клике на данный элемент
getWeatherBtn.onclick = () => {
    const location = locationInput.value.trim();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=ru`)
        .then(res => res.json())
        .then(({ 
            name, 
            main: { temp, feels_like, humidity }, 
            weather: [{description, icon}], 
            wind: { speed } 
        }) => {
            // https://openweathermap.org/img/wn/10d@2x.png 
            weatherContainer.innerHTML = `
                <h2>
                ${name} <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${icon}">
                </h2>
                <p>Температура: ${temp}°C</p>
                <p>${description}</p>
                <p>Скорость ветра: ${speed} м/с</p>
                <p>Ощущается как: ${feels_like}</p>
                <p>Влажность: ${humidity} %</p>
            `;
}) }