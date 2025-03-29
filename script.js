function calcularMedia() {
    let primeiro = Number(document.getElementById("primeiro").value);
    let segundo = Number(document.getElementById("segundo").value);
    let terceiro = Number(document.getElementById("terceiro").value);
    let quarto = Number(document.getElementById("quarto").value);

    let mediaFinal = (primeiro + segundo + terceiro + quarto) / 4;
    let resultado = document.getElementById("resultado");
    if (mediaFinal >=7) {
        resultado.innerText = `Aprovado com a média ${mediaFinal}. `;
        resultado.style.color = "#1eff00";
    } else {
        resultado.innerText = `Reprovado com a média ${mediaFinal}.`;
        resultado.style.color = "#ff1100";
    }
} 

function limparResultado() {
    document.getElementById("resultado").innerText = "";

    document.getElementById("primeiro").value = "";
    document.getElementById("segundo").value = "";
    document.getElementById("terceiro").value = "";
    document.getElementById("quarto").value = "";
}