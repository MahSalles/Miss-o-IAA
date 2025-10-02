const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se deparou com muitas fake news nos meios sociais e acabou encontrando uma IA que analiza as informações e responde se elas são verídicas ou não! O que você acha disso?",
        alternativas: [
            {
            texto:"Isso é assustador !",
            afirmacao:"Não confio que uma IA iria conseguir detectar uma fake news, ela poderia hackear meus dados."
            },
            {
            texto:"Isso é muito útil !!!",
            afirmacao:"Seria perfeito, tem muitas pessoas maldosas que publicam fake news e acredito que seja confiável."
            }
            
        ]
    },
    {
        enunciado: "Você começou a utilizar essa IA e achou muito interessante o site, começou a responder as perguntas sobre fake news. Você viu uma notícia que um ator morreu, mas a notícia está em um site estranho, o que você faria?",
        alternativas: [
            {
            texto:"Usaria a IA que achei",
            afirmacao:"Como confio muito nessa IA iria usar ela porque tenho curiosidade para saber a verdade."
            },
            {
           texto: "Repasso para todo mundo por precaução e corro para comentar nas redes sociais.",
            afirmacao:"Não acredito nessa IA e com certeza a notícia é verdadeira."
            }
        ]
    },
    {
        enunciado: "Depois que a IA te respondeu sobre a noticia ser falsa, o que você faz?",
        alternativas: [
            {
            texto:"Pesquisa em outras fontes se a informação realmente é falsa e a IA é realmente segura para ser utilizada.",
            afirmacao:"Até pode ser verdade que essa IA funcione, mas é melhor pesquisar mais por garantia. "
            },
            {
            texto:"Acredito que a IA é segura e não vou atrás de outras fontes para  confirmar a informação.",
            afirmacao:"Confio nela, afinal está ajudando muitas pessoas."
            }
        ]
    },
    {
        enunciado: "Ao final das perguntas você gostou do site e teve reações positivas, o que você pensa em fazer ?",
        alternativas: [
            {
            texto:"Repassar o site para seus amigos e nos da uma avaliação positiva",
            afirmacao:"Gostei muito, vou passar sim para todos e fazer avaliações positivas."
            },
            {
            texto:"Gosto do site dou avaliação positiva mas não repasso para ninguém ",
            afirmacao:"Melhor não repassar afinal pode ser só sorte que dessa vez funcionou."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();