function aleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function jogo(){
  let valor = aleatorio(0, 10)
  let chute = prompt("Digite a primeira tentativa (0 a 10)")

  if (chute == valor){
    alert("parabens")
  } else {
    chute = prompt("Primeira tentativa errada, tente denovo")
    if (chute == valor) {
      alert("parabens")
    } else {
      chute = prompt("Segunda tentativa errada, tente denovo. Última vez!")
      if (chute == valor){
        alert("parabens")
        return true
      } else {
        alert(`Que pena, você errou! O número era ${valor} Fim de jogo`)
        return false
      }
    }    
  }
}

function principal(){
  while (true){
  
    alert("Bem vindo ao jogo da advinhação!! Você terá 3 chances para advinhar um número de 0 a 10 que eu pensar. Vamos começar?")

  
    let ganhou = jogo()
    if (ganhou){
      alert("Você é um advinhador nato!")
    } else {
      alert("Foi apenas azar, tente novamente que vai conseguir!")
    }

    if (prompt('Vamos jogar denovo, 1 para SIM e 2 para NÃO') == 2){
      break
    }
  }
}

