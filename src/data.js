let weather = (city)=>{
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=bbf1293e8b911e028baf57b0d801f076")
  .then(response => response.json())
  .then(data => {
      displayData(data);
})}

document.getElementById('submit').addEventListener('click' , ()=>{
  return weather( document.getElementById('city').value);
})
 
document.getElementById("city").addEventListener("keyup",(event)=>{
  if (event.key == "Enter"){
    weather(document.getElementById('city').value);
  }}) 




    