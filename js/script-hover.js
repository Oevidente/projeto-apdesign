let botaoPesquisa = document.querySelector('div.botao');
let navMenu = document.querySelector('nav.links-menu');

function abrePesquisa() {
  navMenu.innerHTML = ``;
  botaoPesquisa.innerHTML = ``
  botaoPesquisa.innerHTML += `<svg id="Pesquisar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="462.25" height="66.25" viewBox="0 0 462.25 66.25">
  <defs>
    <radialGradient id="radial-gradient" cx="0.963" cy="0.5" r="0.993" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#ff87f1"/>
      <stop offset="1" stop-color="#ffabfb"/>
    </radialGradient>
  </defs>
  <g id="Grupo_47" data-name="Grupo 47" transform="translate(-730 -28)">
    <path id="União_2" data-name="União 2" d="M-2503.675,37H-2927.5a18.377,18.377,0,0,1-13.082-5.419A18.378,18.378,0,0,1-2946,18.5a18.378,18.378,0,0,1,5.418-13.082A18.377,18.377,0,0,1-2927.5,0H-2503V.007A18.5,18.5,0,0,1-2485,18.5a18.5,18.5,0,0,1-18,18.495v0h-.675Zm6.513-10.845a1,1,0,0,0,.7.292.993.993,0,0,0,.7-.292,1,1,0,0,0,0-1.409l-2.588-2.588a6.941,6.941,0,0,0,1.407-4.2,6.971,6.971,0,0,0-6.971-6.971,6.97,6.97,0,0,0-6.97,6.971,6.972,6.972,0,0,0,6.97,6.971,6.946,6.946,0,0,0,4.15-1.369Zm-11.723-8.2a4.978,4.978,0,0,1,4.979-4.979,4.979,4.979,0,0,1,4.98,4.979,4.979,4.979,0,0,1-4.98,4.98A4.979,4.979,0,0,1-2508.885,17.959Z" transform="translate(3676 28)" fill="url(#radial-gradient)"/>
    <text id="O_que_procura_" data-name="O que procura?" transform="translate(747 52)" fill="#c3489c" font-size="16" font-family="Comfortaa-Regular, Comfortaa"><tspan x="0" y="0">O que procura?</tspan></text>
  </g>
  <line id="Linha_8" data-name="Linha 8" x2="460" transform="translate(1.5 65.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.5"/>
  <line id="Linha_7" data-name="Linha 7" x2="460" transform="translate(1.5 65.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
  </svg>
  `;
}

function fechaPesquisa() {
  botaoPesquisa.innerHTML = `<svg id="Pesquisar" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
  <circle id="Elipse_3" data-name="Elipse 3" cx="4.979" cy="4.979" r="4.979" transform="translate(13.115 12.979)" fill="#fff"/>
  <path id="botao-pesquisa" data-name="botao-pesquisa" d="M158.8,679.1a18.5,18.5,0,1,0,18.5,18.5A18.5,18.5,0,0,0,158.8,679.1Zm7.747,26.155a1,1,0,0,1-1.408,0l-2.595-2.595a6.972,6.972,0,1,1,1.415-1.4l2.589,2.589A1,1,0,0,1,166.547,705.255Z" transform="translate(-140.3 -679.1)" fill="#fff"/>
</svg>
  `
  navMenu.innerHTML += `<a href="#" class="home">Home</a>
  <a href="#" class="sobre">Sobre</a>
  <a href="#" class="port">Portfólio</a>
  <a href="#" class="cont">Contato</a>`;
}