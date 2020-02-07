const API_KEY = "7c8f60faa10b467eb9125983b251e76f";

let config = {
    method: "GET"
}

let boarNoticia = document.querySelector("#boarNoticias")
let btnCarregar = document.querySelector("#carregar")



function mostrarNaTela(listaNoticias) {
    listaNoticias.forEach((paraNoticia) => {
        let noticiaNova = `<div class="col-lg-4">
        <div class="card" class="row">
            <img class="card-img" src=${paraNoticia.urlToImage} alt="Imagem da notícia" class="card-img">
            <h3 class="text-center">${paraNoticia.title}</h3>
            <div class="card-body text-justify">
            ${paraNoticia.description}
            </div>
            <button class="btn btn-primary">Ver noticias completa</button>
        </div>
    </div>`

boarNoticia.insertAdjacentHTML("beforeend",noticiaNova)

    })
}

btnCarregar.onclick = ()=> {   
    let resposta = fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=" + API_KEY, config)
    .then((resposta) => {
        return resposta.json()
    })

    .then((json) => {

        mostrarNaTela(json.articles)
    })
}