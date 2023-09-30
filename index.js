
    
        
        function navegar(pagina) {
            
            const botoesMenu = document.querySelectorAll("#menu button");
            botoesMenu.forEach(botao => botao.classList.remove("active"));

            
            const paginas = document.querySelectorAll("#conteudo > div");
            paginas.forEach(paginaElement => {
                paginaElement.style.display = "none";
            });

            
            document.querySelector(`#menu button[data-pagina="${pagina}"]`).classList.add("active");

            
            document.getElementById(`pagina-${pagina}`).style.display = "block";
        }

        
        navegar("pagina-inicio");
  