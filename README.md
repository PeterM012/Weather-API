# Weather-API

## Deployed Link
https://peterm012.github.io/Weather-API/

## Site Picture
![Weather API](https://user-images.githubusercontent.com/110750833/194931693-12d6ee90-52ee-4db1-bf87-7f119861a0f8.gif)



## Technologies Used
- HTML - Used to create elements on the DOM
- CSS - Styles html elements on page
- JS - Used to create interactions and animations on webpage
- Bootstrap - Used to create the layout of the page
- JSON - Used to parse and stringify  
- WEB API - Used to save on the local storage
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to Github Pages

## To Do
Create a weather dashboard with form inputs to search for a city
Present current and future weather conditions for that city and allow the city to be added to the search history
View current weather conditions for that city presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
Future weather conditions for that city presented a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
Click on a city in the search history presented with current and future conditions for that city

## Summary 
This project was to create a Application using openweather API. To begin this task I had to spend some time reading different articles such as W3 and MDN and Jquery. After reviewing the material I was going to need I utilizing Javascript and Jquery to execute what was needed along with the Fetch() Method. In order to complete this task I had to use an assortment of HTML, Bootstrap, and Jquery. I used console.log() to make sure my code stayed true. During my research I discovered how to use local storage in order to getItems and setItems in order to retrieve the previous search history for my cities. I felt the most challenging task to overcome for this task was understanding how to retrieve the information from each object and it property. Something that I took away from this was how to use an API in order to retrieve the requested data. I feel at the end of this I have achieved a better understanding of APIs. Below is my code for the weather boxes displaying current and forecast.

## Code Snippet
JS
```js
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
```
