var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=0ed7ee275eef2d8b5bd098a35449f8a4";
var city = document.querySelector("#citySearch");
var searchBtnEl = document.querySelector("#searchBtn");
var getCoordinates = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=0ed7ee275eef2d8b5bd098a35449f8a4";
var cityList = document.querySelector("#cityList");


function displayCities() {
  const citiesList = document.querySelector(".list-group");
  citiesList.innerHTML = "";
}

function citySearch() {
  searchBtnEl.addEventListener("click", function () {
    var cityValue = city.value;
    console.log(cityValue);
    localStorage.setItem(cityValue, cityValue);
    city.value = "";

    var newCityBtn = document.createElement("button");
    newCityBtn.setAttribute("class", "list-group-item list-group-item-action");
    newCityBtn.setAttribute("type", "button");
    newCityBtn.textContent = cityValue;
    cityList.appendChild(newCityBtn);
  });

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key !== "test") {
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

