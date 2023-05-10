// FUNÇÃO DA PROGRESS BAR
function upgradeProgressBar() {
  console.log("Função chamada!");
  const progressBar = document.getElementById("progress-bar");

  const totalTimeSeconds = Math.floor(Math.random() * 300 + 1);
  const intervalMs = 1000;
  let timePassedSeconds = 0.1;
  console.log(`TEMPO (MIN): ${totalTimeSeconds}`);

  const updateWidth = () => {
    // DEFININDO PORCENTAGEM E `WIDTH`
    let percentage = (timePassedSeconds / totalTimeSeconds) * 100;
    console.log(percentage);

    progressBar.style.width = `${percentage}%`;

    // TEMPO POR SEGUNDO
    if (timePassedSeconds >= totalTimeSeconds) {
      clearInterval(progressInterval);
    }
    timePassedSeconds++;
  };

  updateWidth(); // Definir `width` inicial

  const progressInterval = setInterval(updateWidth, intervalMs);
}

// FUNÇÃO DO PEDIDO
function getPedidoDetalhes() {
  
  // PEGANDO TAMANHO DA PIZZA
  /* const tamanhoSelect = document.getElementsByName("tamanho-pizza");
  let tamanhoEscolhido;

  for (let i = 0; i < tamanhoSelect.length; i++) {
    if (tamanhoSelect[i].checked) {
      tamanhoEscolhido = tamanhoSelect[i].value;
      break;
    }
  }
  const detalhesContainer = document.querySelector("#pedido-detalhes p");
  detalhesContainer.textContent = `Pedido: Pizza de ${saborEscolhido} tamanho ${tamanhoEscolhido} chegará em 10 minutos!`;
  console.log(saborEscolhido)
  console.log(tamanhoEscolhido) */

  // PEGANDO SABOR DA PIZZA
  const saborEscolhido = localStorage.getItem('sabor-pizza')

  // DEFININDO CONTAINER
  const detalhesContainer  = document.querySelector('#pedido-detalhes p')
  detalhesContainer.innerHTML = `Sabor da pizza: <br>${saborEscolhido}<br> Chegará daqui a alguns minutos...`
}

upgradeProgressBar();
getPedidoDetalhes();
