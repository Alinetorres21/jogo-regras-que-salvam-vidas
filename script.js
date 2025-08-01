function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const target = ev.target;

  if (target.dataset.regra === data) {
    target.style.backgroundColor = "#c8f7c5"; // Verde
    target.innerHTML += " ✅";
    target.appendChild(document.getElementById(data));
  } else {
    target.style.backgroundColor = "#f7c5c5"; // Vermelho
    target.innerHTML += " ❌";
  }

  checarConcluido();
}

function checarConcluido() {
  const zonas = document.querySelectorAll('.dropzone');
  let completas = 0;
  zonas.forEach(z => {
    if (z.querySelector('img')) completas++;
  });

  if (completas === 10) {
    document.getElementById("parabens").innerHTML = "🎉 Parabéns! Continue aplicando as regras no trabalho!";
    document.querySelector(".confetes").style.display = "block";
    document.querySelector(".confetes").innerHTML = "🎊🎉🎊🎉🎊🎉";
  }
}
