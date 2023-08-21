'use strict'

// Selecciona todas las imagenes con la clase "picture", y la almacena en la variable 'pictures'
const pictures = document.querySelectorAll('.picture');

// Utiliza el metodo 'forEach' para iterar a traves de cada imagen en la lista de 'pictures'
pictures.forEach(function(picture) {
    
    //Agrega un escuchador de eventos para el click en la imagen actual
    picture.addEventListener('click', function() { 
        
        //Llama a la funcion(removeActive) para remover la clase 'active' de todas las imagenes
        removeActive();

        //Agrega la clase 'active' a la imagen actual
        picture.classList.add('active');
    });
});


//Funcion para eliminar la clase 'active' de todas las imagenes
function removeActive() {

    // Itera a traves de todas las imagenes en la lista 'pictures'
    pictures.forEach(function(picture) {

        //Elimina la clase 'active' de la imagen actual
        picture.classList.remove('active')
    })
};