var city = document.querySelector("#citySearch");
var searchBtnEl = document.querySelector("#searchBtn");
var cityList = document.querySelector("#cityList");
var today = dayjs().format('MM/DD/YYYY');

//This block of ids just make it so you can see today's date as well as the next five dates in their respective spots
$("#cityName").text("City Name (" + today + ")");
$("#nextDate1").text(dayjs().add(1, 'day').format('MM/DD/YYYY'));
$("#nextDate2").text(dayjs().add(2, 'day').format('MM/DD/YYYY'));
$("#nextDate3").text(dayjs().add(3, 'day').format('MM/DD/YYYY'));
$("#nextDate4").text(dayjs().add(4, 'day').format('MM/DD/YYYY'));
$("#nextDate5").text(dayjs().add(5, 'day').format('MM/DD/YYYY'));

//This is the whole function
function citySearch() {
  //This makes it so once you press the search button, it clears the text box and sets the city name in local storage
  searchBtnEl.addEventListener("click", function () {
    var cityValue = city.value;
    localStorage.setItem(cityValue, cityValue);
    city.value = "";

    var newCityBtn = document.createElement("button");
    newCityBtn.setAttribute("class", "list-group-item list-group-item-action");
    newCityBtn.setAttribute("type", "button");
    newCityBtn.textContent = cityValue;
    cityList.appendChild(newCityBtn);

    //This is the function that calls the api and pulls its data from it, then populating it into the designated spots
    function cityData() {
      var cityUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&units=imperial&appid=0ed7ee275eef2d8b5bd098a35449f8a4";
      fetch(cityUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          $("#cityName").text(data.city.name + " (" + today + ") ");
          $("#iconToday").attr("src", "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png");
          $("#tempToday").text("Temp: " + data.list[0].main.temp + " \u00B0F");
          $("#windToday").text("Wind: " + data.list[0].wind.speed + " MPH");
          $("#humidityToday").text("Humidity: " + data.list[0].main.humidity + " %");

          $("#nextIcon1").attr("src", "http://openweathermap.org/img/w/" + data.list[5].weather[0].icon + ".png");
          $("#nextIcon2").attr("src", "http://openweathermap.org/img/w/" + data.list[13].weather[0].icon + ".png");
          $("#nextIcon3").attr("src", "http://openweathermap.org/img/w/" + data.list[21].weather[0].icon + ".png");
          $("#nextIcon4").attr("src", "http://openweathermap.org/img/w/" + data.list[29].weather[0].icon + ".png");
          $("#nextIcon5").attr("src", "http://openweathermap.org/img/w/" + data.list[37].weather[0].icon + ".png");

          $("#nextTemp1").text(data.list[0].main.temp + " \u00B0F");
          $("#nextTemp2").text(data.list[13].main.temp + " \u00B0F");
          $("#nextTemp3").text(data.list[21].main.temp + " \u00B0F");
          $("#nextTemp4").text(data.list[29].main.temp + " \u00B0F");
          $("#nextTemp5").text(data.list[37].main.temp + " \u00B0F");

          $("#nextWind1").text(data.list[5].wind.speed + " MPH");
          $("#nextWind2").text(data.list[13].wind.speed + " MPH");
          $("#nextWind3").text(data.list[21].wind.speed + " MPH");
          $("#nextWind4").text(data.list[29].wind.speed + " MPH");
          $("#nextWind5").text(data.list[37].wind.speed + " MPH");

          $("#nextHumid1").text(data.list[5].main.humidity + " %");
          $("#nextHumid2").text(data.list[13].main.humidity + " %");
          $("#nextHumid3").text(data.list[21].main.humidity + " %");
          $("#nextHumid4").text(data.list[29].main.humidity + " %");
          $("#nextHumid5").text(data.list[37].main.humidity + " %");
        });
    }
    cityData();


  });

//This for loop takes the search history buttons and uses thier textContent to run the fetch request again,
//I had to define newCityBtn again in here for it to work properly
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key !== "") {
      var newCityBtn = document.createElement("button");
      newCityBtn.setAttribute("class", "list-group-item list-group-item-action");
      newCityBtn.setAttribute("type", "button");
      newCityBtn.textContent = localStorage.getItem(key);
      cityList.appendChild(newCityBtn);

      newCityBtn.addEventListener("click", function () {
        var cityValue = this.textContent;

        var cityUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&units=imperial&appid=0ed7ee275eef2d8b5bd098a35449f8a4";
        fetch(cityUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            
            $("#cityName").text(data.city.name + " (" + today + ") ");
            $("#iconToday").attr("src", "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png");
            $("#tempToday").text("Temp: " + data.list[0].main.temp + " \u00B0F");
            $("#windToday").text("Wind: " + data.list[0].wind.speed + " MPH");
            $("#humidityToday").text("Humidity: " + data.list[0].main.humidity + " %");

            $("#nextIcon1").attr("src", "http://openweathermap.org/img/w/" + data.list[5].weather[0].icon + ".png");
            $("#nextIcon2").attr("src", "http://openweathermap.org/img/w/" + data.list[13].weather[0].icon + ".png");
            $("#nextIcon3").attr("src", "http://openweathermap.org/img/w/" + data.list[21].weather[0].icon + ".png");
            $("#nextIcon4").attr("src", "http://openweathermap.org/img/w/" + data.list[29].weather[0].icon + ".png");
            $("#nextIcon5").attr("src", "http://openweathermap.org/img/w/" + data.list[37].weather[0].icon + ".png");

            $("#nextTemp1").text(data.list[0].main.temp + " \u00B0F");
            $("#nextTemp2").text(data.list[13].main.temp + " \u00B0F");
            $("#nextTemp3").text(data.list[21].main.temp + " \u00B0F");
            $("#nextTemp4").text(data.list[29].main.temp + " \u00B0F");
            $("#nextTemp5").text(data.list[37].main.temp + " \u00B0F");

            $("#nextWind1").text(data.list[5].wind.speed + " MPH");
            $("#nextWind2").text(data.list[13].wind.speed + " MPH");
            $("#nextWind3").text(data.list[21].wind.speed + " MPH");
            $("#nextWind4").text(data.list[29].wind.speed + " MPH");
            $("#nextWind5").text(data.list[37].wind.speed + " MPH");

            $("#nextHumid1").text(data.list[5].main.humidity + " %");
            $("#nextHumid2").text(data.list[13].main.humidity + " %");
            $("#nextHumid3").text(data.list[21].main.humidity + " %");
            $("#nextHumid4").text(data.list[29].main.humidity + " %");
            $("#nextHumid5").text(data.list[37].main.humidity + " %");
          });
      })
    }
  }
}

citySearch()