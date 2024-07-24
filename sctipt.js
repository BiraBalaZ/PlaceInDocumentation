const inputPesquisa = document.getElementById('minhaPesquisa');
const itensLista = document.querySelectorAll('#indice-lateral ul li');

inputPesquisa.addEventListener('input', function() {
    const termoPesquisa = this.value.toLowerCase();
    const regexPesquisa = new RegExp(termoPesquisa, 'gi'); // Expressão regular para pesquisa global e sem distinção de maiúsculas/minúsculas

    itensLista.forEach(function(item) {
        const textoItem = item.textContent.toLowerCase();

        if (regexPesquisa.test(textoItem)) {
            // Se o termo de pesquisa for encontrado
            item.style.display = 'block';

            // Realçar os termos de pesquisa (opcional (ESTÁ COM PROBLEMAS))
            // const textoComDestaque = textoItem.replace(regexPesquisa, `<span class="destaque">$1</span>`);
            // item.innerHTML = textoComDestaque;
        } else {
            item.style.display = 'none';
        }
    });
});

// Fazer o botão aparecer apenas ao abaixar um pouco a tela
window.onscroll = function() {
    mostrarBotaoFlutuante();
};

function mostrarBotaoFlutuante() {
    const botaoFlutuante = document.querySelector('.botao-flutuante');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        botaoFlutuante.style.opacity = 1;
        botaoFlutuante.style.visibility = 'visible';
    } else {
        botaoFlutuante.style.opacity = 0;
        botaoFlutuante.style.visibility = 'hidden';
    }
}

// Botão de subir para o topo da página
function irParaTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Gavetas
const drawers = document.querySelectorAll('.drawer');

drawers.forEach(drawer => {
    const header = drawer.querySelector('.drawer-header');
    const content = drawer.querySelector('.drawer-content');

    header.addEventListener('click', () => {
        drawer.classList.toggle('open');
    });
});