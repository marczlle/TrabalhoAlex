script.js
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}
/* =================================== */

/*  para que o active serve? indicar qual pagina do cabeçalho está com um sublinhamento no header  */

const chk = document.getElementById("chk");
chk.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const chk = document.getElementById("chk");
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        body.classList.add("dark");
        chk.checked = true;
    }
    // Alterna o tema e salva no localStorage
    chk.addEventListener("change", () => {
        if (chk.checked) {
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });
});

/* =================================== */
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


