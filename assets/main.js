let index = 0;

function mudarImagem(n) {
  const imagens = document.querySelectorAll(".carrossel-imagens img");
  index += n;

  // Verifica se o índice passou do número de imagens
  if (index >= imagens.length) {
    index = 0;
  } else if (index < 0) {
    index = imagens.length - 1;
  }

  // Faz a transição da imagem
  const carrossel = document.querySelector(".carrossel-imagens");
  carrossel.style.transform = `translateX(${-index * 100}%)`;
}

function abrir_menu() {
  const menu = document.getElementsByClassName("md-menu")[0];
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    menu.style.display = "none";
  } else {
    menu.className += " open";
    menu.style.display = "block";
  }
}
