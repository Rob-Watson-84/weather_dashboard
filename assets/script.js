//global variables
var openWeatherID = '72bfe64c1cb155d61ffbf6dcd2577a1d';

//html variables for searching
var citySearch = document.querySelector('#citySearch');
var cityInput = document.querySelector('#cityInput');
var previousSearches = document.querySelector('#previousSearches');
var cityContainer = document.querySelector('cityContainer');

//search for the city based on user's search input
function searchInput(event) {
    event.preventDefault()
    currentWeatherAPI(cityInput.val())
}

//fetch api function for city name
function currentWeatherAPI(cityName) {
    var url = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${cityName}&appid=${openWeatherId}';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        cityName = data.name;
        callUVIndex(cityName, data.coord.lon, data.coord.lat);
        previousSearches(cityName, false);
        })
    .catch(error => {
        console.error('Error:', error);
    });

    return;
}


//fetch api based on lat & Long results from city name search




//current weather search (city, date, time, icon, temp, humidity, wind, uv)
//Change color for un index alerts



//future forecast card section (5 days, date, icon, temp, humidity, wind, uv)



//save to local storage



//retrieve from local storage


//init()