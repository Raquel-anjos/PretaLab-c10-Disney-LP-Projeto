let numeroAleatorio = Math.floor(Math.random() * 100 + 1);
let tentativas = 0;
let palpiteRepetido = []

function jogoDeAdivinhacao() {
   const palpiteDigitado = pegarPalpiteDigitado();
   
   
   
   if (!palpiteDigitado) {
    alert("Digite um valor válido");
    return;
   }

    
    if (palpiteDigitado > 100) {
    alert("Palpite invalido.")
    limparPalpiteDigitado();
    limparPalpiteFalho();
   } else if (palpiteDigitado < 0) {
    alert("Palpite invalido.")
    limparPalpiteDigitado();
    limparPalpiteFalho();
   }


   if(palpiteDigitado === numeroAleatorio) {
    alert("Parabéns você acertou!")
    reiniciarJogo();
    return;
    } else if (palpiteDigitado > numeroAleatorio) {
    tentativas++;
    atualizarFeedback("O número é muito alto. Tente novamente.")
   } else if (palpiteDigitado < numeroAleatorio) {
    tentativas++;
    atualizarFeedback("O número é muito baixo. Tente novamente.")
   }
   // else if (palpiteRepetido.includes(palpiteDigitado)); {
   // alert("Já houve uma tentativa com esse número. Por favor tente um número diferente");
  //  return;
  // }
  // palpiteRepetido.push(palpiteDigitado);
  
   
   
   const novaPontuacao = 100 - (tentativas * 10)
   atualizarPontuacao(novaPontuacao);

   const palpitesFalhos = pegarPalpitesFalhos();
   const novosPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado
   atualizarPalpitesFalhos(novosPalpitesFalhos);

  

   
const pontuacaoAtual = pegarPontuacao();
if (pontuacaoAtual === "Você tem 0 pontos") {
    alert("Acabou o jogo, você perdeu!");
    reiniciarJogo();
}

}

function reiniciarJogo() {
    const vaiReiniciar = confirm("Deseja jogar novamente?");
    if (vaiReiniciar === true) {

        atualizarPalpitesFalhos(" ");
        atualizarPontuacao(100);
        atualizarFeedback(" ");
        limparPalpiteDigitado();
        palpiteRepetido = [];
    }
}
