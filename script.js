// Alterado de vocab-div para vocabDiv
const vocabDiv = document.getElementById("vocab");
const tempoDiv = document.getElementById("tempo");
const toggleBtn = document.getElementById("toggle");

let temposSelecionados = [];

const vocabList = [
    { palavra: "見る", godan: false },
    { palavra: "食べる", godan: false },
    { palavra: "行く", godan: true },
    { palavra: "飲む", godan: true },
    { palavra: "待つ", godan: true },
    { palavra: "話す", godan: true },
    { palavra: "聞く", godan: true },
    { palavra: "帰る", godan: true },
    { palavra: "起きる", godan: false },
    { palavra: "寝る", godan: false },
    { palavra: "買う", godan: true },
    { palavra: "売る", godan: true },
    { palavra: "作る", godan: true },
    { palavra: "入る", godan: true },
    { palavra: "走る", godan: true },
    { palavra: "開ける", godan: false },
    { palavra: "閉める", godan: false },
    { palavra: "死ぬ", godan: true },
    { palavra: "遊ぶ", godan: true },
    { palavra: "呼ぶ", godan: true }
];

const tempoList = [
    "Passado",
    "Passado Educado",
    "Te-Form",
    "Te-form Educado",
    "Volacional",
    "Skip"
];

function toggleConteudo(num) {
    switch (num) {
        case 1:
            vocabDiv.classList.toggle("aberto");
            break;

        case 2:
            tempoDiv.classList.toggle("aberto");
            break;
    }

}

function loadConteudo() {
    // -- Carregar os vocabularios

    //Cria o ul default
    const lista = document.createElement("ul");
    for (let i = 0; i < vocabList.length; i++) {
        //Cria o elemento li e guarda a palavra nele
        const addVocab = document.createElement("li");
        addVocab.textContent = vocabList[i].palavra;

        //Guarda o elemento no ul
        lista.appendChild(addVocab);
    }
    //Guarda o elemento ul no div correspondente
    vocabDiv.appendChild(lista);

    // -- Carregar o tempo dos verbos

    //Cria o elemento ul intermediario
    const listaTempo = document.createElement("ul");
    for (let i = 0; i < tempoList.length; i++) {
        if (tempoList[i] == "Skip") {
            //Cria um li default vazio
            const AddLi = document.createElement("li");
            AddLi.classList.add("quebrar-linha");

            //Colocando o Li dentro do Ul
            listaTempo.appendChild(AddLi);
        } else {
            //Cria o li correspondente
            const AddLi = document.createElement("li");

            //Cria o elemento input e configura ele
            const addTempo = document.createElement("input");
            addTempo.setAttribute("type", "checkbox");
            addTempo.checked = true;
            //Define a regra do nome dele
            let nome = i;
            addTempo.setAttribute("id", nome);
            addTempo.setAttribute("name", nome);
            addTempo.setAttribute("value", tempoList[i]);

            //Cria o elemento label e configura ele
            const addLabel = document.createElement("label");
            addLabel.setAttribute("for", nome);
            addLabel.textContent = tempoList[i];

            //Guarda os elementos dentro do Li
            AddLi.appendChild(addTempo);
            AddLi.appendChild(addLabel);

            //Colocando o Li dentro do Ul
            listaTempo.appendChild(AddLi);
        }

    }
    tempoDiv.appendChild(listaTempo);
}

function toggleOn() {
    toggleBtn.classList.toggle("toggled");

    const elementos = tempoDiv.querySelectorAll('*');

    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].nodeName = "INPUT") {
            elementos[i].checked = !elementos[i].checked;
            console.log("Achado")
        }
    }
    console.log("Setado")
}

function untoggleOn() {
    toggleBtn.classList.toggle("toggled");

    const elementos = tempoDiv.querySelectorAll('*');

    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].nodeName = "INPUT") {
            elementos[i].checked = false;
            console.log("Achado")
        }
    }
    console.log("Setado")
}

loadConteudo();

const tempoSelDiv = document.getElementById("verb-tense");
const verboBaseDiv = document.getElementById("base-verb");
const verboConjugDiv = document.getElementById("answer-text");

function Definir() {
    document.getElementById('hidden').classList.remove('hidden');
    // Certifique-se de que tempoDiv está definido globalmente ou use document.getElementById
    const elementos = tempoDiv.querySelectorAll('*');
    const selecionados = [];

    for (let i = 0; i < elementos.length; i++) {
        // CORREÇÃO: Usar === para comparação
        if (elementos[i].nodeName === "INPUT") {
            if (elementos[i].checked) {
                selecionados.push(elementos[i].id);
            }
        }
    }


    // Simplificando a atribuição
    temposSelecionados = selecionados;
    Carregar();
}

const btnQuiz1 = document.getElementById("btn-revelar");
const divQuiz = document.getElementById("answer-box");

function revealResposta() {
    divQuiz.classList.remove("hidden");
    btnQuiz1.classList.add("hidden")
}


function Carregar() {
    divQuiz.classList.add("hidden");
    btnQuiz1.classList.remove("hidden");

    // CORREÇÃO: Sorteio de índice (0 até length - 1)
    // Se temposSelecionados tem 4 itens, randomTemp será 0, 1, 2 ou 3
    let randomTemp = temposSelecionados[Math.floor(Math.random() * temposSelecionados.length)];
    randomTemp = Number(randomTemp);

    let randomVocab = Math.floor(Math.random() * vocabList.length);

    let palavraConjug;
    let verboAtual = vocabList[randomVocab];

    console.log(`A palavra selecionada: ${vocabList[randomVocab].palavra}`);
    console.log(`A posição da palavra: ${randomVocab} ; Limite: ${vocabList.length}`);
    console.log(`O tempo selecionado: ${tempoList[randomTemp]}`);
    console.log(`A posição do tempo: ${randomTemp} ; Limite: ${temposSelecionados.length}`);
    console.log(`O randomTemp: ${randomTemp}`)
    // Lembre-se: se randomTemp for 0, ele cairá no default se você começar os cases no 1
    switch (randomTemp) {
        case 0:
            palavraConjug = passado(verboAtual, false);
            break;
        case 1:
            palavraConjug = passado(verboAtual, true);
            break;
        case 2:
            palavraConjug = teForm(verboAtual, false);
            break;
        case 3:
            palavraConjug = teForm(verboAtual, true);
            break;
        case 4:
            palavraConjug = volational(verboAtual);
            break;
        default:
            palavraConjug = "Forma não definida"; // Útil para debug
            break;
    }

    tempoSelDiv.innerHTML = tempoList[randomTemp];
    verboBaseDiv.innerHTML = verboAtual.palavra;
    verboConjugDiv.innerHTML = palavraConjug;
}
















































//Funções responsavel pelas conjugações




//Essa função é respossavel por trnasformar o final do verbo em outra coisa
//Por exermpro: 待, final = つ, se o tipo for 1, ele retorna result = ち 
function transformarFim(palavra, tipo) {
    let palavraArray = palavra.palavra.split('');
    final = palavraArray.at(-1);
    let result;
    switch (tipo) {
        //Caso 1 é quando se transforma o final em i
        case 1:
            switch (final) {
                case "る":
                    if (palavra.godan) {
                        result = "り";
                    } else {
                        result = "";
                    }
                    break;

                case "う":
                    result = "い";
                    break;
                case "つ":
                    result = "ち";
                    break;

                case "ぶ":
                    result = "び";
                    break;

                case "む":
                    result = "み";
                    break;

                case "ぬ":
                    result = "に";
                    break;

                case "く":
                    result = "き";
                    break;

                case "ぐ":
                    result = "ぎ";
                    break;
                case "す":
                    result = "し";
                    break;
            }
            break;

        default:
            result = "";
            break;
    }
    return result;
}

//Aqui é definido os metodos para conjugar
function passado(palavra, polite) {
    let palavraArray = palavra.palavra.split('');
    final = palavraArray.at(-1);
    let palavraFinal;
    let result;
    if (!polite) {
        switch (final) {
            case "る":
                if (palavra.godan) {
                    result = "った";
                } else {
                    result = "た";
                }
                break;

            case "す":
                result = "し";
                break;

            case "う":
            case "つ":
                result = "った";
                break;

            case "ぶ":
            case "む":
            case "ぬ":
                result = "んだ";
                break;

            case "く":
                if (palavra.palavra == "行く") {
                    result = "った"
                } else {
                    result = "いた";
                }
                break;

            case "ぐ":
                result = "いだ";
                break;
            default:
                result = final
                break;
        }
    } else {
        final = transformarFim(palavra, 1);
        result = final + "ました";
    }
    palavraArray.pop();
    palavraFinal = palavraArray.join('')
    palavraFinal += result;
    return palavraFinal;
}

function teForm(palavra, polite) {
    let palavraArray = palavra.palavra.split('');
    final = palavraArray.at(-1);
    let result;
    if (!polite) {
        switch (final) {
            case "る":
                if (palavra.godan) {
                    result = "って";
                } else {
                    result = "て";
                }
                break;

            case "す":
                result = "して";
                break;

            case "う":
            case "つ":
                result = "って";
                break;

            case "ぶ":
            case "む":
            case "ぬ":
                result = "んで";
                break;

            case "く":
                if (palavra.palavra == "行く") {
                    result = "って"
                } else {
                    result = "いて";
                }
                break;

            case "ぐ":
                result = "いで";
                break;
            default:
                result = final
                break;
        }
    } else {
        final = transformarFim(palavra, 1);
        result = final + "まして";
    }
    palavraArray.pop();
    palavraFinal = palavraArray.join('');
    palavraFinal += result;
    return palavraFinal;
}

function volational(palavra) {
    let palavraArray = palavra.palavra.split('');
    final = palavraArray.at(-1);
    let result;
    switch (final) {
        case "る":
            if (palavra.godan) {
                result = "ろ";
            } else {
                result = "よ";
            }
            break;
        case "う":
            result = "お";
            break;
        case "つ":
            result = "と";
            break;

        case "ぶ":
            result = "ぼ";
            break;

        case "む":
            result = "も";
            break;

        case "ぬ":
            result = "の";
            break;

        case "く":
            result = "こ";
            break;

        case "ぐ":
            result = "ご";
            break;
        case "す":
            result = "そ";
            break;
    }
    palavraArray.pop();
    palavraFinal = palavraArray.join('');
    palavraFinal += result;
    palavraFinal += "う";
    return palavraFinal;
}