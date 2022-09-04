//resolucao tela 1

function carregaPagina() {
  const promessaQuizzes = axios.get(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
  );

  promessaQuizzes.then(inserirQuizzes);
}
function inserirQuizzes(quizz) {
  imagemQuizz = quizz.data;
  // console.log(imagemQuizz);
  todosOsQuizzes = document.querySelector(".tela1-todosOsQuizzes");

  for (let i = 0; i < imagemQuizz.length; i++) {
    todosOsQuizzes.innerHTML += `<div onclick="mostrarTela2(${imagemQuizz[i].id})" class=" quizz">
            <div class="tela1-gradiente"></div>
            <img class="tela1-imagemQuizz"src="${imagemQuizz[i].image}"/>
            <div class="tela1-tituloQuizz">${imagemQuizz[i].title}</div>
          </div>`;
  }
}
carregaPagina();
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
