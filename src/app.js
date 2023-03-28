function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.city;
  let weatherDescription = document.querySelector("#weather-description")
  weatherDescription.innerHTML = response.data.condition.description;
  let humidityNumber = document.querySelector("#humidity")
  humidityNumber.innerHTML = response.data.temperature.humidity;
  let windNumber = document.querySelector("#wind");
  windNumber.innerHTML = Math.round(response.data.wind.speed);

}

let apiKey = "2500ff940720t52b8co404b3bd5325a6";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
