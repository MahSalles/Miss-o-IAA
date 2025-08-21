const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se deparou com muitas fake news nos meios sociais e acabou encontrando uma IA que analiza as informações e responde se elas são verídicas ou não! O que você acha disso?",
        alternativas: [
            "Isso é assustador !",
            "Isso é muito útil !!!"
        ]
    },
    {
        enunciado: "Você começou a utilizar essa IA e achou muito interessante o site, começou a responder as perguntas sobre fake news. Você viu uma notícia que um ator morreu, mas a notícia está em um site estranho, o que você faria?",
        alternativas: [
            "Usaria a IA que achei",
            "Repasso para todo mundo por precaução e corro para comentar nas redes sociais.",
        ]
    },
    {
        enunciado: "Depois que a IA te respondeu sobre a noticia ser falsa, o que você faz?",
        alternativas: [
            " Pesquisa em outras fontes se a informação realmente é falsa e a IA é realmente segura para ser utilizada.",
            "Acredito que a IA é segura e não vou atrás de outras fontes para  confirmar a informação."
        ]
    },
    {
        enunciado: "Ao final das perguntas você gostou do site e teve reações positivas, o que você pensa em fazer ?",
        alternativas: [
            "Repassar o site para seus amigos e nos da uma avaliação positiva",
            "Gosto do site dou avaliação positiva mas não repasso para ninguém "
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();