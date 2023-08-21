'use stric'

// Selecciona el elemento con la clase 'container'
const container = document.querySelector('.container');

// En un array coloco objetos adentro para poder usar el 'forEach' e iterar cada uno de ellos
const sliderArray = [
    {
        id: 1,
        title: 'Imagen 1',
        url: './img/img-1.jpg',
    },
    {
        id: 2,
        title: 'Imagen 2',
        url: './img/img-2.jpg',
    },
    {
        id: 3,
        title: 'Imagen 3',
        url: './img/img-3.jpg',
    },
    {
        id: 4,
        title: 'Imagen 4',
        url: './img/img-4.jpg',
    },
    {
        id: 5,
        title: 'Imagen 5',
        url: './img/img-5.jpg',
    },
];

// Iterar a traves del array de imagenes y crear elementos para el slider
sliderArray.forEach(function(item, idx){

    //crea un 'div' para cada imagen del slider:
    const newDiv = document.createElement('div');

    // Le agrega a cada imagen las clases 'picture' y 'slide:
    newDiv.classList.add('slide', 'picture');

    // Si es la primera imagen[posicion 0] entonces agregale la clase 'active':
    if(idx === 0) {
        newDiv.classList.add('active');
    }

    // Agrega un elemento 'h3' a cada div:
    newDiv.innerHTML = `<h3>${item.title}</h3>`;

    // Agrega una imagen por cada slider:
    newDiv.style.backgroundImage = `url(${item.url})`;

    // Agrega cada div creado(con su imagen, estilos y titulo) al contenedor 'container';
    container.appendChild(newDiv);

    //Agrega un evento click para que la clase 'active' se active al hacer click
    newDiv.addEventListener('click', function(){

        // Llama a la funcion 'removeActive' para eliminar la clase 'active' de todas las imagenes 
        removeActive();

        //Agrega la clase 'active' al elemento actual(imagen clickeada)
        newDiv.classList.add('active');
    });
});

// Funcion para remover la clase 'active' de todas las imagenes
function removeActive() {
    // Selecciona todas las imagenes con la clase 'picture' y las almacena en una variable
    const pictureSlider = document.querySelectorAll('.picture');

    // Para poder remover la clase 'active' de cada imagen hay que iterar en cada una de ellas, por eso usamos un forEach
    pictureSlider.forEach(function(picture) {
        picture.classList.remove('active');
    });
};