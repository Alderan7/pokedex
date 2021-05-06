/**var xmlhttp = new XMLHttpRequest();

                    xmlhttp.onreadystatechange = function () {
                    var miObj = JSON.parse(this.responseText);   
                    //function capturar(){
                    //   var cantidad=document.getElementById("numero").value;
                    //   return cantidad;
                    //}                 
                    pagina="https://assets.pokemon.com/assets/cms2/img/pokedex/full/"
                    for (let index = 1; index <=20; index++) {
                        if (index<=9){
                            document .getElementById( "pokedex" ).innerHTML += "<div class=\"pokemon\"><a class=\"poke\" href=\"#miModal\"><img src=" + pagina + "00" + index + ".png" + " width=200px height=200px><p>" + miObj.results[index-1].name + "</p></a></div>";
                        }
                        else if ((index>9) && (index<=99)){
                            document .getElementById( "pokedex" ).innerHTML += "<div class=\"pokemon\"><a class=\"poke\" href=\"#miModal\"><img src=" + pagina + "0" + index + ".png" + " width=200px height=200px><p>" + miObj.results[index-1].name + "</p></a></div>";
                        } 
                        else if (index>=100){
                            document .getElementById( "pokedex" ).innerHTML += "<div class=\"pokemon\"><a class=\"poke\" href=\"#miModal\"><img src=" + pagina + index + ".png" + " width=200px height=200px><p>" + miObj.results[index-1].name + "</p></a></div>";
                        } 
                        //if (index<=9){
                        //    document .getElementById( "pokedex" ).innerHTML += "<div class=\"pokemon\"><a class=\"poke\" href=\"#miModal\"><img src=" + pagina + "00" + index + ".png" + " width=200px height=200px><p>" + miObj.results[index-1].name + "</p></a></div>";
                            //document .getElementById( "pokedex" ).innerHTML += "<div id=\"miModal\" class=\"modal\"><div class=\"modal-contenido\"><a href=\"#\">X</a><h2>"+ miObj.results[index-1].name + "</h2><h3>Habilidad</h3></div> </div>";
                        //}
                        //else if (index>9 && index<=99){
                        //    document .getElementById( "pokedex" ).innerHTML += "<div class=\"pokemon\"><a class=\"poke\" href=\"#miModal\"><img src=" + pagina + "0" + index + ".png" + " width=200px height=200px><p>" + miObj.results[index-1].name + "</p></a></div>";
                            //document .getElementById( "pokedex" ).innerHTML += "<div id=\"miModal\" class=\"modal\"><div class=\"modal-contenido\"><a href=\"#\">X</a><h2>"+ miObj.results[index-1].name + "</h2><p>Habilidad</p></div> </div>";
                        //} 
                        //else if (index==100){
                        //    document .getElementById( "pokedex" ).innerHTML += "<div class=\"pokemon\"><a class=\"poke\" href=\"#miModal\"><img src=" + pagina + index + ".png" + " width=200px height=200px><p>" + miObj.results[index-1].name + "</p></a></div>";
                            //document .getElementById( "pokedex" ).innerHTML += "<div id=\"miModal\" class=\"modal\"><div class=\"modal-contenido\"><a href=\"#\">X</a><h2>"+ miObj.results[index-1].name + "</h2><p>Habilidad</p></div> </div>";
                        //}  
                        }
                    };
                    xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/",true);
                    xmlhttp.send();
*/

/**
 * Punto de inicio de la aplicación
 */
            
function procesar(){
    //var numero = window.location.search.valueOf("numero");
    document.getElementById( "pokedex" ).innerHTML ="";
    var numero=0;
    if(document.getElementById("numero").value!=""){                     
        numero = document.getElementById("numero").value;
    }else{
        numero=12
    } 
    crearGaleria(numero);
}

function crearGaleria(numero){

        pagina="https://assets.pokemon.com/assets/cms2/img/pokedex/full/"
        for (let index = 1; index <=numero; index++) {
            if (index<=9){
                document.getElementById( "pokedex" ).innerHTML += "<div class=\"pokemon\"><a class=\"poke\" onclick=\"obtenerNombreImagen(" + index +")\" href=\"#miModal\"><img src=" + pagina + "00" + index + ".png" + " width=200px height=200px><p id=\""+index+"\"></p></a></div>";
                obtenerNombre(index);
            }
            else if ((index>9) && (index<=99)){
                document.getElementById( "pokedex" ).innerHTML += "<div class=\"pokemon\"><a class=\"poke\" onclick=\"obtenerNombreImagen("+ index +")\" href=\"#miModal\"><img src=" + pagina + "0" + index + ".png" + " width=200px height=200px><p id=\""+index+"\"></p></a></div>";
                obtenerNombre(index);
            } 
            else if (index>=100){
                document.getElementById( "pokedex" ).innerHTML += "<div class=\"pokemon\"><a class=\"poke\"  onclick=\"obtenerNombreImagen("+ index +")\" href=\"#miModal\"><img src=" + pagina + index + ".png" + " width=200px height=200px><p id=\""+index+"\"></p></a></div>"; 
                obtenerNombre(index);
            } 
        }     
     }


function obtenerNombre(numeroImagen) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if ( this .readyState == 4 && this .status == 200 ) {
            //Obtenemos el JSON y lo pasamos a un objeto Javascript
            var miObj = JSON.parse(this.responseText); 
            var nombre = miObj.forms[0].name
            document.getElementById(numeroImagen).innerHTML=nombre;
        }
    } 
    xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+numeroImagen,true);
    xmlhttp.send(true);

} 

/**function obtenerPokemon () {
    document .getElementById( "info" ).innerHTML=" ";
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
        if ( this .readyState == 4 && this .status == 200 ) {
        //Obtenemos el JSON y lo pasamos a un objeto Javascript
        var miObj = JSON .parse( this .responseText);
        //Recorremos el array de habilidades
            for ( let index = 0 ; index < miObj.abilities.length;index++) {
                document .getElementById( "info" ).innerHTML=miObj.abilities[index].ability.name + "</br>" ;
            }
        }
        };
    xmlhttp.open( "GET" , "https://pokeapi.co/api/v2/pokemon/ditto" ,true );
    xmlhttp.send();
}*/

function obtenerNombreImagen(numero){
    pagina="https://assets.pokemon.com/assets/cms2/img/pokedex/full/"
    document .getElementById( "imagen" ).innerHTML= " ";
    document .getElementById( "info" ).innerHTML=" ";
    //document.getElementById( "info" ).innerHTML=numero;    
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
        if ( this .readyState == 4 && this .status == 200 ) {
        //Obtenemos el JSON y lo pasamos a un objeto Javascript
        var miObj = JSON .parse( this .responseText);
        //Recorremos el array de habilidades
        if (numero<=9){
            document .getElementById( "imagen" ).innerHTML+="<img src=" + pagina + "00" + numero + ".png" + " width=150px height=150px>";
        }else if ((numero>9) && (numero<=99)){
            document .getElementById( "imagen" ).innerHTML+="<img src=" + pagina + "0" + numero + ".png" + " width=150px height=150px>"; 
        }else if (numero>=100){    
            document .getElementById( "imagen" ).innerHTML+="<img src=" + pagina + numero + ".png" + " width=150px height=150px>"; 
        }
        document .getElementById( "info" ).innerHTML+="<h2 id=\"titulo\">" + miObj.forms[0].name + "</h2></br>"   
        document .getElementById( "info" ).innerHTML+="<span>Habilidades:</span>"
            for ( let index = 0 ; index < miObj.abilities.length;index++) {
                document .getElementById( "info" ).innerHTML+=miObj.abilities[index].ability.name +  " " ;
            }
            document .getElementById( "info" ).innerHTML+="</br>"
            document .getElementById( "info" ).innerHTML+="<span>Peso:</span>" + miObj.weight + " kg</br>"
            document .getElementById( "info" ).innerHTML+="<span>Altura:</span>" + miObj.height + " m</br>"
        }
        };
    xmlhttp.open( "GET" , "https://pokeapi.co/api/v2/pokemon/" + numero,true );
    xmlhttp.send();
}


/**var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};

xhr.send(null);*/



