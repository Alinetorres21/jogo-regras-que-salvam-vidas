function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function mostrarMensagem(texto, corFundo = "#fff8c5") {
  const mensagem = document.getElementById("mensagem");
  mensagem.innerText = texto;
  mensagem.style.backgroundColor = corFundo;
  mensagem.style.display = "block";

  setTimeout(() => {
    mensagem.style.display = "none";
  }, 2000);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  const target = ev.target;

  // Impede múltiplas imagens no mesmo local
  if (target.querySelector('img')) return;

  // Verifica se a imagem corresponde à regra
  if (target.dataset.regra === data) {
    target.style.backgroundColor = "#c8f7c5"; // verde
    target.appendChild(draggedElement);
    target.classList.add("acertou");
    mostrarMensagem("🎉 Parabéns! Continue praticando as regras!", "#c8f7c5");
  } else {
    target.style.backgroundColor = "#f7c5c5"; // vermelho
    target.appendChild(draggedElement);
    target.classList.add("errou");
    mostrarMensagem("❌ Tente outra vez!", "#f7c5c5");
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
    document.getElementById("parabens").innerHTML = "🎊 Parabéns! Continue aplicando as regras no trabalho!";
    const confetes = document.querySelector(".confetes");
    confetes.style.display = "block";
    confetes.innerHTML = "🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉";
  }
}
