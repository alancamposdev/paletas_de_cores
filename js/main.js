const coresContainer = document.querySelector(".cores");
const btnGerar = document.getElementById("btnGerar");
const alertaCopiado = document.getElementById("alerta-copiado");

function copiarTexto(texto) {
  document.addEventListener("DOMContentLoaded", () => {    

    coresContainer.addEventListener("click", (event) => {
        if (event.target.tagName === "SPAN") {
            const corHex = event.target.textContent;
            navigator.clipboard.writeText(corHex).then(() => {
                alertaCopiado.textContent = `Cor: ${corHex} copiada com sucesso!`;
                alertaCopiado.style.display = "block";

                // Faz o alerta sumir após 3 segundos
                setTimeout(() => {
                    alertaCopiado.style.display = "none";
                }, 3000);
            });
        }
    });
});
} copiarTexto();


function gerarCorAleatoria() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function criarElementoCor(cor) {
  const divCor = document.createElement("div");
  divCor.style.backgroundColor = cor;
  
    divCor.innerHTML = `<span style="color:${cor}">${cor}</span>`;
    divCor.onclick = () => copiarTexto(cor);
    return divCor;

}

function gerarPaleta() {
  coresContainer.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    coresContainer.appendChild(criarElementoCor(gerarCorAleatoria()))
  }
}

btnGerar.addEventListener("click", gerarPaleta);


