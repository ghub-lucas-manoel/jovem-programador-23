document.addEventListener('DOMContentLoaded', function() {
    const botoesComprar = document.querySelectorAll('.comprar');
    const linksNavegacao = document.querySelectorAll('nav a');

    botoesComprar.forEach(function(botao) {
        botao.addEventListener('click', function() {
            alert('Produto adicionado ao carrinho!');
        });
    });

    linksNavegacao.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const destino = this.getAttribute('href');
            carregarPagina(destino);
        });
    });

    function carregarPagina(pagina) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', pagina, true);

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                const resposta = xhr.responseText;
                const parser = new DOMParser();
                const novoConteudo = parser.parseFromString(resposta, 'text/html');
                const novaMain = novoConteudo.querySelector('main');
                const conteudoAtual = document.querySelector('main');

                conteudoAtual.parentNode.replaceChild(novaMain, conteudoAtual);

                
                const novosLinks = novoConteudo.querySelectorAll('nav a');

                novosLinks.forEach(function(link) {
                    link.addEventListener('click', function(event) {
                        event.preventDefault();
                        const destino = this.getAttribute('href');
                        carregarPagina(destino);
                    });
                });

            } else {
                console.error('Erro ao carregar a página.');
            }
        };

        xhr.send();
    }
});