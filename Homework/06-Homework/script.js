$("#search").on("click", function () {
    var apiKey = "0a788ecc2d25a7e8e1cbd39fd84dc58c";
    var cityName = document.getElementById("city-name").value;
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
    
    $.ajax({
            url: queryURL,
            method: "GET",
        })
        .then(function (response) {
            console.log(response);
            var city = response.city.name
            var selectedCity = document.getElementById("selected-city");
            selectedCity.innerHTML = city;
            var temp = document.getElementById("temperature");
            var tempinK = response.list[0].main.temp;
            var temptoF = (tempinK * (9 / 5) - 459.67)
            temp.innerHTML = "Temperature: " + temptoF;
            var humidity = document.getElementById("humidity");
            var cityHumidity = response.list[0].main.humidity;
            humidity.innerHTML = "Humidity: " + cityHumidity;
            var windSpeed = document.getElementById("wind-speed");
            var cityWind = response.list[0].wind.speed;
            windSpeed.innerHTML = "Wind Speed: " + cityWind;
            
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
        });
});