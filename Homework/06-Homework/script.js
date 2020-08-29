//Open weather API key
var apiKey = "0a788ecc2d25a7e8e1cbd39fd84dc58c";
var count = 1;

//City search click function
$("#search").on("click", function () {
  //Get input data
  var cityName = document.getElementById("city-name").value;
  //Add to appropriate query URL
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
  //AJAx call
  $.ajax({
      url: queryURL,
      method: "GET",
    })
    //Then get response
    .then(function (response) {
      console.log(response)
      //City result from response
      var city = response.city.name
      var selectedCity = document.getElementById("selected-city");
      //Date result from response
      var date = response.list[0].dt_txt;
      //Format date result
      date = moment().format("l", date)
      selectedCity.innerHTML = city + " " + date;
      //Icon result from response
      var weatherIcon = response.list[0].weather[0].icon;
      var iconEl = document.getElementById("weather-icon");
      //Set icon attributes
      iconEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png");
      iconEl.setAttribute("alt",response.list[0].weather[0].description);
      //Temperature result from response
      var temp = document.getElementById("temperature");
      var tempinK = response.list[0].main.temp;
      //Convert from Kelvin
      var temptoF = (tempinK * (9 / 5) - 459.67)
      //Round temperature
      temptoF = Math.floor(temptoF);
      temp.innerHTML = "Temperature: " + temptoF + "&#8457";
      //Humidity result from response
      var humidity = document.getElementById("humidity");
      var cityHumidity = response.list[0].main.humidity;
      humidity.innerHTML = "Humidity: " + cityHumidity + "%";
      //Wind speed result from response
      var windSpeed = document.getElementById("wind-speed");
      var cityWind = response.list[0].wind.speed;
      windSpeed.innerHTML = "Wind Speed: " + cityWind + " MPH";
      //5 Day Weather Forecast
      var fiveDayEls = document.querySelectorAll("#five-day");
      //For loop to create elements and add data into cards
      for (var i = 0; i < fiveDayEls.length; i++){
        console.log(response.list[(i * 8) + 4]);
        //Change i to be for next day
        var nextDay = (i * 8) + 4;
        //5 day date
        var forecastDate = response.list[nextDay].dt_txt;
        var dateEl = document.createElement("h5");
        dateEl.innerHTML = forecastDate;
        fiveDayEls[i].append(dateEl);
        //5 day weather image
        var imgEl = document.createElement("img");
        var forecastPic = response.list[nextDay].weather[0].icon;
        imgEl.setAttribute("src","https://openweathermap.org/img/wn/" + forecastPic + "@2x.png");
        imgEl.setAttribute("alt",response.list[nextDay].weather[0].description);
        fiveDayEls[i].append(imgEl);
        //5 day temp
        var tempEl = document.createElement("p");
        var forecastTemp = response.list[nextDay].main.temp;
        //Convert temp from K to F
        var forecastTemptoF = (forecastTemp * (9 / 5) - 459.67);
        forecastTemptoF = Math.floor(forecastTemptoF);
        tempEl.innerHTML = "Temp: " + forecastTemptoF + "&#8457";
        fiveDayEls[i].append(tempEl);
        //5 day humidity
        var humidEl = document.createElement("p");
        var forecastHum = response.list[nextDay].main.humidity;
        humidEl.innerHTML = "Humidity: " + forecastHum + "%";
        fiveDayEls[i].append(humidEl);
      }
      //Lat & Long for UV index API
      var cityLat = response.city.coord.lat;
      var cityLon = response.city.coord.lon;
      //UV index url
      var uvQueryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + cityLat + "&lon=" + cityLon;
      //AJAX for UV index
      $.ajax({
          url: uvQueryURL,
          method: "GET",
        })
        .then(function (responseUV) {
          //UV index result from response
          var uvIndex = document.getElementById("uv-index");
          var cityUV = responseUV.value;
          uvIndex.innerHTML = "UV Index: " + cityUV;
          //Add color and change according to UV index level
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
      //city1.innerHTML = localStorage.getItem(temp);
    });
});