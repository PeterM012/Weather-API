let weatherApi = {
    "apiKey": "06986c508b07c672d03a8bf63ea59996",
    fetchWeatherApi: function (city) {
        fetch(
            "https://https://api.openweathermap.org/data/2.5/forecast?q=" 
            + city
            + "&units=imperial&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        var { name } = data;
        var { dt } = data;
        var { icon } = data.weather[0];
        var { temp, humidity } = data.main;
        var { speed } = data.wind
        var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
        var weatherDate = moment.unix(dt).format("MMM Do, YYYY");
        console.log(name, dt, icon, temp, humidity, speed)
        document.querySelector(".currentCity").innerText = name;
        $('.current').find(".currentDate").text(weatherDate);
        $('.current').find('#currentIcon').attr('src', iconUrl);
        $(".current").find($(".currentTemp")).text(`${temp} °F`);        
        document.querySelector(".currentHumidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".currentWind").innerText = "Wind Speed: " + speed;

        day1(data);
        // $('#card1').find("#date").text(date);
        // $('.current').find('#currentIcon').attr('src', iconUrl);
        // $(".current").find($(".currentTemp")).text(`${temp} °F`);        
        // document.querySelector(".currentHumidity").innerText = "Humidity: " + humidity + "%";
        // document.querySelector(".currentWind").innerText = "Wind Speed: " + speed;
    },
    search: function () {
        this.fetchWeatherApi(document.querySelector(".form-control").value);
    }
};

document.querySelector(".button").addEventListener("click", function() {
    weatherApi.search();
})

function day1 (data) {
    for ( let i = 0; i < 5; i++){
        let dayOne = data[i];
        console.log(data[i]);
        // document.getElementById("card1" + (i+1).find("#date").text(date));
        var date = moment.unix(data.dt).format("MMM Do, YYYY");
        $('#card1').find("#date").text(date);
        $('#card1').find('#icon').attr('src', iconUrl);
        $("#card1").find($("#temp")).text(`${temp} °F`);        
        document.querySelector("#humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector("#wind").innerText = "Wind Speed: " + speed;
    }
}