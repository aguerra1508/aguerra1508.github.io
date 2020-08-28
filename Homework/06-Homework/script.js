//Open weather API key
var apiKey = "0a788ecc2d25a7e8e1cbd39fd84dc58c";

//Get current user location
function getLocation() {
    // Make sure browser supports this feature
    if (navigator.geolocation) {
      // Provide our showPosition() function to getCurrentPosition
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
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
            selectedCity.innerHTML = city + " ("+ (moment().format('l')) + ")";
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
  getLocation();

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
            selectedCity.innerHTML = city + " ("+ (moment().format('l')) + ")";
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
            localStorage.setItem(temp,cityName);
            
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
        });
});