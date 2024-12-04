carrossel.js
// Selecionando os elementos do carrossel
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

// Definindo o índice da imagem atual
let index = 0;

// Função para mudar as imagens automaticamente
function changeImage() {
    index++;

    // Verificando se o índice está além do número de imagens
    if (index >= images.length) {
        index = 0; // Volta para a primeira imagem
    }

    // Movendo o carrossel
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

// Intervalo de tempo para mudança de imagem (5 segundos)
setInterval(changeImage, 3000);

// Garantindo que o carrossel comece a partir da primeira imagem
window.onload = changeImage;
