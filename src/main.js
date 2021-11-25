import data from './data/ghibli/ghibli.js';
import {filterPeopleLocationsVehicles, sortData, ordenAlfabeticoAsc, ordenAlfabeticoDesc, ordenNumericoAsc, ordenNumericoDesc, sortPeopleLocationsVehicles, ordenNumericoAscL} from  './data.js';

let films = [];
films = data.films;
/*console.log (filterPeopleLocationsVehicles("people", films))*/

/*botones para  ingresar a cada seccion*/ 

  document.getElementById("filmografia").addEventListener("click", ()=>{
    document.getElementById("filmo").style.display="flex";
    document.getElementById("persona").style.display="none";
    document.getElementById("vehiculos").style.display="none";
    document.getElementById("locaciones").style.display="none";
    document.getElementById("portada").style.display="none";
  })
   
   document.getElementById("personajes").addEventListener("click", ()=> {
     document.getElementById("persona").style.display="flex";
     document.getElementById("filmo").style.display="none";
     document.getElementById("vehiculos").style.display="none";
     document.getElementById("locaciones").style.display="none";
     document.getElementById("portada").style.display="none";
   })
  
   
     document.getElementById("vehicles").addEventListener("click", ()=> {
     document.getElementById("vehiculos").style.display="flex";
     document.getElementById("filmo").style.display="none";
     document.getElementById("locaciones").style.display="none";
     document.getElementById("persona").style.display="none";
    document.getElementById("portada").style.display="none";
   })
   

   document.getElementById("locations").addEventListener("click", ()=> {
    document.getElementById("locaciones").style.display="flex";
    document.getElementById("filmo").style.display="none";
    document.getElementById("persona").style.display="none";
    document.getElementById("vehiculos").style.display="none";
    document.getElementById("portada").style.display="none";
  })
   /* boton para volver al principal*/
   document.getElementById("logo").addEventListener("click",()=>window.location.reload());


const conteinerScrollFilmo = document.getElementById("conteinerScrollFilmo");
const conteinerScrollPeople = document.getElementById("conteinerScrollPeople");
const conteinerScrollLocations = document.getElementById("conteinerScrollLocations");
const conteinerScrollVehicles = document.getElementById("conteinerScrollVehicles");

let btnContainerDirector= document.querySelector(".btnContainerDirector");
let btnContainerProducer=document.querySelector(".btnContainerProducer");
let btnContainerTerreno= document.querySelector(".btnContainerTerreno");
let btnContainerClima=document.querySelector(".btnContainerClima");
let btnContainerGenero= document.querySelector(".btnContainerGenero");

function filmoItems (films){
films.forEach((el) => {
  const createElement= document.createElement("div")
  createElement.setAttribute("class", 'contenedorCardFilm');
    const template= ` <div class = "conteinerTextFilm">
    <ul>
   <li>Titulo: ${el.title} </li>
   <li>Descripción: ${el.description}</li>
   <li>Productor: ${el.producer}</li>
   <li>Score: ${el.rt_score}</li>
   <li>Director ${el.director}</li>
   <li>Año: ${el.release_date}</li>
</ul>
</div>
<div class="box1"><img src= ${el.poster} id ="imgPosterFilm"></div> `;
 createElement.innerHTML= template
 conteinerScrollFilmo.appendChild(createElement);
 return template;
} )
}

filmoItems(films);

function peopleItems (callback) {
callback.forEach((el) => {    
  const createElement= document.createElement("div")
  createElement.setAttribute("class", 'contenedorCardPeople');
  const template1= `<div id= "divCardPeople">
  <div class="frontCard">
  <h4>${el.name} </h4>
  <div class="box2"><img src= ${el.img} id ="imgPosterPeople"></div> 
  </div>
  <div class="backCard">
  <ul>
  <li>Genero: ${el.gender}</li>
  <li>Color de Ojos: ${el.eye_color}</li>
  <li>Color de Cabello: ${el.hair_color}</li>
  <li>Especie: ${el.specie}</li>     
</ul>
</div>
</div>`;
createElement.innerHTML= template1;
conteinerScrollPeople.appendChild(createElement);
return template1;
});
}
peopleItems (filterPeopleLocationsVehicles("people", films).flat(1))

  function locationItems (callback) {
callback.forEach((el) => {    
  const createElement= document.createElement("div")
  createElement.setAttribute("class", 'contenedorCardLocations');
  const template2= `<div id= "divCardLocations">
  <p>${el.name} </p>
  <div class="box3"><img src= ${el.img} id ="imgPosterLocations"></div
  <ul>
  <li>Clima: ${el.climate}</li>
  <li>Terreno: ${el.terrain}</li>
  <li>Nivel del mar: ${el.surface_water}</li>
  <li>Residentes: ${el.residents.map((el) => el.name)}</li>     
</ul>
</div>`;
createElement.innerHTML= template2;
conteinerScrollLocations.appendChild(createElement);
return template2;
});
  }
locationItems(filterPeopleLocationsVehicles("locations", films).flat(2))

function vehicleItems (callback) {
callback.forEach((el) => {    
  const createElement= document.createElement("div");
  createElement.setAttribute("class", 'contenedorCardVehicles');
  const template3= `<div id= "divCardVehicles">
  <div class="frontCard4">
  <p> ${el.name} </p>
  <div class="box4"><img src= ${el.img} id ="imgPosterVehicles"></div>
  </div>
  <div class="backCard4">
  <ul>
  <li>Descripción: ${el.description}</li>
  <li>Tipo de Vehículo: ${el.vehicle_class}</li>
  <li>Largo: ${el.length}</li>
  <li>Piloto: ${el.pilot.name}</li>     
</ul>
</div>
</div>`;
createElement.innerHTML= template3;
conteinerScrollVehicles.appendChild(createElement);
return template3;
}); 
}

vehicleItems(filterPeopleLocationsVehicles("vehicles", films).flat(1))

const filterButtonsDirector = btnContainerDirector.querySelectorAll(".filterDirector")
const filterButtonsProducer = btnContainerProducer.querySelectorAll(".filterProducer")

//Funcion para filtrar por directores
filterButtonsDirector.forEach((el) => {  
  el.addEventListener("click",function(e) {
    const property= e.currentTarget.dataset.id;
    let newData= sortData(films,property,"director")
        conteinerScrollFilmo.innerHTML=" ";
        return filmoItems(newData)    
  })
  return filterButtonsDirector;
    })

//Funcion para filtrar por productores
filterButtonsProducer.forEach((el) => {  
  el.addEventListener("click",function(e) {
    const property= e.currentTarget.dataset.id;
    let newData= sortData(films,property,"producer")
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)    
  })
  return filterButtonsProducer;
   })

 //funcion para ordenar las peliculas alfabeticamente 
const filterButtonAsc =document.getElementById("asc");
const filterButtonDesc =document.getElementById("desc");

   filterButtonAsc.addEventListener("click",function() {
      let newData= ordenAlfabeticoAsc(films,"title")
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)   
    })

    filterButtonDesc.addEventListener("click",function() {
      let newData= ordenAlfabeticoDesc(films,"title")
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)   
    })

  //Funcion para ordenar score 
  
  const filterButtonScoreAsc =document.getElementById("scoreAsc");
  const filterButtonScoreDesc =document.getElementById("scoreDesc");

  filterButtonScoreAsc.addEventListener("click",function() {
      let newData=ordenNumericoDesc(films,"rt_score")
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)   
    })
    filterButtonScoreDesc.addEventListener("click",function() {
      let newData=ordenNumericoAsc(films,"rt_score")
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)   
    })

  //Funcion para ordenar año de lanzamiento
  
  const filterButtonYearAsc =document.getElementById("yearAsc");
  const filterButtonYearDesc =document.getElementById("yearDesc");

  filterButtonYearAsc.addEventListener("click",function() {
      let newData=ordenNumericoDesc(films,"release_date")
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)   
    })
    filterButtonYearDesc.addEventListener("click",function() {
      let newData=ordenNumericoAsc(films,"release_date")
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)   
    })


    //funcion para la barra de busqueda

    let formulario= document.getElementById("formulario"); 
    const boton= document.getElementById("boton");
//nuevo comentario
    const filtrar = () => {
      const texto= formulario.value.toLowerCase();
      const arrayFilms = [];
     //console.log("texto escrito", texto)
          films.forEach((film) => {
          let textTitle= film.title.toLowerCase();
         //console.log("titulo escrito", textTitle)
            if (textTitle.includes(texto)){
              arrayFilms.push(film)
            //conteinerScrollFilmo.innerHTML=" Lo encontraste";
            }
           /* else {
              console.log("no lo encontro")
            //conteinerScrollFilmo.innerHTML=" Lo sentimos pon algo";
           }*/
        })
        //console.log(arrayFilms)
        conteinerScrollFilmo.innerHTML=" ";
        filmoItems(arrayFilms) 
    }

    boton.addEventListener("click", filtrar)

    //Funcion para filtrar por clima
    const filterButtonsClima = btnContainerClima.querySelectorAll(".filterClima")

    filterButtonsClima.forEach((el) => {  
          el.addEventListener("click",function(e) {
            const property= e.currentTarget.dataset.id;
            let newData= sortPeopleLocationsVehicles(films,"locations",property,"climate")
            
            conteinerScrollLocations.innerHTML=" ";
                return locationItems(newData)    
          })
          return filterButtonsClima;
            })

     //Funcion para filtrar por terreno
     const filterButtonsTerreno = btnContainerTerreno.querySelectorAll(".filterTerreno")

     filterButtonsTerreno.forEach((el) => {  
      el.addEventListener("click",function(e) {
        const property= e.currentTarget.dataset.id;
        let newData= sortPeopleLocationsVehicles(films,"locations",property,"terrain")
        conteinerScrollLocations.innerHTML=" ";
            return locationItems(newData)    
      })
      return filterButtonsClima;
        })

      //boton clean
        document.getElementById("clean").addEventListener("click",function() {
          conteinerScrollLocations.innerHTML=" ";
          locationItems(filterPeopleLocationsVehicles("locations", films).flat(2))   
        })

      //filtrar por genero
      const filterButtonsGenero = btnContainerGenero.querySelectorAll(".filterGenero")

      filterButtonsGenero.forEach((el) => {  
      el.addEventListener("click",function(e) {
        const property= e.currentTarget.dataset.id;
        let newData= sortPeopleLocationsVehicles(films,"people",property,"gender")
        conteinerScrollPeople.innerHTML=" ";
            return peopleItems (newData)    
      })
      return filterButtonsGenero;
        })

        //filtrar por color de ojos
      /*const filterButtonsGenero = btnContainerGenero.querySelectorAll(".filterGenero")

      filterButtonsGenero.forEach((el) => {  
      el.addEventListener("click",function(e) {
        const property= e.currentTarget.dataset.id;
        let newData= sortPeopleLocationsVehicles(films,"people",property,"gender")
        conteinerScrollPeople.innerHTML=" ";
            return peopleItems (newData)    
      })
      return filterButtonsGenero;
        })*/


  //filtrar por lenght ascendente y descendente
  
  const filterButtonscoreAscL =document.getElementById("scoreAscL");
  //const filterButtonscoreDescL =document.getElementById("scoreDescL");

  filterButtonscoreAscL.addEventListener("click",function() {
      let newData=ordenNumericoAscL(films,"length","vehicles")
          conteinerScrollVehicles.innerHTML=" ";
          return vehicleItems(newData)   
    })
    

