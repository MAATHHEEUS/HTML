const lista = document.querySelector("[data-lista]");

function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__itens";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}" title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div class="video__descricao">
        <img src="${imagem}" alt="Logo do canal da Alura cursos online">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>`;

    return video;
}

async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoJSON = await conexao.json();
    if(conexao){
        lista.innerHTML = ``;
        conexaoJSON.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
        ));
    }
}

listaVideos();