document.addEventListener("DOMContentLoaded", function () {
    const menuToggleIcon = document.querySelector(".navbar-toggler");
    const navMenu = document.querySelector(".navbar-collapse");

    menuToggleIcon.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});
// Simulação de dados de projetos para a pesquisa (substitua isso com seus próprios dados)
const projectData = [
    { title: "Projeto 1", description: "Descrição do Projeto 1" },
    { title: "Projeto 2", description: "Descrição do Projeto 2" },
    { title: "Projeto 3", description: "Descrição do Projeto 3" },
    // Adicione mais projetos conforme necessário
];

const projectSearchInput = document.getElementById("projectSearchInput");
const projectSearchButton = document.getElementById("projectSearchButton");
const projectSearchResults = document.getElementById("projectSearchResults");

// Função para realizar a pesquisa de projetos
function searchProjects() {
    const searchTerm = projectSearchInput.value.toLowerCase();
    const matchingProjects = projectData.filter(project => {
        return project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm);
    });

    displayProjectResults(matchingProjects);
}

// Função para exibir os resultados da pesquisa de projetos
function displayProjectResults(projects) {
    projectSearchResults.innerHTML = "";

    if (projects.length === 0) {
        projectSearchResults.innerHTML = "<p>Nenhum projeto encontrado.</p>";
        return;
    }

    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("result-item");
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectSearchResults.appendChild(projectItem);
    });
}

// Adicione um evento de clique ao botão de pesquisa de projetos
if (projectSearchButton) {
    projectSearchButton.addEventListener("click", searchProjects);
}

// Função para definir o título e a descrição da página com base no parâmetro da URL
function setPageTitleAndDescription() {
    const urlParams = new URLSearchParams(window.location.search);
    const pageTitle = urlParams.get("page");
    const pageDescription = getPageDescription(pageTitle);

    if (pageTitle) {
        document.title = `Zago Planner - ${pageTitle}`;
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = `<h2>${pageTitle}</h2>`;
        contentDiv.innerHTML += `<p>${pageDescription}</p>`;
        // Exiba ou oculte a barra de pesquisa de projetos com base na página
        if (pageTitle === "Meus Projetos") {
            document.querySelector(".search-container").style.display = "block";
        } else {
            document.querySelector(".search-container").style.display = "none";
        }
    }
}

// Função para obter a descrição da página com base no título
function getPageDescription(title) {
    switch (title) {
        case "Manual do Usuário":
            return "Bem-vindo ao Manual do Usuário. Aqui você encontrará informações úteis sobre o Zago Planner.";
        case "Criar Projeto":
            return "Crie um novo projeto e gerencie suas tarefas com facilidade.";
        case "Meus Projetos":
            return "Aqui você pode visualizar e gerenciar seus projetos.";
        case "Produtos Zago":
            return "Conheça nossos produtos Zago e aproveite os benefícios.";
        case "Parceria":
            return "Saiba mais sobre nossas parcerias e oportunidades.";
        case "Sobre Nós":
            return "Descubra quem somos e nossa missão.";
        default:
            return "";
    }
}

// Defina o título e a descrição da página quando a página é carregada
setPageTitleAndDescription();
