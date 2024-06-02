let numeroAleatorio = 13;
let tentativas = 0;

function jogoDeAdivinhacao() {
   const palpiteDigitado = pegarPalpiteDigitado();
   
   if (!palpiteDigitado) {
    alert("Digite um valor válido")
   }

   if(palpiteDigitado === numeroAleatorio) {
    alert("Parabéns você acertou!")
   } else if (palpiteDigitado > numeroAleatorio) {
    tentativas++;
    atualizarFeedback("O número é muito alto. Tente novamente.")
   } else if (palpiteDigitado < numeroAleatorio) {
    tentativas++;
    atualizarFeedback("O número é muito baixo. Tente novamente.")
   }
   const novaPontuacao = 100 - (tentativas * 10)
   atualizarPontuacao(novaPontuacao);



}

function reiniciarJogo() {
    // to-do
}
