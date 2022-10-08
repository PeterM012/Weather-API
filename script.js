class fetch {
    async getCurrent(input) {
        const myKey = "06986c508b07c672d03a8bf63ea59996";
      
        var response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`
        );
        
        let data = await response.json();
        console.log(data);
        return data;
    }
}

class ui {
    constructor() {
        this.uiContainer = document.getElementById("current");
        this.city;

    }
}

// $("div #current").find($("#currentCity")).append(`${data.name} + ` ` + ${data.dt} + ` ` + ${data.weather.icon}`);
// $("div #current").find($("#currentTemp")).append(data.main.temp); 
// $("div #current").find($("#currentHumidity")).append(data.main.humidity);
// $("div #current").find($("#currentWind")).append(data.wind.speed);

// $("div #card1").find($("#date")).append(data.dt);
// $("div #card1").find($("#temp")).append(data.main.temp);
// $("div #card1").find($("#icon")).append(data.weather.icon);
// $("div #card1").find($("#humidity")).append(data.main.humidity);
// $("div #card1").find($("#wind")).append(data.wind.speed);

var ft = new fetch();
var newUi = new ui();

var searchBtn = document.getElementById('btn')
var searchBar = document.getElementById('exampleDataList')

searchBtn.addEventListener("click", () => {
    var currentVal = searchBar.value; 

    ft.getCurrent(currentVal).then((data) => {
        ui.populateUi(data);
        ui.saveTolS(data);
    });


});

