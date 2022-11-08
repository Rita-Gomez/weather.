 const displayData = (data)=>{
  console.log(data)
  return document.querySelector('.display').innerHTML = 
  `<h1 style="font-size:3rem">${data.name}</h1>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" width="70px" height="70px" text-align="center">
  <h2 style="font-size: 3rem;">${data.main.temp} ºC </h2>
  <p class="description">${data.weather[0].description}</p>
  <p class="description">Humedad : ${data.main.humidity} % </p>`
  
  /*weather:[{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}] 
  main :{
    humidity: 27
    temp: 30.92
  }
 name:"Qatar" */

} 