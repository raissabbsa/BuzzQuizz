function carregaPagina() {
  const promessaQuizzes = axios.get(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
  );
  console.log(promessaQuizzes);
}
function criacaoDeQuizz() {
  const tela1 = document.querySelector(".tela1-tudo");
  const tela31 = document.querySelector(".tela3-1");
  tela1.classList.add("escondido");
  tela31.classList.add("visivel");
}
carregaPagina();
