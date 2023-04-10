var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=0ed7ee275eef2d8b5bd098a35449f8a4"
var getCoordinates = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=0ed7ee275eef2d8b5bd098a35449f8a4"
var city = "Minneapolis"

function citySearch(getCoordinates){
    fetch(getCoordinates)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
}

// function getApi(requestUrl) {
//     fetch(requestUrl)
//       .then(function (response) {
//         console.log(response);
//         if (response.status === 200) {
//           responseText.textContent = response.status;
//         }
//         return response.json();
//     });
//   }