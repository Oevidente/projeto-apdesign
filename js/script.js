let show = true;

const cabecalho = document.querySelector('.cabecalho');
const menuBurguer = cabecalho.querySelector('.menu-burguer');

menuBurguer.addEventListener('click', () => {
  cabecalho.classList.toggle('on', show);
  show = !show;
  //adiciona ou remove uma classe na section cabecalho sempre que for clicada
});