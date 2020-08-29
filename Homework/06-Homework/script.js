//Open weather API key
var apiKey = "0a788ecc2d25a7e8e1cbd39fd84dc58c";

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
      console.log(response.list[0].weather[0].icon);
      var selectedCity = document.getElementById("selected-city");
      var weatherIcon = response.list[0].weather[0].icon;
      var iconEl = document.getElementById("weather-icon");
      iconEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png");
      iconEl.setAttribute("alt",response.list[0].weather[0].description);
      selectedCity.innerHTML = city + " (" + (moment().format('L')) + ")";
      var temp = document.getElementById("temperature");
      var tempinK = response.list[0].main.temp;
      var temptoF = (tempinK * (9 / 5) - 459.67)
      temptoF = Math.floor(temptoF);
      temp.innerHTML = "Temperature: " + temptoF + "&#8457";
      var humidity = document.getElementById("humidity");
      var cityHumidity = response.list[0].main.humidity;
      humidity.innerHTML = "Humidity: " + cityHumidity + "%";
      var windSpeed = document.getElementById("wind-speed");
      var cityWind = response.list[0].wind.speed;
      windSpeed.innerHTML = "Wind Speed: " + cityWind + " MPH";
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
          if (cityUV <= 2 ){
            uvIndex.style.color = "green";
          } if (cityUV === 3|| cityUV === 4|| cityUV === 5){
            uvIndex.style.color = "yellow";
          } if (cityUV === 6 || cityUV === 7 || cityUV === 8){
            uvIndex.style.color = "orange";
          } if (cityUV > 8) {
            uvIndex.style.color = "red";
          }
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
          console.log(response.list[0]);
          var day1Temp = document.getElementById("day1Temp");
          var day1TempK = response.list[0].main.temp
          var day1temptoF = (day1TempK * (9 / 5) - 459.67)
          day1temptoF = Math.floor(day1temptoF);
          day1Temp.innerHTML = "Temp: " + day1temptoF + "&#8457";
          var day1Hum = document.getElementById("day1Hum");
          var day1Humid = response.list[0].main.humidity;
          day1Hum.innerHTML = "Humidity: " + day1Humid + "%";
          var day1 = document.getElementById("day1");
          day1.innerHTML = (moment().add(1, 'days').calendar('l'));
          var weatherPicDay1 = document.getElementById("weather-pic-day1");
          var weatherPicture = response.list[0].weather[0].icon;
          weatherPicDay1.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPicture + "@2x.png");
          weatherPicDay1.setAttribute("alt",response.list[0].weather[0].description);
          //day2
          var day2Temp = document.getElementById("day2Temp");
          var day2TempK = response.list[1].main.temp
          var day2temptoF = (day2TempK * (9 / 5) - 459.67)
          day2temptoF = Math.floor(day2temptoF);
          day2Temp.innerHTML = "Temp: " + day2temptoF + "&#8457";
          var day2Hum = document.getElementById("day2Hum");
          var day2Humid = response.list[1].main.humidity;
          day2Hum.innerHTML = "Humidity: " + day2Humid + "%";
          var day2 = document.getElementById("day2");
          day2.innerHTML = (moment().add(2, 'days').calendar('l'));
          var weatherPicDay2 = document.getElementById("weather-pic-day2");
          var weatherPicture2 = response.list[1].weather[0].icon;
          weatherPicDay2.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPicture2 + "@2x.png");
          weatherPicDay2.setAttribute("alt",response.list[1].weather[0].description);
          //day 3
          var day3Temp = document.getElementById("day3Temp");
          var day3TempK = response.list[2].main.temp
          var day3temptoF = (day3TempK * (9 / 5) - 459.67)
          day3temptoF = Math.floor(day3temptoF);
          day3Temp.innerHTML = "Temp: " + day3temptoF + "&#8457";
          var day3Hum = document.getElementById("day3Hum");
          var day3Humid = response.list[2].main.humidity;
          day3Hum.innerHTML = "Humidity: " + day3Humid + "%";
          var day3 = document.getElementById("day3");
          day3.innerHTML = (moment().add(3, 'days').calendar('l'));
          var weatherPicDay3 = document.getElementById("weather-pic-day3");
          var weatherPicture3 = response.list[2].weather[0].icon;
          weatherPicDay3.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPicture3 + "@2x.png");
          weatherPicDay3.setAttribute("alt",response.list[2].weather[0].description);
          //day 4
          var day4Temp = document.getElementById("day4Temp");
          var day4TempK = response.list[3].main.temp
          var day4temptoF = (day4TempK * (9 / 5) - 459.67)
          day4temptoF = Math.floor(day4temptoF);
          day4Temp.innerHTML = "Temp: " + day4temptoF + "&#8457";
          var day4Hum = document.getElementById("day4Hum");
          var day4Humid = response.list[3].main.humidity;
          day4Hum.innerHTML = "Humidity: " + day4Humid + "%";
          var day4 = document.getElementById("day4");
          day4.innerHTML = (moment().add(4, 'days').calendar('l'));
          var weatherPicDay4 = document.getElementById("weather-pic-day4");
          var weatherPicture4 = response.list[3].weather[0].icon;
          weatherPicDay4.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPicture4 + "@2x.png");
          weatherPicDay4.setAttribute("alt",response.list[3].weather[0].description);
          //day 5
          var day5Temp = document.getElementById("day5Temp");
          var day5TempK = response.list[4].main.temp
          var day5temptoF = (day5TempK * (9 / 5) - 459.67)
          day5temptoF = Math.floor(day5temptoF);
          day5Temp.innerHTML = "Temp: " + day5temptoF + "&#8457";
          var day5Hum = document.getElementById("day5Hum");
          var day5Humid = response.list[4].main.humidity;
          day5Hum.innerHTML = "Humidity: " + day5Humid + "%";
          var day5 = document.getElementById("day5");
          day5.innerHTML = (moment().add(5, 'days').calendar('l'));
          var weatherPicDay5 = document.getElementById("weather-pic-day5");
          var weatherPicture5 = response.list[4].weather[0].icon;
          weatherPicDay5.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPicture5 + "@2x.png");
          weatherPicDay5.setAttribute("alt",response.list[4].weather[0].description);
        })
    });
});