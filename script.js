function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  const target = ev.target;

  // Evita múltiplas imagens no mesmo dropzone
  if (target.querySelector('img')) return;

  // Verifica se a imagem corresponde à regra
  if (target.dataset.regra === data) {
    target.style.backgroundColor = "#c8f7c5"; // verde
    target.appendChild(draggedElement);
    target.classList.add("acertou");
  } else {
    target.style.backgroundColor = "#f7c5c5"; // vermelho
    target.appendChild(draggedElement);
    target.classList.add("errou");
  }

  checarConcluido();
}

function checarConcluido() {
  const zonas = document.querySelectorAll('.dropzone');
  let completas = 0;

  zonas.forEach(z => {
    if (z.classList.contains("acertou")) completas++;
  });

  if (completas === 10) {
    document.getElementById("parabens").innerHTML = "🎉 Parabéns! Continue aplicando as regras no trabalho!";
    document.querySelector(".confetes").style.display = "block";
    document.querySelector(".confetes").innerHTML = "🎊🎉🎊🎉🎊🎉";
  }
}
