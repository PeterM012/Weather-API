// Variables used for saving cities in local storage
var cityHistory = $("#cityHistory");
var cities =[];
// Uses the ID from HTML and the Cities entered and converts them into a new variable to use for my URL
function getInfo(){
    var cityName = document.getElementById("searchInput");
    var displayCity = document.getElementById("showCity");
    displayCity.innerHTML = cityName.value;
    
// Fetching the api key for Open Weather and creating the response for the page 
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&units=imperial&appid=3bf63872572076ceaf9bd983d73eb7e7`)
    .then(response => response.json())
    .then(data => {
        $('#showCity').text(`${data.city.name}`);
        // For Loop cycling through the ID and inputting the data retrieved from the API into the current and forecast elements
        for(i=0; i<6; i++) {
            $('#allDays').find($("#day"+(i+1)+"Temp").text(`${data.list[i].main.temp} °F`));
            $('#allDays').find($("#day"+(i+1)+"Wind").text(`Wind Speed: ${data.list[i].wind.speed}`));
            $('#allDays').find($("#day"+(i+1)+"Humidity").text(`Humidity: ${data.list[i].main.humidity}%`));
            $('#allDays').find($("#img"+(i+1)).attr("src", "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png"));
          }
        
        // Used Moment.JS to show the current date and next 5 dates for forecast
        var currentDate = moment().calendar();        
        $('#allDays').find($("#day1Date").text(currentDate));

        var date2 = moment().add(1, "days").format("MMMM Do YYYY");
        $('#allDays').find($("#day2Date").text(date2));

        var date3 = moment().add(2, "days").format("MMMM Do YYYY");
        $('#allDays').find($("#day3Date").text(date3));

        var date4 = moment().add(3, "days").format("MMMM Do YYYY");
        $('#allDays').find($("#day4Date").text(date4));

        var date5 = moment().add(4, "days").format("MMMM Do YYYY");
        $('#allDays').find($("#day5Date").text(date5));

        var date6 = moment().add(5, "days").format("MMMM Do YYYY");
        $('#allDays').find($("#day6Date").text(date6));
    });



}
//Start Function for Local Storage to get the Cities entered in local storage
init();
function init(){
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    if (storedCities !== null) {
        cities = storedCities;
      }
    renderCities();
}
// Saves the Entries of cities in the Local Storage 
function storeCities(){
   localStorage.setItem("cities", JSON.stringify(cities));
   console.log(localStorage);
 }

// Creates buttons depending on what city was entered in the input element and saves them on the screen after page is refreshed
function renderCities() {
    cityHistory.empty();
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
      var cityList = $("<button>").text(city);
      cityList.attr("dataCity", city);
      cityList.attr("class", "d-grid gap-1");
      $(".d-grid").on("click", (e) => {
        $("#searchInput").val(e.target.textContent);
        getInfo();
      })
      cityHistory.prepend(cityList);
    }
    if (!city){
        return
    } 
    else{
        getInfo(city)
    };

}

// Allows the button to be clicked for previous cities search and calls on the local storage
$("#addCity").on("click", function(event){
    event.preventDefault();
  var city = $("#searchInput").val().trim();
  if (city === "") {
      return;
  }
  cities.push(city);
    storeCities();
    renderCities();
  
});

