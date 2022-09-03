let tituloQuizz;
let urlImagem;
let qntdPerguntas;
let qntdNiveis;
let idPergunta;

function infoBasicas() {
    tituloQuizz =document.querySelector('.tituloQuizz');
    urlImagem =document.querySelector('.urlImagem');
    qntdPerguntas =document.querySelector('.qntdPerguntas');
    qntdNiveis =document.querySelector('.qntdNiveis');

    const tituloOk = (tituloQuizz.value.length>=20 && tituloQuizz.value.length<=65);
    const urlOk = verificaUrl(urlImagem.value);
    const qntPergOk = (Number(qntdPerguntas.value)>2);
    const qntNivOk = (Number(qntdNiveis.value)>1);

    const tela31 = document.querySelector('.tela3-1');
    const tela32 = document.querySelector('.tela3-2');

    if(tituloOk && urlOk && qntPergOk && qntNivOk) {
        tela31.classList.remove('visivel');
        tela32.classList.add('visivel');
        criandoQuizz();
    }
    else {
        alert('Preencha os dados corretamente');
    }

    /*console.log(tituloQuizz.value);
    console.log(urlImagem.value);
    console.log(Number(qntdPerguntas.value));
    console.log(Number(qntdNiveis.value));*/

}

function criandoQuizz() {

    let tela32 = document.querySelector('.tela3-2 .perguntas');

    for(let i=0; i<qntdPerguntas.value; i++) {
        tela32.innerHTML += `<div data-identifier="question-form" class="perg pergunta${i+1}">
            <div class="pergunta-n">
            <h3>Pergunta ${i+1}</h3> 
            <img data-identifier="expand" onclick="criandoPerguntas(this)" src="imagens/Vector.png" />
        </div>

        <div class="maisPerguntas escondido">
            <input type="text" placeholder="Texto da pergunta" class="textoPergunta" />
            <input type="text" placeholder="Cor de fundo da pergunta" class="corPergunta" />

            <h2>Resposta correta</h2>
            <input type="text" placeholder="Resposta correta" class="respCorreta" />
            <input type="text" placeholder="URL da imagem" class="urlImagemPergunta" />

            <h2>Respostas Incorretas</h2>
            <input type="text" placeholder="Resposta incorreta 1" class="respIncorreta" />
            <input type="text" placeholder="URL da imagem 1" class="urlImagemPerguntaIn" />

            <input type="text" placeholder="Resposta incorreta 2" class="respIncorreta" />
            <input type="text" placeholder="URL da imagem 2" class="urlImagemPerguntaIn" />

            <input type="text" placeholder="Resposta incorreta 3" class="respIncorreta" />
            <input type="text" placeholder="URL da imagem 3" class="urlImagemPerguntaIn" />
        </div>
      </div>`;
    }
}

function criandoPerguntas(criaPergunta) {

    divPerg=criaPergunta.parentNode.parentNode;
    const pegaDiv = divPerg.querySelector('.maisPerguntas');
    pegaDiv.classList.remove('escondido');
    criaPergunta.classList.add('escondido');

}

let textoPergunta;
let corPergunta;
let respCorreta;
let urlImagemPergunta;

function criaPerguntasQuizz() {

    let verifica=1;
    textoPergunta = document.querySelectorAll('.textoPergunta');
    for(let i=0; i<textoPergunta.length; i++) {
        if(textoPergunta[i].value.length<20) {
            verifica=0;
        }

    }

    corPergunta = document.querySelectorAll('.corPergunta');
    for(let i=0; i<corPergunta.length; i++) {
        const ehexa = verificaHexa(corPergunta[i].value);
        if(!ehexa) {
            verifica=0;
        } 

    }
    
    
    respCorreta = document.querySelectorAll('.respCorreta');
    for(let i=0; i<respCorreta.length; i++) {
        if(respCorreta[i].value.length==0) { 
            verifica=0;
        }

    }

    urlImagemPergunta = document.querySelectorAll('.urlImagemPergunta');
    for(let i=0; i<urlImagemPergunta.length; i++) {
        const urlOk = verificaUrl(urlImagemPergunta[i].value);
        if(!urlOk){
            verifica=0;
        }
    }

    const maisPerguntas = document.querySelectorAll('.maisPerguntas');
    for(let i=0; i< maisPerguntas.length; i++) {
        respIncorreta = maisPerguntas[i].querySelectorAll('.respIncorreta');
        urlImagemPerguntaIn = maisPerguntas[i].querySelectorAll('.urlImagemPerguntaIn');
        let cont=0;
        for(let j=0; j<respIncorreta.length; j++) {
            if(respIncorreta[j].value.length>0) {
                cont++;
                const urlInOk = verificaUrl(urlImagemPerguntaIn[j].value);
                if(!urlInOk){
                    verifica=0;
                }
            }
        }
        if(cont<1) {
            verifica=0;
            break;
        }

    }

    if(verifica == 0) {
        alert('Preencha os dados corretamente');
    }
    else {
        const tela32 = document.querySelector('.tela3-2');
        const tela33 = document.querySelector('.tela3-3');
        tela32.classList.remove('visivel');
        tela33.classList.add('visivel');
        preencheNiveis();
    }
}

function preencheNiveis() {
    let tela33 = document.querySelector('.tela3-3 .perguntas');
    for(let i=0; i<qntdNiveis.value; i++) {
        tela33.innerHTML += `<div data-identifier="level" class="niveis">
            <div class="nivel-n">
            <h3>Nível ${i+1}</h3>
            <img data-identifier="expand" onclick="liberaNiveis(this)" src="imagens/Vector.png" />
        </div>
        <div class="maisNiveis escondido">
            <input type="text" placeholder="Título do nível" class="tituloNivel" />
            <input type="text" placeholder="% de acerto mínims" class="porcAcerto" />
            <input type="text" placeholder="URL da imagem do nível" class="urlImagemNivel" />
            <input type="text" placeholder="Descrição do nível" class="descricaoNivel" />
        </div>
      </div>`
    }
}

function liberaNiveis(criaNiveis) {
    divNiveis = criaNiveis.parentNode.parentNode;
    const pegaDiv = divNiveis.querySelector('.maisNiveis');
    pegaDiv.classList.remove('escondido');
    criaNiveis.classList.add('escondido');
}

let tituloNivel;
let porcAcerto;
let urlImagemNivel;
let descricaoNivel;

function criaNiveisQuizz() {
    let verifica=1;

    tituloNivel = document.querySelectorAll('.tituloNivel')
    for(let i =0; i<tituloNivel.length; i++) {
        if(tituloNivel[i].value.length<10) {
            verifica=0;
        }
    }

    porcAcerto = document.querySelectorAll('.porcAcerto')
    let cont=0;
    for(let i =0; i<porcAcerto.length; i++) {
        if(porcAcerto[i].value<0 || porcAcerto[i].value>100) {
            verifica=0;
        }
        else if(porcAcerto[i].value == 0) {
            cont++;
        }
    }
    if(cont == 0) {
        verifica=0;
    }

    urlImagemNivel = document.querySelectorAll('.urlImagemNivel')
    for(let i =0; i<urlImagemNivel.length; i++) {
        const checaUrl= verificaUrl(urlImagemNivel[i].value);
        if(!checaUrl) {
            verifica=0;
        }
    }

    descricaoNivel = document.querySelectorAll('.descricaoNivel')
    for(let i =0; i<descricaoNivel.length; i++) {
        if(descricaoNivel[i].value.length<30) {
            verifica=0;
        }
    }


    if(verifica == 0) {
        alert('Preencha os dados corretamente');
    }
    else {
        enviaQuizz();
        /*const tela33 = document.querySelector('.tela3-3');
        const tela34 = document.querySelector('.tela3-4');
        tela33.classList.remove('visivel');
        tela34.classList.add('visivel');*/
    }
}

function enviaQuizz() {

    dados = {
        title: tituloQuizz.value,
        image: urlImagem.value,
        questions: [],
        levels: []
    }

    const maisPerguntas = document.querySelectorAll('.maisPerguntas');

    for(let i=0; i<qntdPerguntas.value; i++) {
        let question = {
            title: textoPergunta[i].value,
            color: corPergunta[i].value,
            answers: [{
                text: respCorreta[i].value,
                image: urlImagemPergunta[i].value,
                isCorrectAnswer: true}]}
            
        

        const respIncorreta = maisPerguntas[i].querySelectorAll('.respIncorreta');
        const urlImagemPerguntaIn = maisPerguntas[i].querySelectorAll('.urlImagemPerguntaIn');
        
        for(let j=0; j<respIncorreta.length; j++) {
            if(respIncorreta[j].value.length>0) {

                let respErrada = {
                    text: respIncorreta[j].value,
                    image: urlImagemPerguntaIn[j].value,
                    isCorrectAnswer: false
                }
                
                question.answers.push(respErrada);
            }   
        } 
        dados.questions.push(question);  
    }
    
    for(let i=0; i<qntdNiveis.value; i++) {
        let level = {
			title: tituloNivel[i].value,
			image: urlImagemNivel[i].value,
			text: descricaoNivel[i].value,
			minValue: porcAcerto[i].value
		}
        dados.levels.push(level);
    }

    const requisicao = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', dados);
    requisicao.then(tratarSucesso);   
}

function tratarSucesso(argumento) {
    const tela33 = document.querySelector('.tela3-3');
    const tela34 = document.querySelector('.tela3-4');
    tela33.classList.remove('visivel');
    tela34.classList.add('visivel');

    const telaImagem = document.querySelector('.tela3-4 .imagem');
    telaImagem.innerHTML += `<img src=${urlImagem.value} />
    <div class="textoImg">${tituloQuizz.value}</div>`

    idPergunta = argumento.data.id;
    console.log(argumento);
}

function verificaHexa(hexa) {
    let verifica=1;

    if(hexa[0] !== "#") {
        verifica = 0;
        console.log(hexa[0]);
    }

    if(hexa.length !== 7) {
        verifica = 0;
        console.log(hexa.length);
    }

    let ehexa= "0123456789abcdefABCDEF";
    for(let i=1; i<hexa.length; i++) {
        let verificaLetras=0;
        for(let j=0; j<ehexa.length; j++) {
            if(hexa[i] === ehexa[j]) {
                verificaLetras=1;
            }
        }
        if(verificaLetras === 0) {
            verifica=0;
            break;
        }
    }
    if(verifica === 1) {
        return true;
    }
    else {
        return false;
    }

}

/*acessarQuizz(){

}

voltarHome() {

}*/

function verificaUrl(urlImagem) {
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
	  return !!urlPattern.test(urlImagem);
}