// let botaoPesquisa = document.getElementsByName('botao');
// let navMenu = document.querySelector('nav.links-menu');
// let cabecalho = document.querySelector('header.cabecalho');

// function abrirPesquisa() {
//   let cabecalhoTxt = cabecalho.innerHTML;
//   cabecalhoTxt.replace(`<div class="botao" onmouseover="abrirPesquisa()" onmouseleave="fecharPesquisa()"">
//   <img src="svg/lupa.svg" alt="lupa">
//   `, `<div class="botao botaoAberto" onmouseover="abrirPesquisa()" onmouseleave="fecharPesquisa()">
//   <img src="svg/lupa_hover.svg" alt="lupa">
//   `);
//   cabecalho.innerHTML = `${cabecalhoTxt}
//   </div>`;
//   console.log('TÁ FUNCIONANDO MOUSEOVER')
// }

// function fecharPesquisa() {
//   let cabecalhoTxt = cabecalho.innerHTML;
//   cabecalhoTxt.replace(`<div class="botao botaoAberto" onmouseover="abrirPesquisa()" onmouseleave="fecharPesquisa()">
//   <img src="svg/lupa_hover.svg" alt="lupa">
//   `, `<div class="botao" onmouseover="abrirPesquisa()" onmouseleave="fecharPesquisa()">
//   <img src="svg/lupa.svg" alt="lupa">`);
//   cabecalho.innerHTML = `${cabecalhoTxt}
//   </div>`;
//   console.log('TÁ FUNCIONANDO MOUSELEAVE')
// }

// // Quero pegar apenas o trecho do HTML que contem a classe e alterar para adicionar outra classe, essa então fará com que a barra de pesquisa se expanda

// //Inicia em 0 e termina em 89