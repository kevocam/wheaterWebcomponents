 
let containerMain = document.querySelector(".container__main");
const containerDetails = document.querySelector(".container__today--items");
const containerHistorial = document.querySelector(".container__details");

const item = document.createElement("detail-main");
const itemSmall = document.createElement("detail-small");
const itemBig = document.createElement("detail-big");
let data="";
let dias=["lunes", "martes"]

var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();

   let RenderCity = (city)=>{
       
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b9d5356c23b0e624f7e214ac8116221&lang=sp&units=metric`)
    .then(response=> response.json()) 
    .then(dataCity=>{ 
        containerMain.innerHTML= `<detail-main ubication="${dataCity.name}" date="${f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()}" temp="${dataCity.main.temp}" type="${dataCity.weather[0].main}" > </detail-main>`
        containerDetails.innerHTML=`        
        <detail-big title="Max Temperatura" content="${dataCity.main.temp_max}" footer=""></detail-big>           
        <detail-big title="Min Temperatura" content="${dataCity.main.temp_min}" footer=""></detail-big>
        <detail-big title="Presion" content="${dataCity.main.pressure}" footer=""></detail-big>
        <detail-big title="Viento" content="${dataCity.wind.speed}" footer=""></detail-big>        `
        historial(`${dataCity.coord.lon}`, `${dataCity.coord.lat}`)
     })
    }
    RenderCity("Lima")
    
     let historial = (long, lat) => {
     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=hourly,current,minutely,alerts&appid=2b9d5356c23b0e624f7e214ac8116221&lang=sp`)
    .then(response=> response.json()) 
    .then(dataCity=>{ 
       console.log(dataCity)
        dataCity.daily.forEach(element => {            
            let item =document.createElement("detail-small")
            item.setAttribute("mTemp", `${element.temp.max}`)
            item.setAttribute("miTemp", `${element.temp.min}`)
            item.setAttribute("date", `${element.weather[0].description}`)
            containerHistorial.appendChild(item);            
        });
     })

}


let input = document.querySelector("#input");
let btn = document.querySelector("#btn");


btn.addEventListener("click", () => {
   
    let garbage = document.querySelector(".container__details"); 
    garbage.innerHTML="";
    RenderCity(input.value)


})
       
let gps = document.querySelector("#gps")    
gps.addEventListener("click", geoFindMe)
    
function geoFindMe() {
    var output = document.getElementById("out");
  
    if (!navigator.geolocation){
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }
  
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
      historial(longitude, latitude);
      var img = new Image();
      img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
  
      output.appendChild(img);
    };
  
    function error() {
      output.innerHTML = "Unable to retrieve your location";
    };
  
    output.innerHTML = "<p>Locating…</p>";
  
    navigator.geolocation.getCurrentPosition(success, error);
  }
  

 