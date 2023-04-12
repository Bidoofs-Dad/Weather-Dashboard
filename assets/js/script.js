var city = document.querySelector("#citySearch");
var searchBtnEl = document.querySelector("#searchBtn");
var cityList = document.querySelector("#cityList");





function displayCities() {
  const citiesList = document.querySelector(".list-group");
  citiesList.innerHTML = "";
}

function citySearch() {
  searchBtnEl.addEventListener("click", function () {
    var cityValue = city.value;
    localStorage.setItem(cityValue, cityValue);
    city.value = "";

    var newCityBtn = document.createElement("button");
    newCityBtn.setAttribute("class", "list-group-item list-group-item-action");
    newCityBtn.setAttribute("type", "button");
    newCityBtn.textContent = cityValue;
    cityList.appendChild(newCityBtn);

    function test() {
      var getCoordinates = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&units=imperial&appid=0ed7ee275eef2d8b5bd098a35449f8a4";
      fetch(getCoordinates)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          var today = dayjs().format('MM/DD/YYYY');
          var cityNameEl = document.querySelector("#cityName");
          var tempTodayEl = document.querySelector("#tempToday");
          var windTodayEl = document.querySelector("#windToday");
          var humidityTodayEl = document.querySelector("#humidityToday");

          cityNameEl.textContent = data.city.name + " (" + today + ") " + data.list[0].weather[0].icon
          tempTodayEl.textContent = "Temp: " + data.list[0].main.temp + " \u00B0F"
          windTodayEl.textContent = "Wind: " + data.list[0].wind.speed
          humidityTodayEl.textContent = "Humidity: " + data.list[0].main.humidity

          var nextDate1El = document.querySelector("#nextDate1");
          var nextDate2El = document.querySelector("#nextDate2");
          var nextDate3El = document.querySelector("#nextDate3");
          var nextDate4El = document.querySelector("#nextDate4");
          var nextDate5El = document.querySelector("#nextDate5");

          nextDate1El.textContent = dayjs().add(1, 'day').format('MM/DD/YYYY');
          nextDate2El.textContent = dayjs().add(2, 'day').format('MM/DD/YYYY');
          nextDate3El.textContent = dayjs().add(3, 'day').format('MM/DD/YYYY');
          nextDate4El.textContent = dayjs().add(4, 'day').format('MM/DD/YYYY');
          nextDate5El.textContent = dayjs().add(5, 'day').format('MM/DD/YYYY');
          
          
        });
    }
    test();


  });
  

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key !== "") {
      var newCityBtn = document.createElement("button");
      newCityBtn.setAttribute("class", "list-group-item list-group-item-action");
      newCityBtn.setAttribute("type", "button");
      newCityBtn.textContent = localStorage.getItem(key);
      cityList.appendChild(newCityBtn);
    }
  }
}
citySearch()



//<!-- <a href="#" class="list-group-item list-group-item-action"></a> -->

// fetch(getCoordinates)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

