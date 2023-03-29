function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.city;
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.condition.description;
  let humidityNumber = document.querySelector("#humidity");
  humidityNumber.innerHTML = response.data.temperature.humidity;
  let windNumber = document.querySelector("#wind");
  windNumber.innerHTML = Math.round(response.data.wind.speed);
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src",`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`)
  iconElement.setAttribute("alt", response.data.condition.description);
}

let apiKey = "2500ff940720t52b8co404b3bd5325a6";
let city = "london";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature)
