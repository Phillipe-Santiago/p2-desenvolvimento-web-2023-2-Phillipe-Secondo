document.addEventListener('DOMContentLoaded', function () {
    const detalhesDiv = document.getElementById('detalhes-jogador');

    if (detalhesDiv) {
        const atletaSelecionado = JSON.parse(localStorage.getItem('atletaSelecionado'));

        if (atletaSelecionado && atletaSelecionado.id) {
            const urlCompleta = `https://botafogo-atletas.mange.li/${atletaSelecionado.id}`;
            obterDadosJogador(urlCompleta);
        } else {
            console.error('Nenhum jogador selecionado ou ID de jogador ausente.');
        }
    } else {
        console.error('Elemento com ID "detalhes-jogador" não encontrado.');
    }

    async function obterDadosJogador(url) {
        try {
            const response = await fetch(url);
            const dadosJogador = await response.json();

            mostrarDetalhes(dadosJogador);
        } catch (error) {
            console.error('Erro ao obter dados do jogador:', error);
        }
    }

    function mostrarDetalhes(dadosJogador) {
        const container = document.createElement('div');
        const imagem = document.createElement('img');
        const nome = document.createElement('p');
        const posicao = document.createElement('p');
        const descricao = document.createElement('p');
        const nomeCompleto = document.createElement('p');
        const dataNascimento = document.createElement('p');
        const altura = document.createElement('p');

        container.style.width = '100%';
        container.style.textAlign = 'center';

        imagem.src = dadosJogador.imagem;
        imagem.alt = `Imagem de ${dadosJogador.nome}`;
        imagem.style.width = '200px';

        nome.innerText = `Nome: ${dadosJogador.nome}`;
        posicao.innerText = `Posicao: ${dadosJogador.posicao}`;
        descricao.innerText = `Descricao: ${dadosJogador.descricao}`;
        nomeCompleto.innerText = `Nome Completo: ${dadosJogador.nome_completo}`;
        dataNascimento.innerText = `Nascimento: ${dadosJogador.nascimento}`;
        altura.innerText = `Altura: ${dadosJogador.altura}`;

        container.appendChild(imagem);
        container.appendChild(nome);
        container.appendChild(posicao);
        container.appendChild(descricao);
        container.appendChild(nomeCompleto);
        container.appendChild(dataNascimento);
        container.appendChild(altura);

        detalhesDiv.appendChild(container);
    }
});

function voltar() {
    localStorage.removeItem('atletaSelecionado');
    window.location.href = 'jogador.html';  
}
