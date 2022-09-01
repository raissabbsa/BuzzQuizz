
function mostrarTela2() {
    const ocultarTela1 = document.querySelector("tela1");
    ocultarTela1.classList.add(esconder);
    const mostrarTela2 = document.querySelector("tela2")
    mostrarTela2.classList.remove(escondido)

    renderizarQuizzEscolhido()
}

function renderizarQuizzEscolhido() {
    
    const pegarQuizz = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/1");
    pegarQuizz.then(trazerResposta);
    console.log(pegarQuizz);
}

function trazerResposta() {
    console.log("chegou")
}

renderizarQuizzEscolhido();