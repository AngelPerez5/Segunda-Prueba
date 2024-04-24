//Asigno un div en el que se guarde el juego
const div = document.getElementById('juego');
var arrFil = [6];
var arrCol = [7];
var contador = 0;
var contadorClick = 0;
a=[5,5,5,5,5,5,5]
function cuatroEnRaya() {
    const tabla = document.createElement('table');

    for (let i = 5; i > 0; i--) {

        //Crear fila (en total hay 6)
        const fila = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            //Crear celda (7 x fila)
            const celda = document.createElement('td');
            celda.id = contador;
            contador ++;
            //Insertar la celda a la fila
            fila.appendChild(celda);
            celda.addEventListener('click', function(){
                var selectColl = j;
                console.log(selectColl);
                console.log(celda.id)
                contadorClick ++;
        

        if(contadorClick % 2 == 0 ){
            
                    if(celda.style.background!="yellow"){
                    a[selectColl] --;
                    console.log(a);
                    //a[selectColl].style.display ="red"
                    celda.style.background = "red"


                    }
                }else if(celda.style.background!="red"){
                    celda.style.background = "yellow"
                    a[selectColl] --;
                    console.log(a);


                }
            })

        }

        //Insertar fila a la tabla
        tabla.appendChild(fila);

    }

    //Insertar tabla en div
    div.appendChild(tabla);

}

cuatroEnRaya();
