// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

//agregar amigo, usando la tecla 'Enter'
document.querySelector('#amigo').addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
        agregarAmigo();
    }
});

//esta funcion es el evento onclik del boton agregar amigo
function agregarAmigo(){
    //se captura el valor del input y se guarda en una variable
    let nombreDeAmigo = document.getElementById('amigo').value; 
    // poner la primera letra del nombre con mayuscula
    nombreDeAmigo = nombreDeAmigo.charAt(0).toUpperCase() + nombreDeAmigo.slice(1).toLowerCase();
    
    // condicion de datos de entrada
    if (nombreDeAmigo != ''){
        //se agrega nombre de amigo a la lista
        listaDeAmigos.push(nombreDeAmigo);
        limpiarInput();
        mostrarLista();
        
    }else {
        alert('PORFAVOR INGRESAR UN NOMBRE VALIDO');
    }
    return;
}
    
// trabajamos con el boton sortear amigos
function sortearAmigo(){            
    //nos aseguramos que la lista esta  vacia
    let ul = document.getElementById('listaAmigos');
    //ul.innerHTML = ''; ..................
    //condicionamos cantidad minima de sorteos 2
    if (listaDeAmigos.length === 0 || listaDeAmigos.length===1 ){
        alert('DEBES INGRESAR AL MENOS DOS NOMBRES PARA SORTEAR');
    }else{
        //se sortea el nombre en  nuestra lista
        let amigoSecreto = Math.floor(Math.random()* listaDeAmigos.length)
        //mostramos el resultado en la etiqueta ul 
        let ul2 = document.getElementById('resultado');
        ul2.innerHTML = '';
        let li2 = document.createElement('li');
        li2.textContent = `Tu amigo secreto es: ${listaDeAmigos[amigoSecreto]}`;
        ul2.appendChild(li2);
        //se desactiva el boton, para que haya solo un sorteo.
        //document.getElementById('sorteaAmigo').setAttribute('disabled', 'true');.....
        //activar el boton de nuevo sorteo
        document.getElementById('nuevosSorteos').removeAttribute('disabled');
        console.log(amigoSecreto);
        return;
    } 
}

function limpiarInput (){
    document.getElementById('amigo').value = ''; 
    //fijamos el cursor en el input
    document.getElementById('amigo').focus();
    
}

//nuevo sorteo
function sorteoNuevo(){
    listaDeAmigos= [];
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; 
    let ul2 = document.getElementById('resultado');
    ul2.innerHTML = '';
    document.getElementById('sorteaAmigo').removeAttribute('disabled');

}

// muestra la lista en la pantalla del navegador
function mostrarLista(){
    //se identifica la etiqueta <ul>
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // sin elementos

    // se recorre nuestra lista cn el metodo .forEach
    listaDeAmigos.forEach(amigo => {
        let li = document.createElement('li')
        li.textContent = amigo;
        ul.appendChild(li);
        });
    return;
}

let desarrollador = document.getElementById('desarrollador');
desarrollador.innerHTML='by: Richar A. Soto'

