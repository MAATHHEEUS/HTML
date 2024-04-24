async function criarVideo(titulo, url, descricao, imagem) {
    const conexao = await fetch("http://localhost:3000/video", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: descricao,
            url: url,
            imagem: imagem
        })
    });
    if(!conexao.ok) throw new Error("Não foi possível carregar o vídeo.");
    const conexaoConvertida = conexao.json();
}

const formulario = document.querySelector("[data-formulario]");

async function submitForm(evento) {
    evento.preventDefault();

    const descricao = document.querySelector("[data-descricao]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        await criarVideo(titulo, url, descricao, imagem);

        window.location.href = "../pages/envio-concluido.html";     
    } catch (error) {
        alert(error);
    }
}

formulario.addEventListener("submit", evento => submitForm(evento));