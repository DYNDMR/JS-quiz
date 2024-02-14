const perguntas = [
    {
        questao: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const"
        ],
        correta: 2
    },
    {
        questao: "Qual dos seguintes métodos converte uma string para um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "parseFloat()",
            "toInteger()"
        ],
        correta: 0
    },
    {
        questao: "Qual operador é usado para comparar igualdade de valor e tipo em JavaScript?",
        respostas: [
            "==",
            "===",
            "!="
        ],
        correta: 1
    },
    {
        questao: "O que o método 'indexOf()' retorna quando o elemento não é encontrado no array?",
        respostas: [
            "-1",
            "0",
            "undefined"
        ],
        correta: 0
    },
    {
        questao: "Como se chama a estrutura de controle que permite executar repetidamente um bloco de código em JavaScript?",
        respostas: [
            "if-else",
            "for loop",
            "switch"
        ],
        correta: 1
    },
    {
        questao: "Qual é a função do método 'map()' em arrays em JavaScript?",
        respostas: [
            "Filtrar elementos",
            "Mapear elementos para um novo array",
            "Ordenar elementos"
        ],
        correta: 1
    },
    {
        questao: "O que o comando 'typeof' retorna para um array em JavaScript?",
        respostas: [
            "'array'",
            "'object'",
            "'string'"
        ],
        correta: 1
    },
    {
        questao: "Em JavaScript, qual é a diferença entre 'null' e 'undefined'?",
        respostas: [
            "Não há diferença",
            "'null' é atribuído pelo programador, 'undefined' é atribuído pelo sistema",
            "'undefined' é atribuído pelo programador, 'null' é atribuído pelo sistema"
        ],
        correta: 2
    },
    {
        questao: "O que o operador '++' faz em JavaScript?",
        respostas: [
            "Incrementa o valor de uma variável",
            "Decrementa o valor de uma variável",
            "Concatena strings"
        ],
        correta: 0
    },
    {
        questao: "Qual é a forma correta de declarar uma função em JavaScript?",
        respostas: [
            "function minhaFuncao() {}",
            "let minhaFuncao = function() {}",
            "const minhaFuncao = () => {}"
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de' + totalDePerguntas;

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.questao

//laço para clonar as respostas
    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta);
        dt.querySelector('input').onchange = (event) => {
           const estaCorreta = event.target.value == item.correta


           corretas.delete(item)
           if(estaCorreta){
            corretas.add(item)
           }
           mostrarTotal.textContent = corretas.size + ' de' + totalDePerguntas;
        }


//adiciona na tela as respostas
        quizItem.querySelector('dl').appendChild(dt);
    }

//remove a pergunta A onde é usada apenas para clonar na tela
    quizItem.querySelector('dl dt').remove();
//adiciona na tela as perguntas a partir do laço de repetição
    quiz.appendChild(quizItem);

}