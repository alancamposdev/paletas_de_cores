const anoAtual = new Date().getFullYear();

// Seleciona o elemento <span> no footer
const spanAno = document.querySelector("#ano-atual");
// Define o ano atual no elemento
if (spanAno) {
  spanAno.textContent = anoAtual;
}
