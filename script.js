// resolucao tela 2

function comparador() {
  return Math.random() - 0.5;
}
let ordemRespostas = [0, 1, 2, 3];

function mostrarTela2(id) {
  const ocultarTela1 = document.querySelector(".tela1");
  console.log(ocultarTela1);
  ocultarTela1.classList.add("escondido");
  const mostrarTela2 = document.querySelector(".tela2");
  mostrarTela2.classList.remove("escondido");
  buscarQuizzEscolhido(id);
  //renderizarQuizzEscolhido();
}

function buscarQuizzEscolhido(id) {
  const pegarQuizz = axios.get(
    `https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`
  );
  pegarQuizz.then(renderizarQuizzEscolhido);
  console.log(pegarQuizz);
}

function renderizarTituloQuizz(titulo, imagem) {
  const tituloQuizz = document.querySelector(".titulo-quizz-tela2");
  tituloQuizz.innerHTML = `<img src="${imagem}" />
                                <h1>${titulo}</h1>`;
}

function renderizarQuizzEscolhido(dados) {
  console.log("chegou");
  let numPerguntas = dados.data.questions.length;
  console.log(dados.data.title);
  renderizarTituloQuizz(dados.data.title, dados.data.image);
  console.log(dados.data.questions[0].answers[0].image);
  const renderizarPerguntas = document.querySelector(".caixaquizz-tela2");
  renderizarPerguntas.innerHTML = "";

  for (let i = 0; i < numPerguntas; i++) {
    ordemRespostas.sort(comparador);
    let k = ordemRespostas[0];
    let j = ordemRespostas[1];
    let s = ordemRespostas[2];
    let t = ordemRespostas[3];
    console.log(k);
    console.log(j);
    console.log(s);
    console.log(t);
    console.log(ordemRespostas);

    renderizarPerguntas.innerHTML =
      renderizarPerguntas.innerHTML +
      `<div class="caixa-perguntas">
        <div class="pergunta">
          <h1>${dados.data.questions[i].title}</h1>
        </div>
        <div class="caixa-respostas">
          <div class="caixa-respostas-esquerda">
            <div class="resposta-figura" onclick="selecionarResposta(this);"> 
              <div class="figura">
                <img src="${dados.data.questions[i].answers[k].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[k].text}</h1>
              </div>
            </div>
            <div class="resposta-figura" onclick="selecionarResposta(this);">
              <div class="figura">
                <img src="${dados.data.questions[i].answers[j].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[j].text}</h1>
              </div>
            </div>
          </div>
          <div class="caixa-respostas-direita">
            <div class="resposta-figura" onclick="selecionarResposta(this);">
              <div class="figura">
                <img src="${dados.data.questions[i].answers[s].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[s].text}</h1>
              </div>
            </div>
            <div class="resposta-figura" onclick="selecionarResposta(this);">
              <div class="figura">
                <img src="${dados.data.questions[i].answers[t].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[t].text}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

buscarQuizzEscolhido();

function selecionarResposta(resposta) {
  console.log("sim");
  console.log(resposta);
}

const pegaQuiz = axios.get(
  "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
);
console.log(pegaQuiz);
