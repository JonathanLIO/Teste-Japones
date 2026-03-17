// Alterado de vocab-div para vocabDiv
const vocabDiv = document.getElementById("vocab");
const tempoDiv = document.getElementById("tempo");

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

const conjugList = ["Passado", "Te-Form"];

function toggleConteudo() {
    vocabDiv.classList.toggle("aberto");
}

function loadConteudo() {
    const lista = document.createElement("ul");
    
    // Usamos 'let' porque o 'i' vai aumentar de valor
    for (let i = 0; i < vocabList.length; i++) {
        const addVocab = document.createElement("li");
        addVocab.textContent = vocabList[i].palavra;
        
        // Corrigido de list para lista
        lista.appendChild(addVocab);
    }
    vocabDiv.appendChild(lista);
    
    for (let i = 0; i < tempoDiv.length; i++) {
        const addTempo = document.createElement("input");
        addTempo.setAtribute("type", "radio");
        addTempo.setAtribute("id", i);
        
        const addLabel = document.createElement("label");
        addLabel.setAttribute("for", i);
        addLabel.textContent = tempoList[i];
        // Corrigido de list para lista
        tempoDiv.appendChild(addTempo);
        tempoDiv.appendChild(addLabel);
    }
}

loadConteudo();