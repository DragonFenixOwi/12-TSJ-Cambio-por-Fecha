/*
    ------------------------
        VARIABLE GLOBALES
    ------------------------

*/


/*
    Acceder a botones
*/
var lunes = document.getElementById("Lunes");
var martes = document.getElementById("Martes");
var miercoles = document.getElementById("Miercoles");
var jueves = document.getElementById("Jueves");
var viernes = document.getElementById("Viernes");
var sabado = document.getElementById("Sabado");
var domingo = document.getElementById("Domingo");



/*
    Modificando Estilo para botones
*/

/*
    ---------------
        ESTILO
    --------------
*/


//color del boton
lunes.style.backgroundColor = "#01698e";
martes.style.backgroundColor = "#01698e";
miercoles.style.backgroundColor = "#01698e";
jueves.style.backgroundColor = "#01698e";
viernes.style.backgroundColor = "#01698e";
sabado.style.backgroundColor = "#01698e";
domingo.style.backgroundColor = "#01698e";



/*
    ----------------
        EVENTOS
    ----------------
*/



lunes.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "green";
    });

martes.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "black";
    });

miercoles.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "blue";
    });
Jueves.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "purple";
    });

viernes.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "orange";
    });

sabado.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "yellow";
    });

domingo.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "white";
    });

















