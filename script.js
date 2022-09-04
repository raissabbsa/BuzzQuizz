/* // resolucao tela 1

/* function carregaPagina() {
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
 */
// resolucao tela 2

function comparador() {
  return Math.random() - 0.5;
}
let ordemRespostas = [0, 1, 2, 3];

function mostrarTela2() {
  const ocultarTela1 = document.querySelector("tela1");
  ocultarTela1.classList.add(esconder);
  const mostrarTela2 = document.querySelector("tela2")
  mostrarTela2.classList.remove(escondido)

  renderizarQuizzEscolhido()
}

function buscarQuizzEscolhido() {

  const pegarQuizz = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/2");
  pegarQuizz.then(renderizarQuizzEscolhido);
  console.log(pegarQuizz);
}

function renderizarTituloQuizz(titulo, imagem) {
  const tituloQuizz = document.querySelector(".titulo-quizz-tela2");
  tituloQuizz.innerHTML = `<img src="${imagem}" />
                                <h1>${titulo}</h1>`

}

let numPerguntas;

function renderizarQuizzEscolhido(dados) {
  //console.log("chegou");
  numPerguntas = dados.data.questions.length;
  //console.log(dados.data.title);
  renderizarTituloQuizz(dados.data.title, dados.data.image);
  console.log(dados.data.questions[0].answers[0].image)
  const renderizarPerguntas = document.querySelector(".caixaquizz-tela2");
  renderizarPerguntas.innerHTML = "";

  for (let i = 0; i < numPerguntas; i++) {

    ordemRespostas.sort(comparador);
    let k = ordemRespostas[0];
    let j = ordemRespostas[1];
    let s = ordemRespostas[2];
    let t = ordemRespostas[3];
    //console.log(k);
    //console.log(j);
    //console.log(s);
    //console.log(t);
    //console.log(ordemRespostas);

    renderizarPerguntas.innerHTML = renderizarPerguntas.innerHTML + `<div class="caixa-perguntas">
        <div class="pergunta">
          <h1>${dados.data.questions[i].title}</h1>
        </div>
        <div class="caixa-respostas">
          <div class="caixa-respostas-esquerda">
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
          <div class="caixa-respostas-direita">
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
      </div>`;

    //  const certa = dados.data.questions[i].answers[k].isCorrectAnswer;
    // const certaa = dados.data.questions[i].answers[j].isCorrectAnswer;
    // const certaaa = dados.data.questions[i].answers[s].isCorrectAnswer;
    //const certaaaa = dados.data.questions[i].answers[t].isCorrectAnswer;
    //console.log(certa);
    //console.log(certaa);
    //console.log(certaaa);
    //console.log(certaaaa); 
  }

  renderizarPerguntas.innerHTML = renderizarPerguntas.innerHTML + `<div class="aparece-resultado"></div>`;
}

buscarQuizzEscolhido();

let acertou = 0;
let numJogadas = 0
let perguntas = 1;

function selecionarResposta(resposta) {
  //console.log("sim");
  //console.log(resposta);
  const pai = resposta.parentNode;
  const vo = pai.parentNode;
  //console.log(pai);
  //console.log(vo);
  const listaResposta = vo.children;
  const elementofilho1 = listaResposta[0];
  const elementofilho2 = listaResposta[1];
  const listaResposta1 = elementofilho1.children;
  const listaResposta2 = elementofilho2.children;
  //console.log(listaResposta1);
  //console.log(listaResposta2);

  //console.log(listaResposta);


  for (let i = 0; i < 2; i++) {
    if (listaResposta1[i].classList.contains("resposta-nao-selecionada")) {
      return
    }

    if (listaResposta2[i].classList.contains("resposta-nao-selecionada")) {
      return
    }

    if (!resposta.classList.contains("resposta-selecionada")) {
      resposta.classList.add("resposta-selecionada");
    }
    if (!listaResposta1[i].classList.contains("resposta-selecionada")) {
      //console.log("ok")
      listaResposta1[i].classList.add("resposta-nao-selecionada");
    }

    if (!listaResposta2[i].classList.contains("resposta-selecionada")) {
      listaResposta2[i].classList.add("resposta-nao-selecionada")
    }
    //console.log(listaResposta1[i]);
    //console.log(listaResposta2[i]); 

    if (listaResposta1[i].classList.contains("true")) {
      const marcarVerde = listaResposta1[i].lastElementChild;
      marcarVerde.classList.add("resposta-correta");
      //console.log("oi");
    } else {
      const marcarVermelho = listaResposta1[i].lastElementChild
      marcarVermelho.classList.add("resposta-incorreta");
      //console.log("ola");
    }

    if (listaResposta2[i].classList.contains("true")) {
      const marcarVerde = listaResposta2[i].lastElementChild;
      marcarVerde.classList.add("resposta-correta");
      //console.log("oi");
    } else {
      const marcarVermelho = listaResposta2[i].lastElementChild
      marcarVermelho.classList.add("resposta-incorreta");
      //console.log("ola");
    }

    if (resposta.classList.contains("true")) {
      acertou++; //dividir depois por 2 no final, ta duplicado
    }
    //console.log(acertou);
  }

  numJogadas++;
  console.log(numJogadas);
  setTimeout(apareceResultado, 3000);
}

function proxPergunta() {
  const caixaPerguntas = document.querySelector(".titulo-quizz-tela2");
  caixaPerguntas.nextChild.scrollIntoView();

}

const pegaQuiz = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
console.log(pegaQuiz);

let pct;

function calculoResultado() {
  pct = ((acertou/2)/numJogadas * 100);
  const pctArredondada = Math.round(pct);
  console.log(pctArredondada);
}

function apareceResultado() {

  if (numJogadas == numPerguntas) {
    calculoResultado();
    const mostreResultado = document.querySelector(".aparece-resultado");
    mostreResultado.innerHTML = `<div class="resultado-quizz">
    <div class="pct-acerto">
      <h1>88% de acerto: Você é praticamente um aluno de Hogwarts!</h1>
    </div>
    <div class="figura-feedback">
      <div class="figura-resultado">
        <img src="./imagens-tela2/a.png" />
      </div>
      <div class="feedback">
        <p>Parabéns Potterhead! Bem-vindx a Hogwarts, aproveite o loop infinito de comida e clique no botão abaixo
          para usar o vira-tempo e reiniciar este teste.</p>
      </div>
    </div>
  </div>
  <button class="reiniciar-quizz">Reiniciar Quizz</button>
  <div class="voltar">
    <h1>Voltar para home</h1>
  </div>`;

  const scrollarResultado = document.querySelector(".voltar");
  scrollarResultado.scrollIntoView();
  } else {
    return
  }
} 

