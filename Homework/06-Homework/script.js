//Open weather API key
var apiKey = "0a788ecc2d25a7e8e1cbd39fd84dc58c";

//Get current user location
/*function getLocation() {
  // Make sure browser supports this feature
  if (navigator.geolocation) {
    // Provide our showPosition() function to getCurrentPosition
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
// This will get called after getCurrentPosition()
function showPosition(position) {
  // Grab coordinates from the given object
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  //API url for current location weather look up
  var oneCallURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&exclude=hourly,daily&appid=" + apiKey;

  //AJAX call for current city weather API
  $.ajax({
      url: oneCallURL,
      method: "GET",
    })
    .then(function (response) {
      console.log(response);
      //Get response city name & add to HTML
      var city = response.name
      var selectedCity = document.getElementById("selected-city");
      selectedCity.innerHTML = city + " (" + (moment().format('l')) + ")";
      //Get response temperature, convert to F and add to HTML
      var temp = document.getElementById("temperature");
      var tempinK = response.main.temp;
      var temptoF = (tempinK * (9 / 5) - 459.67)
      //Round value
      temptoF = Math.floor(temptoF);
      temp.innerHTML = "Temperature: " + temptoF;
      //Ger response humidity
      var humidity = document.getElementById("humidity");
      var cityHumidity = response.main.humidity;
      humidity.innerHTML = "Humidity: " + cityHumidity;
      //Get response wind speed
      var windSpeed = document.getElementById("wind-speed");
      var cityWind = response.wind.speed;
      windSpeed.innerHTML = "Wind Speed: " + cityWind;
      //URL for UV index
      var uvQueryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;

      //AJAX for UV index for current city
      $.ajax({
          url: uvQueryURL,
          method: "GET",
        })
        .then(function (responseUV) {
          console.log(responseUV);
          var uvIndex = document.getElementById("uv-index");
          var cityUV = responseUV.value;
          uvIndex.innerHTML = "UV Index: " + cityUV;
        });
    });

}
getLocation();*/

//City search click function
$("#search").on("click", function () {
  //Get input data
  var cityName = document.getElementById("city-name").value;
  //Add to appropriate query URL
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;

  $.ajax({
      url: queryURL,
      method: "GET",
    })
    .then(function (response) {
      console.log(response);
      var city = response.city.name
      var selectedCity = document.getElementById("selected-city");
      selectedCity.innerHTML = city + " (" + (moment().format('L')) + ")";
      var temp = document.getElementById("temperature");
      var tempinK = response.list[0].main.temp;
      var temptoF = (tempinK * (9 / 5) - 459.67)
      temptoF = Math.floor(temptoF);
      temp.innerHTML = "Temperature: " + temptoF;
      var humidity = document.getElementById("humidity");
      var cityHumidity = response.list[0].main.humidity;
      humidity.innerHTML = "Humidity: " + cityHumidity;
      var windSpeed = document.getElementById("wind-speed");
      var cityWind = response.list[0].wind.speed;
      windSpeed.innerHTML = "Wind Speed: " + cityWind;
      var city1 = document.getElementById("city1");
      localStorage.setItem(temp, cityName);

      var cityLat = response.city.coord.lat;
      var cityLon = response.city.coord.lon;
      var uvQueryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + cityLat + "&lon=" + cityLon;
      $.ajax({
          url: uvQueryURL,
          method: "GET",
        })
        .then(function (responseUV) {
          console.log(responseUV);
          var uvIndex = document.getElementById("uv-index");
          var cityUV = responseUV.value;
          uvIndex.innerHTML = "UV Index: " + cityUV;
        });
      city1.innerHTML = localStorage.getItem(temp);
      //AJAX for 5 day forecast
      var fivedayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
      $.ajax({
          url: fivedayURL,
          method: "GET",
        })
        .then(function (response) {
          //day 1
          console.log(response.list[0].main);
          var day1Temp = document.getElementById("day1Temp");
          var day1TempK = response.list[0].main.temp
          var day1temptoF = (day1TempK * (9 / 5) - 459.67)
          day1temptoF = Math.floor(day1temptoF);
          day1Temp.innerHTML = "Temp: " + day1temptoF;
          var day1Hum = document.getElementById("day1Hum");
          var day1Humid = response.list[0].main.humidity;
          day1Hum.innerHTML = "Humidity: " + day1Humid;
          var day1 = document.getElementById("day1");
          day1.innerHTML = (moment().add(1, 'days').calendar('l'));
          //day2
          var day2Temp = document.getElementById("day2Temp");
          var day2TempK = response.list[1].main.temp
          var day2temptoF = (day2TempK * (9 / 5) - 459.67)
          day2temptoF = Math.floor(day2temptoF);
          day2Temp.innerHTML = "Temp: " + day2temptoF;
          var day2Hum = document.getElementById("day2Hum");
          var day2Humid = response.list[1].main.humidity;
          day2Hum.innerHTML = "Humidity: " + day2Humid;
          var day2 = document.getElementById("day2");
          day2.innerHTML = (moment().add(2, 'days').calendar('l'));
          //day 3
          var day3Temp = document.getElementById("day3Temp");
          var day3TempK = response.list[2].main.temp
          var day3temptoF = (day3TempK * (9 / 5) - 459.67)
          day3temptoF = Math.floor(day3temptoF);
          day3Temp.innerHTML = "Temp: " + day3temptoF;
          var day3Hum = document.getElementById("day3Hum");
          var day3Humid = response.list[2].main.humidity;
          day3Hum.innerHTML = "Humidity: " + day3Humid;
          var day3 = document.getElementById("day3");
          day3.innerHTML = (moment().add(3, 'days').calendar('l'));
          //day 4
          var day4Temp = document.getElementById("day4Temp");
          var day4TempK = response.list[3].main.temp
          var day4temptoF = (day4TempK * (9 / 5) - 459.67)
          day4temptoF = Math.floor(day4temptoF);
          day4Temp.innerHTML = "Temp: " + day4temptoF;
          var day4Hum = document.getElementById("day4Hum");
          var day4Humid = response.list[3].main.humidity;
          day4Hum.innerHTML = "Humidity: " + day4Humid;
          var day4 = document.getElementById("day4");
          day4.innerHTML = (moment().add(4, 'days').calendar('l'));
          //day 5
          var day5Temp = document.getElementById("day5Temp");
          var day5TempK = response.list[4].main.temp
          var day5temptoF = (day5TempK * (9 / 5) - 459.67)
          day5temptoF = Math.floor(day5temptoF);
          day5Temp.innerHTML = "Temp: " + day5temptoF;
          var day5Hum = document.getElementById("day5Hum");
          var day5Humid = response.list[4].main.humidity;
          day5Hum.innerHTML = "Humidity: " + day5Humid;
          var day5 = document.getElementById("day5");
          day5.innerHTML = (moment().add(5, 'days').calendar('l'));
        })
    });
});