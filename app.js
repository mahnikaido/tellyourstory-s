function pesquisar() {
    // obtém a secao HTML onde os resultados serao exibidos 
    let section = document.getElementById("resultados-pesquisa"); 
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome das histórias ou personagens.</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // iniciamos uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // para cada dado da lista de dados 
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();
        // se titulo includes campoPesquisa 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Saiba Mais</a>
            </div>
            `;
        }
    }
    
    if (!resultados) {
     resultados = "<p>Nada foi encontrado.</p>"
    }
    // atribui os resultados gerados a secao HTML
    section.innerHTML = resultados;
    
}