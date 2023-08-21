const pictures = document.querySelectorAll('.picture');

const pictureArray = [
    './img/img-1.jpg', 
    './img/img-2.jpg', 
    './img/img-3.jpg', 
    './img/img-4.jpg', 
    './img/img-5.jpg'
];

pictures.forEach(function(picture, index) {

    setPictureBg(picture, pictureArray[index])

    picture.addEventListener('click', function() {
        removeActive();
        picture.classList.add('active');
    })
});

function removeActive() {
    pictures.forEach(function(picture) {
        picture.classList.remove('active')
    })
};

function setPictureBg(picture, imagenUrl) {
    picture.style.backgroundImage = `url(${imagenUrl})`;
} 