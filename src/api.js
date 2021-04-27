 
let container = document.querySelector(".aside");
const item = document.createElement("detail-main");
const itemSmall = document.createElement("detail-small");
const itemBig = document.createElement("detail-big");

 

var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();

    fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=Bogota")
    .then(response=> response.json()) 
    .then(dataCity=>{ 
        console.log(dataCity)
        /* item.setAttribute("ubication", dataCity[0].title ) */

        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=50.068,-5.316`)
            .then(response=> response.json()) 
            .then(dataGps=>{ 

                console.log(dataGps)
                fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${dataGps[0].woeid}`)
                .then(response=> response.json()) 
                .then(dataGps=>{ 
    
                    console.log(dataGps)
                })
    
    
        
         
            })


     })
     
    
     




       
    
    


 