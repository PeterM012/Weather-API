function getInfo(){
    var cityName = document.getElementById("searchInput");
    var displayCity = document.getElementById("showCity");
    displayCity.innerHTML = cityName.value;
    

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&units=imperial&appid=06986c508b07c672d03a8bf63ea59996`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        for(i=0; i<6; i++) {
            $('#allDays').find($("#day"+(i+1)+"Temp").text(`${data.list[i].main.temp} °F`));
            $('#allDays').find($("#day"+(i+1)+"Wind").text(`Wind Speed: ${data.list[i].wind.speed}`));
            $('#allDays').find($("#day"+(i+1)+"Humidity").text(`Humidity: ${data.list[i].main.humidity}%`));
            $('#allDays').find($("#img"+(i+1)).attr("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png"));
          }
        
        var currentDate = moment().calendar();        
        $('#allDays').find($("#day1Date").text(currentDate));

        var date2 = moment().add(1, "days").format("MMMM Do YYYY");
        console.log(date2);
        $('#allDays').find($("#day2Date").text(date2));

        var date3 = moment().add(2, "days").format("MMMM Do YYYY");
        console.log(date3);
        $('#allDays').find($("#day3Date").text(date3));

        var date4 = moment().add(3, "days").format("MMMM Do YYYY");
        console.log(date4);
        $('#allDays').find($("#day4Date").text(date4));

        var date5 = moment().add(4, "days").format("MMMM Do YYYY");
        console.log(date5);
        $('#allDays').find($("#day5Date").text(date5));

        var date6 = moment().add(5, "days").format("MMMM Do YYYY");
        console.log(date6);
        $('#allDays').find($("#day6Date").text(date6));
    });

}

