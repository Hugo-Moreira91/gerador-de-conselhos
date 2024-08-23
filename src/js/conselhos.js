const btnConselhos = document.getElementById('btn-gerador-de-conselhos');
const numeroConselho = document.getElementById('numero-conselho');
const conselho = document.getElementById('conselho-gerado');

async function gerarConselho() {
    try {
        const url = 'https://api.adviceslip.com/advice';

        const resposta = await fetch(url);

        console.log(resposta);
        

        if (!resposta.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }

        const conteudoDoConselho = await resposta.json();

        numeroConselho.innerText = conteudoDoConselho.slip.id;
        conselho.innerText = `"${conteudoDoConselho.slip.advice}"`;
    } catch(err){
        console.error("Erro ao tentar buscar as informações da API", err);
    }

}

btnConselhos.addEventListener('click', gerarConselho);

gerarConselho();