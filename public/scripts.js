let paginaloginboolean = true;

function cadastrar(){
    let email = document.getElementById('emailCriado').value.trim();
    let senha = document.getElementById('senhaCriada').value.trim();

    if (email === '' || senha === ''){
        alert('Preencha todos os campos!');
        return;
    }

    fetch('/cadastrar',{
        method: 'POST',
        headers: {
             'Content-Type':'application/json'
        },
        body: JSON.stringify({email, senha})
    })
    .then(response => response.json())
    .then(data => alert('Usuario cadastrado com sucesso!')) 
    .catch(error => console.error('Erro', error));
    document.getElementById('formulario').reset(); 

}

function logarSite(){
    let email = document.getElementById('inputNome').value.trim();
    let senha = document.getElementById('inputSenha').value.trim();

    if (email === '' || senha === ''){
        alert('Preencha todos os campos!');
        return;
    }
    fetch('/usuarios',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(usuario => {
            if(email === usuario.email & senha === usuario.senha){
                alert('Pagina aceitou sua solicitação!');
                window.location.href = `pizzariaSite/pizzaria.html`;
                return;
            }else if(email === usuario.email){
                alert('Senha errada!');
            }
        });
        })
    .catch(error => console.error('Erro:', error));
        
}


var escuro = true;
function mudarModo(){
    let fundo = document.body;
    let fundinho = document.getElementById(`inicio`);
    let botaoLogin = document.querySelectorAll(`.botaologin`);
    let cadastro = document.getElementById(`cadastrar`);
    let textoBotao = document.querySelectorAll(`.textoBotaoMudar`);

    if (escuro) {
        fundo.style.color = 'black';
        fundo.style.backgroundColor = 'white';
        fundinho.style.backgroundColor = 'rgb(165, 165, 165)';
        
        textoBotao.forEach(botao => {
            botao.innerText = 'Ativar modo Escuro';
            botao.style.color = 'black';
        });
        
        botaoLogin.forEach(textoColor => {
            textoColor.style.color = 'black';
        });
        
        cadastro.style.backgroundColor = 'rgb(165, 165, 165)';
        escuro = false;
    } else {
        fundo.style.color = 'white';
        fundo.style.backgroundColor = 'rgb(20, 20, 20)'; 
        fundinho.style.backgroundColor = 'rgba(15, 11, 2, 0.726)';
        
        textoBotao.forEach(botao => {
            botao.innerText = 'Ativar modo Claro';
            botao.style.color = 'White';
        });
        
        botaoLogin.forEach(textoColor => {
            textoColor.style.color = 'White';
        });
        
        cadastro.style.backgroundColor = 'rgba(15, 11, 2, 0.726)';
        escuro = true;
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
 
function mudarPagina(){
    let paginaLogin = document.getElementById('inicio');
    let paginaCadastro = document.getElementById('cadastrar');

    if(paginaloginboolean){
        paginaLogin.style.display = `none`;
        paginaCadastro.style.display = `flex`;
        paginaloginboolean = false;
    }else{
        paginaCadastro.style.display = `none`;
        paginaLogin.style.display = `flex`;
        paginaloginboolean = true;
    }
}



