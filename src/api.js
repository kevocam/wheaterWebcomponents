 
let containerMain = document.querySelector(".container__main");
const containerDetails = document.querySelector(".container__today--items");
const item = document.createElement("detail-main");
const itemSmall = document.createElement("detail-small");
const itemBig = document.createElement("detail-big");

 

var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();

   let RenderCity = (city)=>{
       
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b9d5356c23b0e624f7e214ac8116221&lang=sp&units=metric`)
    .then(response=> response.json()) 
    .then(dataCity=>{ 
        console.log(dataCity)
        containerMain.innerHTML= `<detail-main ubication="${dataCity.name}" date="${f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()}" temp="${dataCity.main.temp}" type="${dataCity.weather[0].main}" > </detail-main>`
        containerDetails.innerHTML=`
        
        
        
        <detail-big title="Max Temperatura" content="${dataCity.main.temp_max}" footer""></detail-big>

           
        <detail-big title="Min Temperatura" content="${dataCity.main.temp_min}" footer""></detail-big>
        <detail-big title="Presion" content="${dataCity.main.pressure}" footer""></detail-big>

        <detail-big title="Viento" content="${dataCity.wind.speed}" footer""></detail-big>
        `

     })
    }
    RenderCity("Lima")
     
    
     




       
    
    


 