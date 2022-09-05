

// resolucao tela 2


function comparador() {
  return Math.random() - 0.5;
}

let duasRespostasAleatorias = [0, 1];
let tresRespostasAleatorias = [0, 1, 2];
let quatroRespostasAleatorias = [0, 1, 2, 3];
let linkApi;
let idApi;

function mostrarTela2(id) {
  idApi = id
  const ocultarTela1 = document.querySelector(".tela1");
  ocultarTela1.classList.add("escondido");
  const mostrarTela2 = document.querySelector(".tela2");
  mostrarTela2.classList.remove("escondido");

  buscarQuizzEscolhido(id);
}

function buscarQuizzEscolhido(id) {
  linkApi = `https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`
  const pegarQuizz = axios.get(linkApi);
  pegarQuizz.then(renderizarQuizzEscolhido);
  console.log(pegarQuizz);
}

function renderizarTituloQuizz(titulo, imagem) {
  const tituloQuizz = document.querySelector(".titulo-quizz-tela2");
  tituloQuizz.innerHTML = `<img src="${imagem}" />
                                <h1>${titulo}</h1>`

}

let numPerguntas;
let numRespostas;


function renderizarQuizzEscolhido(dados) {
  numPerguntas = dados.data.questions.length;
  renderizarTituloQuizz(dados.data.title, dados.data.image);
  console.log(dados.data.questions[0].answers[0].image)
  const renderizarPerguntas = document.querySelector(".caixaquizz-tela2");
  renderizarPerguntas.innerHTML = "";

  for (let i = 0; i < numPerguntas; i++) {

      if (dados.data.questions[i].answers.length == 2) {

          duasRespostasAleatorias.sort(comparador);
          let k = duasRespostasAleatorias[0];
          let j = duasRespostasAleatorias[1];
          console.log(duasRespostasAleatorias)

          renderizarPerguntas.innerHTML = renderizarPerguntas.innerHTML + `<div class="caixa-perguntas">
          <div class="pergunta">
            <h1>${dados.data.questions[i].title}</h1>
          </div>
          <div class="caixa-respostas">
            <div class="resposta-figura ${dados.data.questions[i].answers[k].isCorrectAnswer}" onclick="selecionarResposta(this);">
              <div class="figura">
                <img src="${dados.data.questions[i].answers[k].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[k].text}</h1>
              </div>
            </div>
            <div class="resposta-figura ${dados.data.questions[i].answers[j].isCorrectAnswer}" onclick="selecionarResposta(this);">
              <div class="figura">
                <img src="${dados.data.questions[i].answers[j].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[j].text}</h1>
              </div>
            </div>
          </div>
        </div>`

      } else if (dados.data.questions[i].answers.length == 3) {

          tresRespostasAleatorias.sort(comparador);
          let k = tresRespostasAleatorias[0];
          let j = tresRespostasAleatorias[1];
          let s = tresRespostasAleatorias[2];

          renderizarPerguntas.innerHTML = renderizarPerguntas.innerHTML + `<div class="caixa-perguntas">
          <div class="pergunta">
            <h1>${dados.data.questions[i].title}</h1>
          </div>
          <div class="caixa-respostas">
            <div class="resposta-figura ${dados.data.questions[i].answers[k].isCorrectAnswer}" onclick="selecionarResposta(this);">
              <div class="figura">
                <img src="${dados.data.questions[i].answers[k].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[k].text}</h1>
              </div>
            </div>
            <div class="resposta-figura ${dados.data.questions[i].answers[j].isCorrectAnswer}" onclick="selecionarResposta(this);">
              <div class="figura">
                <img src="${dados.data.questions[i].answers[j].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[j].text}</h1>
              </div>
            </div>
            <div class="resposta-figura ${dados.data.questions[i].answers[s].isCorrectAnswer}" onclick="selecionarResposta(this);">
              <div class="figura">
                <img src="${dados.data.questions[i].answers[s].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[s].text}</h1>
              </div>
            </div>
          </div>
        </div>`


      } else if (dados.data.questions[i].answers.length == 4) {

          console.log(dados.data.questions[i].answers.length)
          quatroRespostasAleatorias.sort(comparador);
          let k = quatroRespostasAleatorias[0];
          let j = quatroRespostasAleatorias[1];
          let s = quatroRespostasAleatorias[2];
          let t = quatroRespostasAleatorias[3];

          renderizarPerguntas.innerHTML = renderizarPerguntas.innerHTML + `<div class="caixa-perguntas">
    <div class="pergunta" style="background-color: ${dados.data.questions[i].color}">
      <h1>${dados.data.questions[i].title}</h1>
    </div>
    <div class="caixa-respostas">
        <div class="resposta-figura ${dados.data.questions[i].answers[k].isCorrectAnswer}" onclick="selecionarResposta(this);">
          <div class="figura">
            <img src="${dados.data.questions[i].answers[k].image}" />
          </div>
          <div class="resposta">
            <h1 class="resposta-texto">${dados.data.questions[i].answers[k].text}</h1>
          </div>
        </div>
        <div class="resposta-figura ${dados.data.questions[i].answers[j].isCorrectAnswer}" onclick="selecionarResposta(this);">
          <div class="figura">
            <img src="${dados.data.questions[i].answers[j].image}" />
          </div>
          <div class="resposta">
            <h1 class="resposta-texto">${dados.data.questions[i].answers[j].text}</h1>
          </div>
        </div>
        <div class="resposta-figura ${dados.data.questions[i].answers[s].isCorrectAnswer}" onclick="selecionarResposta(this);">
          <div class="figura">
            <img src="${dados.data.questions[i].answers[s].image}" />
          </div>
          <div class="resposta">
            <h1 class="resposta-texto">${dados.data.questions[i].answers[s].text}</h1>
          </div>
        </div>
        <div class="resposta-figura ${dados.data.questions[i].answers[t].isCorrectAnswer}" onclick="selecionarResposta(this);">
          <div class="figura">
            <img src="${dados.data.questions[i].answers[t].image}" />
          </div>
          <div class="resposta">
            <h1 class="resposta-texto">${dados.data.questions[i].answers[t].text}</h1>
          </div>
        </div>
    </div>
  </div>
  `
              ;

          
      }
  }
  renderizarPerguntas.innerHTML = renderizarPerguntas.innerHTML + `<div class="aparece-resultado"></div>`;
  const tela2 = document.querySelector(".titulo-quizz-tela2");
  tela2.scrollIntoView();
}


let acertou = 0;
let numJogadas = 0
let perguntas = 1;
let pai;

function selecionarResposta(resposta) {
  pai = resposta.parentNode;
  const listaRespostas = pai.children;
  const qtdeRespostas = pai.children.length;

  for (let j = 0; j < qtdeRespostas; j++) {
      if (listaRespostas[j].classList.contains("resposta-nao-selecionada")) {
          return
      }
  }


  for (let i = 0; i < qtdeRespostas; i++) {

      resposta.classList.add("resposta-selecionada");


      if (!listaRespostas[i].classList.contains("resposta-selecionada")) {
      
          listaRespostas[i].classList.add("resposta-nao-selecionada");
      }

      if (listaRespostas[i].classList.contains("true")) {
          const marcarVerde = listaRespostas[i].lastElementChild;
          marcarVerde.classList.add("resposta-correta");
        
      } else {
          const marcarVermelho = listaRespostas[i].lastElementChild
          marcarVermelho.classList.add("resposta-incorreta");
        
      }
  }

  if (resposta.classList.contains("true")) {
      acertou++;
    
  }

  numJogadas++;
  console.log(numJogadas);
  console.log(acertou);
  setTimeout(proxPergunta, 3000);
  if (numJogadas == numPerguntas) {
      setTimeout(pegarDadosResultado, 2000);
  }
}

function proxPergunta() {

  pai.lastElementChild.scrollIntoView();

} 

let pct;
let minValue1;
let minValue2;
let numeroNiveis;
let ultimoNivel;
let pctArredondada;

function pegarDadosResultado() {
  const pegarQuizz = axios.get(linkApi);
  pegarQuizz.then(apareceResultado);
}

function calculoResultado() {
  pct = ((acertou) / numJogadas * 100);
  pctArredondada = Math.round(pct);
  console.log(pctArredondada);
}

function apareceResultado(dados) {

  calculoResultado();
  numeroNiveis = dados.data.levels.length;
  ultimoNivel = numeroNiveis - 1
  console.log(numeroNiveis);

  for (let i = 0; i < numeroNiveis; i++) {

      if (i < (ultimoNivel)) {
          minValue1 = dados.data.levels[i].minValue;
          //console.log(minValue1);
          minValue2 = dados.data.levels[i + 1].minValue;
          //console.log(minValue2);
      } else {
          const mostreResultado = document.querySelector(".aparece-resultado");
          mostreResultado.innerHTML = `<div class="resultado-quizz">
          <div class="pct-acerto">
            <h1>${pctArredondada}% de acerto: ${dados.data.levels[ultimoNivel].title}</h1>
          </div>
          <div class="figura-feedback">
            <div class="figura-resultado">
              <img src="${dados.data.levels[ultimoNivel].image}g" />
            </div>
            <div class="feedback">
              <p>${dados.data.levels[ultimoNivel].text}</p>
            </div>
          </div>
        </div>
        <button class="reiniciar-quizz" onclick="reiniciarQuizz()">Reiniciar Quizz</button>
        <div class="voltar" onclick="voltarTela1()">
          <h1>Voltar para home</h1>
        </div>`;

          const scrollarResultado = document.querySelector(".caixaquizz-tela2");
          scrollarResultado.lastElementChild.scrollIntoView();

      }

      if (pctArredondada >= minValue1 && pctArredondada < minValue2) {
          console.log("entra aqui")

          const mostreResultado = document.querySelector(".aparece-resultado");
          mostreResultado.innerHTML = `<div class="resultado-quizz">
          <div class="pct-acerto">
            <h1>${pctArredondada}% de acerto: ${dados.data.levels[i].title}</h1>
          </div>
          <div class="figura-feedback">
            <div class="figura-resultado">
              <img src="${dados.data.levels[i].image}" />
            </div>
            <div class="feedback">
              <p>${dados.data.levels[i].text}</p>
            </div>
          </div>
        </div>
        <button class="reiniciar-quizz" onclick="reiniciarQuizz()">Reiniciar Quizz</button>
        <div class="voltar" onclick="voltarTela1()">
          <h1>Voltar para home</h1>
        </div>`;

          const scrollarResultado = document.querySelector(".caixaquizz-tela2");
          scrollarResultado.lastElementChild.scrollIntoView();
          return;
      }
  }

}

function reiniciarQuizz() {
acertou = 0;
numJogadas = 0;
mostrarTela2(idApi);
}

function voltarTela1() {
location.reload();
/* const tela2 = document.querySelector(".tela2");
tela2.classList.add("escondido");
const tela1 = document.querySelector(".tela1");
tela1.classList.remove("escondido"); */
// mostre tela 1
}

const pegarQuiz = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
console.log(pegarQuiz);
