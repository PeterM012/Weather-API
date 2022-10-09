function getInfo(){
    var cityName = document.getElementById("searchInput");
    var displayCity = document.getElementById("showCity");
    displayCity.innerHTML = cityName.value;
    

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&units=imperial&appid=06986c508b07c672d03a8bf63ea59996`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        for(i=0; i<6; i++) {
            $('#allDays').find($("#day"+(i+1)+"Temp").text(`${data.list[i].main.temp}°F`));
            $('#allDays').find($("#day"+(i+1)+"Wind").text(`${data.list[i].wind.speed} speed`));
            $('#allDays').find($("#day"+(i+1)+"Humidity").text(`${data.list[i].main.humidity}%`));
            $('#allDays').find($("#img"+(i+1)).attr("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png"));
 
            // console.log(data.list[i].dt);
            // var weatherDate = moment.unix([data.list[i].dt]).format("MMM Do, YYYY");
            // $('#allDays').find($("#day"+(i+1)+"Date").text(weatherDate));
        }
        
        for(i=0; i<6; i++) {
            var currentDate = moment.format("MMM Do, YYYY").add((1), "days");
            console.log(dates);
            $('#allDays').find($("#day"+(i+1)+"Date").text(dates));
        }
            


    });

}





















// let weatherApi = {
//     "apiKey": "06986c508b07c672d03a8bf63ea59996",
//     fetchWeatherApi: function (city) {
//         fetch(
//             "https://https://api.openweathermap.org/data/2.5/weather?q=" 
//             + city
//             + "&units=imperial&appid=" 
//             + this.apiKey
//         )
//         .then((response) => response.json())
//         .then((data) => this.displayWeather(data));
//     },
    // displayWeather: function(data) {
    //     var { name } = data;
    //     var { dt } = data;
    //     var { icon } = data.weather[0];
    //     var { temp, humidity } = data.main;
    //     var { speed } = data.wind
    //     var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    //     var weatherDate = moment.unix(dt).format("MMM Do, YYYY");
    //     console.log(name, dt, icon, temp, humidity, speed)
    //     document.querySelector(".currentCity").innerText = name;
    //     $('.current').find(".currentDate").text(weatherDate);
    //     $('.current').find('#currentIcon').attr('src', iconUrl);
    //     $(".current").find($(".currentTemp")).text(`${temp} °F`);        
    //     document.querySelector(".currentHumidity").innerText = "Humidity: " + humidity + "%";
    //     document.querySelector(".currentWind").innerText = "Wind Speed: " + speed;

//         day1(data);
        // $('#card1').find("#date").text(date);
        // $('.current').find('#currentIcon').attr('src', iconUrl);
        // $(".current").find($(".currentTemp")).text(`${temp} °F`);        
        // document.querySelector(".currentHumidity").innerText = "Humidity: " + humidity + "%";
        // document.querySelector(".currentWind").innerText = "Wind Speed: " + speed;
//     },
//     search: function () {
//         this.fetchWeatherApi(document.querySelector(".form-control").value);
//     }
// };

// document.querySelector(".button").addEventListener("click", function() {
//     weatherApi.search();
// })

// function day1 (data) {
//     for ( let i = 0; i < 5; i++){
//         let dayOne = data[i];
//         console.log(data[i]);
        // document.getElementById("card1" + (i+1).find("#date").text(date));
//         var date = moment.unix(data.dt).format("MMM Do, YYYY");
//         $('#card1').find("#date").text(date);
//         $('#card1').find('#icon').attr('src', iconUrl);
//         $("#card1").find($("#temp")).text(`${temp} °F`);        
//         document.querySelector("#humidity").innerText = "Humidity: " + humidity + "%";
//         document.querySelector("#wind").innerText = "Wind Speed: " + speed;
//     }
// }