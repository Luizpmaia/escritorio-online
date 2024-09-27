const character = document.getElementById("character");
let posX = 280; // Posição inicial no eixo X
let posY = 180; // Posição inicial no eixo Y

// Captura o evento de tecla pressionada
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "a": // Esquerda
      posX -= 10;
      break;
    case "d": // Direita
      posX += 10;
      break;
    case "w": // Cima
      posY -= 10;
      break;
    case "s": // Baixo
      posY += 10;
      break;
  }

  // Limitar para não sair do quadro
  if (posX < 0) posX = 0;
  if (posY < 0) posY = 0;
  if (posX > 560) posX = 560; // Limite da largura (600 - tamanho do personagem)
  if (posY > 360) posY = 360; // Limite da altura (400 - tamanho do personagem)

  // Atualiza a posição do personagem
  character.style.left = posX + "px";
  character.style.top = posY + "px";
});
