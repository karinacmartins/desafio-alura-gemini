// Função chamada quando o usuário clica no botão de pesquisar
function pesquisar() {
    // Obtém referências aos elementos HTML que serão manipulados
    let section = document.getElementById("resultados-pesquisa");
    let caixaMensagens = document.getElementById("caixa-mensagens");
    let mensagemErro = document.getElementById("mensagem-erro");

    // Limpa as mensagens de erro e os resultados anteriores
    caixaMensagens.style.display = "none";
    mensagemErro.innerHTML = "";
    section.innerHTML = ""; // Limpa os resultados anteriores

    // Obtém e remove espaços extras do valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    // Verifica se o campo de pesquisa está vazio após remover os espaços
    if (!campoPesquisa) {
        mensagemErro.innerHTML = "Digite sua busca por treinos ou exercícios.";
        caixaMensagens.style.display = "block"; // Mostra a caixa de erro
        return;
    }

    // Função para remover acentos do texto
    function removerAcentos(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Remove acentos e transforma o texto da pesquisa em minúsculas
    campoPesquisa = removerAcentos(campoPesquisa.toLowerCase());

    // Adiciona uma verificação para que a pesquisa seja ignorada se for apenas uma letra
    if (campoPesquisa.length < 2) {
        mensagemErro.innerHTML = "Digite pelo menos duas letras para realizar a busca.";
        caixaMensagens.style.display = "block"; // Mostra a caixa de erro
        section.innerHTML = ""; // Limpa os resultados anteriores
        return;
    }

    // Função para verificar se o termo de pesquisa corresponde a qualquer palavra do texto
    function verificarCorrespondencia(texto) {
        let palavras = texto.split(" ");
        return palavras.some(palavra => palavra.includes(campoPesquisa));
    }

    // Inicializa a variável que armazenará os resultados da pesquisa
    let resultados = "";
    
    // Itera sobre os dados disponíveis para realizar a pesquisa
    for (let dado of dados) {
        // Remove acentos e transforma o título e a descrição para minúsculas
        let titulo = removerAcentos(dado.titulo.toLowerCase());
        let descricao = removerAcentos(dado.descricao.toLowerCase());

        // Verifica se as tags são arrays ou strings e trata adequadamente
        let tags = Array.isArray(dado.tags) ? removerAcentos(dado.tags.join(", ").toLowerCase()) : removerAcentos(dado.tags.toLowerCase());

        // Verifica se o campo de pesquisa corresponde a alguma palavra do título, descrição ou tags
        let tituloMatch = verificarCorrespondencia(titulo);
        let descricaoMatch = verificarCorrespondencia(descricao);
        let tagsMatch = verificarCorrespondencia(tags);

        // Se houver correspondência, adiciona o resultado à variável de resultados
        if (tituloMatch || descricaoMatch || tagsMatch) {
            resultados += `
                <div class="item-resultado">
                    <div class="conteudo">
                        <div class="info-texto">
                            <h2>${dado.titulo}</h2>
                            <p class="descricao-meta">${dado.descricao}</p>
                            <p><a href="${dado.link}" target="_blank">Assista ao vídeo no YouTube</a></p>
                        </div>
                        <iframe class="video" src="${dado.videoUrl}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div> 
            `;
        }
    }

    // Se não houver resultados, exibe uma mensagem de erro
    if (!resultados) {
        mensagemErro.innerHTML = "Desculpe, não temos esse tipo de treino disponível no site.";
        caixaMensagens.style.display = "block"; // Mostra a caixa de erro
        section.innerHTML = ""; // Limpa os resultados anteriores
        return;
    }

    // Exibe os resultados na página
    section.innerHTML = resultados;
}

// Função chamada para limpar o campo de pesquisa e ocultar a caixa de mensagens
function limparCampo() {
    document.getElementById("campo-pesquisa").value = "";
    document.getElementById("resultados-pesquisa").innerHTML = ""; // Limpa os resultados
    document.getElementById("caixa-mensagens").style.display = "none"; // Oculta a caixa de mensagens
}

// Adiciona um evento para fechar a caixa de mensagens de erro quando o botão é clicado
document.getElementById("fechar-mensagem").addEventListener("click", function() {
    document.getElementById("caixa-mensagens").style.display = "none";
});

// Adiciona um evento para realizar a pesquisa quando o botão Enter é pressionado no campo de pesquisa
document.getElementById("campo-pesquisa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        pesquisar();
    }
});
