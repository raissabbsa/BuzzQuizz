//resolucao tela 1
let arrayId = [];
let seusQuizzesInnerHTML = "";
carregaPagina();
if (localStorage.id.length > 0) {
  if (localStorage.id.length == 5) {
    arrayId = [localStorage.id];
    const tela1SeusQuizzesTitulo = document.querySelector(
      ".seusQuizzes-titulo"
    );
    tela1SeusQuizzesTitulo.classList.remove("escondido");
    renderiza();
  } else if (localStorage.id.length < 5) {
    const tela1CriarQuizz = document.querySelector(".tela1-criarQuizz");
    tela1CriarQuizz.classList.remove("escondido");
  } else {
    arrayId = localStorage.id.split(",");
    const tela1SeusQuizzesTitulo = document.querySelector(
      ".seusQuizzes-titulo"
    );
    tela1SeusQuizzesTitulo.classList.remove("escondido");
    renderiza();
  }
}
function renderiza() {
  const promessaQuizzes = axios.get(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
  );
  promessaQuizzes.then(inserirSeusQuizzes);
}
function inserirSeusQuizzes(quizz) {
  imagemQuizz = quizz.data;
  for (let i = 0; i < arrayId.length; i++) {
    const seuQuizz = axios.get(
      `https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${arrayId[i]}`
    );

    seuQuizz.then(renderizaSeuQuizz);
  }
}
function renderizaSeuQuizz(quizz) {
  const tela1CriarQuizz = document.querySelector(".tela1-criarQuizz");
  const tela1SeusQuizzesTitulo = document.querySelector(".seusQuizzes-titulo");
  const tela1SeusQuizzes = document.querySelector(".tela1-seusQuizzes");
  // const seusQuizzesDentro = document.querySelector(".seusQuizzesDentro");
  // tela1CriarQuizz.classList.add("escondido");
  // tela1SeusQuizzesTitulo.classList.remove("escondido");
  tela1SeusQuizzes.classList.remove("escondido");
  // seusQuizzesDentro.classList.remove("escondido");
  // let seusQuizzes = document.querySelector(".tela1-seusQuizzes");
  seusQuizzesInnerHTML = `<div onclick="mostrarTela2(${quizz.data.id})" class=" quizz">
            <div class="tela1-gradiente"></div>
            <img class="tela1-imagemQuizz2"src="${quizz.data.image}"/>
            <div class="tela1-tituloQuizz">${quizz.data.title}</div>
          </div>`;
  seusQuizzesInnerHTML += tela1SeusQuizzes.innerHTML;
  tela1SeusQuizzes.innerHTML = seusQuizzesInnerHTML;
}
function carregaPagina() {
  const promessaQuizzes = axios.get(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
  );

  promessaQuizzes.then(inserirQuizzes);
}
function inserirQuizzes(quizz) {
  imagemQuizz = quizz.data;

  todosOsQuizzes = document.querySelector(".tela1-todosOsQuizzes");

  for (let i = 0; i < imagemQuizz.length; i++) {
    todosOsQuizzes.innerHTML += `<div onclick="mostrarTela2(${imagemQuizz[i].id})" class=" quizz">
            <div class="tela1-gradiente"></div>
            <img class="tela1-imagemQuizz"src="${imagemQuizz[i].image}"/>
            <div class="tela1-tituloQuizz">${imagemQuizz[i].title}</div>
          </div>`;
  }
}

function criacaoDeQuizz() {
  const tela1 = document.querySelector(".tela1");
  const tela31 = document.querySelector(".tela3-1");
  tela1.classList.add("escondido");
  tela31.classList.add("visivel");
}

// function abreQuizz() {
//   const tela2 = document.querySelector(".tela2");
//   const tela1 = document.querySelector(".tela1");
//   tela1.classList.add("escondido");
//   tela2.classList.remove("escondido");
//   console.log(
//     "chamou função abreQuizz, função onclick do quizz na tela 1, redireciona à tela 2, essa função é um template"
//   );
// }
// function criarPerguntas() {
//   const tela31 = document.querySelector(".tela3-1");
//   const tela32 = document.querySelector(".tela3-2");
//   tela31.classList.remove("visivel");
//   tela32.classList.add("visivel");
// }
// function criarNiveis() {
//   const tela32 = document.querySelector(".tela3-2");
//   const tela33 = document.querySelector(".tela3-3");
//   tela32.classList.remove("visivel");
//   tela33.classList.add("visivel");
// }
// function finalizarQuizz() {
//   const tela33 = document.querySelector(".tela3-3");
//   const tela34 = document.querySelector(".tela3-4");
//   tela33.classList.remove("visivel");
//   tela34.classList.add("visivel");
// }
// FUNÇÕES DA TELA 3.4

// function acessaQuizz() {
//   const tela2 = document.querySelector(".tela2");
//   const tela34 = document.querySelector(".tela3-4");
//   tela34.classList.remove("visivel");
//   tela2.classList.add("visivel");
// }
// function testandoLocalStorage() {
//   let numero = Number(prompt("Diz uma numero ae campeão"));
//   if (numero >= 0) {
//     localStorage.numero = numero;
//     console.log(localStorage.numero);
//   }
//   console.log(localStorage.numero);
// }
// testandoLocalStorage();
