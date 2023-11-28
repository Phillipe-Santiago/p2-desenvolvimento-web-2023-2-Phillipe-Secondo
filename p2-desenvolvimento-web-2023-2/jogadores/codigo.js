const body = document.body;
const atletasContainer = document.getElementById('atletas-container');

function masculino() {
    atletasContainer.innerHTML = '';

    body.style.display = 'flex';
    body.style.gap = '.5em';
    body.style.flexWrap = 'wrap';

    const preenche = (atleta) => {

        const container = document.createElement('article');
        const titulo = document.createElement('h3');
        const imagem = document.createElement('img');

        container.dataset.id = atleta.id;
        container.dataset.altura = atleta.altura;
        container.dataset.nome_completo = atleta.nome_completo;
        container.dataset.nascimento = atleta.nascimento;


        container.style.width = '15em';
        container.style.backgroundColor = 'gray';
        container.style.textAlign = 'center';
        container.style.margin = 'auto';

        titulo.innerText = atleta.nome;
        imagem.src = atleta.imagem;
        imagem.alt = `Imagem de ${atleta.nome}`;

        container.appendChild(titulo);
        container.appendChild(imagem);

        container.onclick = handleClick;

        const saibaMaisButton = document.createElement('button');
        saibaMaisButton.innerText = 'Saiba Mais';
        saibaMaisButton.onclick = () => abrirDetalhes(atleta);
        container.appendChild(saibaMaisButton);
        atletasContainer.appendChild(container);
    };

    const handleClick = (e) => {
        const artigo = e.target.closest('article');
        document.cookie = `id=${artigo.dataset.id}`;
        document.cookie = `nome_completo=${artigo.dataset.nome_completo}`;
        document.cookie = `nascimento=${artigo.dataset.nascimento}`;
        document.cookie = `altura=${artigo.dataset.altura}`;

        console.log(acha_cookie('nome_completo'));
    };

    const acha_cookie = (chave) => {
        const lista_de_cookies = document.cookie.split("; ");
        const procurado = lista_de_cookies.find(
            (e) => e.startsWith(chave));
        return procurado.split("=")[1];
    };

    const pegar_coisas = async (caminho) => {
        limparAtletas();

        const resposta = await fetch(caminho);
        const dados = await resposta.json();

        for (atleta of dados) {
            preenche(atleta);
        }
    };

    pegar_coisas(`https://botafogo-atletas.mange.li/masculino`);
}

function feminino() {
    atletasContainer.innerHTML = '';

    body.style.display = 'flex';
    body.style.gap = '.5em';
    body.style.flexWrap = 'wrap';

    const preenche = (atleta) => {
        const container = document.createElement('article');
        const titulo = document.createElement('h3');
        const imagem = document.createElement('img');

        container.dataset.id = atleta.id;
        container.dataset.altura = atleta.altura;
        container.dataset.nome_completo = atleta.nome_completo;
        container.dataset.nascimento = atleta.nascimento;

        container.style.width = '15em';
        container.style.backgroundColor = 'gray';
        container.style.textAlign = 'center';
        container.style.margin = 'auto';

        titulo.innerText = atleta.nome;
        imagem.src = atleta.imagem;
        imagem.alt = `Imagem de ${atleta.nome}`;

        container.appendChild(titulo);
        container.appendChild(imagem);

        container.onclick = handleClick;

        const saibaMaisButton = document.createElement('button');
        saibaMaisButton.innerText = 'Saiba Mais';
        saibaMaisButton.onclick = () => abrirDetalhes(atleta);
        container.appendChild(saibaMaisButton);

        atletasContainer.appendChild(container);
    };

    const handleClick = (e) => {
        const artigo = e.target.closest('article');
        document.cookie = `id=${artigo.dataset.id}`;
        document.cookie = `nome_completo=${artigo.dataset.nome_completo}`;
        document.cookie = `nascimento=${artigo.dataset.nascimento}`;
        document.cookie = `altura=${artigo.dataset.altura}`;

        console.log(acha_cookie('nome_completo'));
    };

    const acha_cookie = (chave) => {
        const lista_de_cookies = document.cookie.split("; ");
        const procurado = lista_de_cookies.find(
            (e) => e.startsWith(chave));
        return procurado.split("=")[1];
    };

    const pegar_coisas = async (caminho) => {
        limparAtletas();

        const resposta = await fetch(caminho);
        const dados = await resposta.json();

        for (atleta of dados) {
            preenche(atleta);
        }
    };

    pegar_coisas(`https://botafogo-atletas.mange.li/feminino`);
}

function todos() {
    atletasContainer.innerHTML = '';

    body.style.display = 'flex';
    body.style.gap = '.5em';
    body.style.flexWrap = 'wrap';

    const preenche = (atleta) => {
        const container = document.createElement('div');
        const titulo = document.createElement('h3');
        const imagem = document.createElement('img');

        container.dataset.id = atleta.id;
        container.dataset.altura = atleta.altura;
        container.dataset.nome_completo = atleta.nome_completo;
        container.dataset.nascimento = atleta.nascimento;

        container.style.width = '15em';
        container.style.backgroundColor = 'gray';
        container.style.textAlign = 'center';
        container.style.margin = 'auto';

        titulo.innerText = atleta.nome;
        imagem.src = atleta.imagem;
        imagem.alt = `Imagem de ${atleta.nome}`;

        container.appendChild(titulo);
        container.appendChild(imagem);

        container.onclick = handleClick;

        const saibaMaisButton = document.createElement('button');
        saibaMaisButton.innerText = 'Saiba Mais';
        saibaMaisButton.onclick = () => abrirDetalhes(atleta);
        container.appendChild(saibaMaisButton);
        atletasContainer.appendChild(container);
    };

    const handleClick = (e) => {
        const artigo = e.target.closest('article');
        document.cookie = `id=${artigo.dataset.id}`;
        document.cookie = `nome_completo=${artigo.dataset.nome_completo}`;
        document.cookie = `nascimento=${artigo.dataset.nascimento}`;
        document.cookie = `altura=${artigo.dataset.altura}`;

        console.log(acha_cookie('nome_completo'));
    };

    const acha_cookie = (chave) => {
        const lista_de_cookies = document.cookie.split("; ");
        const procurado = lista_de_cookies.find(
            (e) => e.startsWith(chave));
        return procurado.split("=")[1];
    };


    const pegar_coisas = async (caminho) => {
        limparAtletas();

        const resposta = await fetch(caminho);
        const dados = await resposta.json();

        for (atleta of dados) {
            preenche(atleta);
        }
    };

    pegar_coisas(`https://botafogo-atletas.mange.li/all`);
}


function abrirDetalhes(atleta) {
    localStorage.setItem('atletaSelecionado', JSON.stringify(atleta));
    window.location.href = "../p2-desenvolvimento-web-2023-2/detalhes/detalhes.html";
}

function sair() {
    localStorage.removeItem("senha");
    window.location.href = "p2-desenvolvimento-web-2023-2\auth\autenticacao.html";
}

document.getElementById('Seletor').addEventListener('change', function () {
    const selectedOption = this.value.toLowerCase();

    limparAtletas();

    switch (selectedOption) {
        case 'masculino':
            masculino();
            break;
        case 'feminino':
            feminino();
            break;
        case 'ambos':
            todos();
            break;
        default:
            console.error('Opção não reconhecida.');
    }
});

function limparAtletas() {
    while (atletasContainer.firstChild) {
        atletasContainer.removeChild(atletasContainer.firstChild);
    }
}
