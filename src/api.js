 
const container = document.querySelector(".container__main");
const containerDetails = document.querySelector(".container__details");
let back ="";
const containerBig =document.querySelector(".container__today--items");
const item = document.createElement("detail-main");
const itemSmall = document.createElement("detail-small");
const itemBig = document.createElement("detail-big");

let historial = []; 

var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();

    fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=lima")
    .then(response=> response.json()) 
    .then(dataCity=>{ 
        console.log(dataCity)
        
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${dataCity[0].woeid}`)
        .then(response=> response.json()) 
        .then(dataGps=>{ 
       
        container.innerHTML = `<detail-main temp="${dataGps.consolidated_weather[0].the_temp}" ubication="${dataCity[0].title}" date="${dataGps.consolidated_weather[0].applicable_date}" type="${dataGps.consolidated_weather[0].weather_state_name}"></detail-main> ` 
        
        containerBig.innerHTML=`<detail-big title="Wind Speed" content="${dataGps.consolidated_weather[0].wind_speed}" footer=""> </detail-big>
                                <detail-big title="Humidity" content="${dataGps.consolidated_weather[0].humidity}" footer=""> </detail-big>
                                <detail-big title="Visibility" content="${dataGps.consolidated_weather[0].visibility}" footer=""> </detail-big>
                                <detail-big title="Air Pressure" content="${dataGps.consolidated_weather[0].air_pressure}" footer=""> </detail-big>                                
        `
        historial = dataGps.consolidated_weather;
/*         console.log(historial)
 */
           
            
            }) 
            historial.forEach(element => {
                back = `<detail-small ntemp="${element.max_temp}" mitemp="${element.min_temp}" ></detail-small>` + back;
            }); 
     })