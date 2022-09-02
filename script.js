
// resolucao tela 2

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

function renderizarQuizzEscolhido(dados) {
    console.log("chegou");
    let numPerguntas = dados.data.questions.length;
    console.log(dados.data.title);
    renderizarTituloQuizz(dados.data.title, dados.data.image);
    console.log(dados.data.questions[0].answers[0].image)
    const renderizarPerguntas =  document.querySelector(".caixaquizz-tela2");
    renderizarPerguntas.innerHTML = "";

       for (let i = 0; i < numPerguntas; i++) {
        

        renderizarPerguntas.innerHTML = renderizarPerguntas.innerHTML + `<div class="caixa-perguntas">
        <div class="pergunta">
          <h1>${dados.data.questions[i].title}</h1>
        </div>
        <div class="caixa-respostas">
          <div class="caixa-respostas-esquerda">
            <div class="resposta-figura"> 
              <div class="figura">
                <img src="${dados.data.questions[i].answers[0].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[0].text}</h1>
              </div>
            </div>
            <div class="resposta-figura">
              <div class="figura">
                <img src="${dados.data.questions[i].answers[1].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[1].text}</h1>
              </div>
            </div>
          </div>
          <div class="caixa-respostas-direita">
            <div class="resposta-figura">
              <div class="figura">
                <img src="${dados.data.questions[i].answers[2].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[2].text}</h1>
              </div>
            </div>
            <div class="resposta-figura">
              <div class="figura">
                <img src="${dados.data.questions[i].answers[3].image}" />
              </div>
              <div class="resposta">
                <h1 class="resposta-texto">${dados.data.questions[i].answers[3].text}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>`
    }  

}

buscarQuizzEscolhido(); 
 
const pegaQuiz = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
console.log(pegaQuiz);  