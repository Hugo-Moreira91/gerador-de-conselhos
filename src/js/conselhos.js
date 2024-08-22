const btnConselhos = document.getElementById('btn-gerador-de-conselhos');
const numeroConselho = document.getElementById('numero-conselho');
const conselho = document.getElementById('conselho-gerado');

btnConselhos.addEventListener('click', () => {
    exibirConselhoGerado();
})

async function gerarConselho() {
    const url = 'https://api.adviceslip.com/advice';

    const resposta = await fetch(url);

    return await resposta.json();
}

async function exibirConselhoGerado() {
    try {
        const conselhoGerado = await gerarConselho();

        numeroConselho.innerText = conselhoGerado.slip.id;

        conselho.innerText = `"${conselhoGerado.slip.advice}"`;
    } catch (err) {
        console.log(err);
    }
}

exibirConselhoGerado();