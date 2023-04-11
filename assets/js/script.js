var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=0ed7ee275eef2d8b5bd098a35449f8a4";
var city = document.querySelector("#citySearch");
var searchBtnEl = document.querySelector("#searchBtn");
var getCoordinates = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=0ed7ee275eef2d8b5bd098a35449f8a4";

function citySearch(){
  searchBtnEl.addEventListener("click", function(){
    var cityValue = city.value;
    console.log(cityValue);
    localStorage.setItem(cityValue, cityValue)
  })
}
citySearch()


// fetch(getCoordinates)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

