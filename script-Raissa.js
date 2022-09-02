let qntdPerguntas;
let qntdNiveis;

function infoBasicas() {
    const tituloQuizz =document.querySelector('.tituloQuizz');
    const urlImagem =document.querySelector('.urlImagem');
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
    }
    else {
        alert('Preencha os dados corretamente');
    }

    console.log(tituloQuizz.value);
    console.log(urlImagem.value);
    console.log(Number(qntdPerguntas.value));
    console.log(Number(qntdNiveis.value));


}

function criandoQuizz() {

    const tela32 = document.querySelector('.tela3-2 .perguntas');

    for(let i=0; i < qntdPerguntas; i++) {
        tela32.innerHTML += `<div class="pergunta${i+1}">
        <h3>Pergunta ${i+1}</h3>
        <img onclick="criandoQuizz(this)" src="imagens/Vector.png" />
      </div>`
    }
}

function verificaUrl(urlImagem) {
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
	  return !!urlPattern.test(urlImagem);
}