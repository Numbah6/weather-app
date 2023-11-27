const apiKey = "9e475dab5eaa3ba0f230e1277a054c68";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")


async function checkWeather(city){
  const response = await fetch(`${apiUrl}q=${city}&appid=${apiKey}`)
  const data = await response.json("weather-icon")
  const weatherIcon = document.querySelector

  console.log(data);
  document.querySelector(".city").innerHTML=data.name
  document.querySelector(".temp").innerHTML=data.main.temp + "°F"
  document.querySelector(".humidity").innerHTML=data.main.humidity + "%"
  document.querySelector(".wind").innerHTML=data.wind.speed + "mp/h"

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src ="images/clouds.png"
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})

inputBox.addEventListener("keydown", function(e) {
  if (e.key === "Enter"){
    event.preventDefault();
    checkWeather(searchBox.value)
  }
})
