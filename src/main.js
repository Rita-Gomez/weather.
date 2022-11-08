const displayData = (data) => {
  console.log(data);
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + data.name + "')";
  document.querySelector(
    ".display"
  ).innerHTML = `<h1 style="font-size:3rem">${data.name}</h1>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" width="70px" height="70px" text-align="center">
  <h2 style="font-size: 3rem;">${data.main.temp} ºC </h2>
  <p class="description">${data.weather[0].description}</p>
  <p class="description">Humedad : ${data.main.humidity} % </p>`;
};
const notFound = (err) => {
  return (document.querySelector(
    ".display"
  ).innerHTML = `<h1>Ups! Esta ciudad no existe</h1>`);
};
