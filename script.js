// Alterado de vocab-div para vocabDiv
const vocabDiv = document.getElementById("vocab");
const tempoDiv = document.getElementById("tempo");
const toggleBtn = document.getElementById("toggle");

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
        let nome = "tempo-" + (i+1); 
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

function toggleOn(){
    toggleBtn.classList.toggle("toggled");

    const elementos = tempoDiv.querySelectorAll('*');

    for(let i = 0; i < elementos.length; i++){
        if(elementos[i].nodeName = "INPUT"){
            elementos[i].checked = !elementos[i].checked;
            console.log("Achado")
        }
    }
    console.log("Setado")
}

function untoggleOn(){
    toggleBtn.classList.toggle("toggled");

    const elementos = tempoDiv.querySelectorAll('*');

    for(let i = 0; i < elementos.length; i++){
        if(elementos[i].nodeName = "INPUT"){
            elementos[i].checked = false    ;
            console.log("Achado")
        }
    }
    console.log("Setado")
}

loadConteudo();