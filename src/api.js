 
let container = document.querySelector(".aside");
const item = document.createElement("detail-main");
const itemSmall = document.createElement("detail-small");
const itemBig = document.createElement("detail-big");

 

var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();

function getcity(city){
    return  fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
    .then(response=> response.json()) 
    .then(data=>{     
        item.setAttribute("ubication", data.woeid);
        item.setAttribute("temp", data.main.temp);
        item.setAttribute("ubication", data.sys.id);
        item.setAttribute("type", data.weather[0].main );
        item.setAttribute("date", f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
        container.append(item);
        fetch(`https://www.metaweather.com/api/location/${data.id}/`)
        .then(response => response.json())
        .then(dataSmall => {
            console.log(dataSmall)
            /* itemSmall.setAttribute("date",dataSmall.) */
            
            
/*             date="Tomorrow" mtemp="16" mitemp="11" type="show" 
 */        })

    })
    .catch(error => console.log(error))

}
getcity("Bogota")



 /* let getCity= (city) => {
   return  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=2b9d5356c23b0e624f7e214ac8116221`)
        .then(response=> response.json()) 
        .then(data=>{
         
            item.setAttribute("ubication", data.name);
            item.setAttribute("temp", data.main.temp);
            item.setAttribute("ubication", data.name);
            item.setAttribute("type", data.weather[0].main  );

            item.setAttribute("date", f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

            container.append(item);

        })
        .catch(error => console.log(error))
 }
 */

       
    
    


 