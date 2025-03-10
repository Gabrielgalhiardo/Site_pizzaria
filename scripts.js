document.getElementById("loginForm").addEventListener("submit", function(event) {
    let form = document.getElementById(`loginForm`); 
    var nome = document.getElementById(`inputNome`).value;
    var senha = document.getElementById(`inputSenha`).value;
    console.log(senha, nome);
    let nomeCorreto = document.getElementById(`nome`);
    let senhaCorreta = document.getElementById(`senha`);
    if(nome.toLowerCase() == `anderson` ){
        nomeCorreto.style.backgroundColor = `green`;
        if(senha == `1234`){
            senhaCorreta.style.backgroundColor = `green`;
            window.location.href = `paginaLogada.html`;
        }else{
            senhaCorreta.style.backgroundColor = `red`;
        }
    }else{
        nomeCorreto.style.backgroundColor = `red`;
        senhaCorreta.style.backgroundColor = `red`;
    }


    form.reset();
    event.preventDefault();
});



function mudarModo(){
    let fundo = document.body;
    let fundinho = document.getElementById(`inicio`);
    let textoBotao = document.getElementById(`textoBotaoMudar`);
    textoBotao.inner

    if(fundo.style.backgroundColor == `black`){
        fundo.style.backgroundColor = `rgb(255, 102, 102)`;
        fundo.style.color = `black`;
        fundinho.style.backgroundColor = `rgb(217, 95, 95)`;
        fundinho.style.boxShadow = `20px 10px 10px black`;
        textoBotao.innerText = `Ativar modo noturno`;
    }else{
        fundo.style.backgroundColor = `black`;
        fundo.style.color = `white`;
        fundinho.style.backgroundColor = `rgb(96, 10, 10)`;
        fundinho.style.boxShadow = `13px 10px 10px rgb(153, 15, 15)`;
        textoBotao.innerText = `Ativar modo claro`; 
    }
}

function mostrarSenha(){
    let inputSenha = document.getElementById(`inputSenha`);
    let textoBotaoSenha = document.getElementById(`textoBotaoSenha`);
    if (inputSenha.type == `password`){
        inputSenha.type =`text`;
        textoBotaoSenha.innerText = `😑`;
    }else{
        inputSenha.type = `password`;
        textoBotaoSenha.innerText = `👁️`;
    }
        
  

}

