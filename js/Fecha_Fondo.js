/*
    ------------------------
        VARIABLE GLOBALES
    ------------------------

*/

// Variables de extraer fecha del reloj de la compu
var Dia_de_la_semana = new Date();
var resultado_final = Dia_de_la_semana.getDay();

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
    --------------------
        FUNCIONES
    -------------------

*/



if (resultado_final ==  1) 
    {
        document.write(`Día Lunes - Negro - comienza el estres jaja`);
        document.body.style.backgroundColor = "black";
    }

if (resultado_final ==  2) 
    {
        document.write(`Día Martes - Verde - paz con la naturaleza`);
        document.body.style.backgroundColor = "green";
    }

if (resultado_final ==  3) 
    {
        document.write(`Día Miercoles - Lila -  color del Rey`);
        document.body.style.backgroundColor = "purple";
    }

if (resultado_final ==  4) 
    {
        document.write(`Día Jueves - Naranja - Color del cambio`);
        document.body.style.backgroundColor = "orange";
    }

if (resultado_final ==  5) 
    {
        document.write(`Día Viernes - Azul - Tranquilidad`);
        document.body.style.backgroundColor = "blue";
    }

if (resultado_final ==  6) 
    {
        document.write(`Día Sabado - Amarillo -  Color de la Felicidad`);
        document.body.style.backgroundColor = "yellow";
    }
    
if (resultado_final ==  7) 
    {
        document.write(`Día Domingo - Blanco - Cerebro en blanco`);
        document.body.style.backgroundColor = "white";
    }
    



    


    


    





/*
    ----------------
        EVENTOS
    ----------------
*/




/*
    ------------------------------------
        ALTERNATIVA PRESIONANDO BOTONES
    -------------------------------------
*/


/*
    Vizualizar colores elegidos  para cada día 
*/

lunes.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "black";
    });

martes.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "green";
    });

miercoles.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "purple";
    });
Jueves.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "orange";
    });

viernes.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "blue";
    });

sabado.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "yellow";
    });

domingo.addEventListener("click", function () 
    {
        document.body.style.backgroundColor = "white";
    });

















