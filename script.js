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
    "Te-form Educado"
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
        //Cria o li correspondente
        const AddLi = document.createElement("li");

        //Cria o elemento input e configura ele
        const addTempo = document.createElement("input");
        addTempo.setAttribute("type", "checkbox");
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
    const elementos = tempoDiv.querySelectorAll('*');
    const selecionados = [];

    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].nodeName = "INPUT") {
            selecionados.push(elementos[i].id);
        }
    }
    temposSelecionados = selecionados;
    Carregar();
}

function Carregar(){
    
}
















































//Funções responsavel pelas conjugações




//Essa função é respossavel por trnasformar o final do verbo em outra coisa
//Por exermpro: 待, final = つ, se o tipo for 1, ele retorna result = ち 
function transformarFim(palavra, tipo) {
    let palavraArray = palavra.palavra.split('');
    final = palavraArray.at(-1);
    let result;
    if (tipo == 1) {
        switch (final) {
            case "る":
                if (palavra.godan) {
                    result = "sem";
                } else {
                    result = "り";
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
        }
    }
    return result;
}

//Aqui é definido os metodos para conjugar
function passado(palavra, polite) {
    let palavraArray = palavra.palavra.split('');
    final = palavraArray.at(-1);
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
    return result;
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
    return result;
}