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

    console.log(email, senha)

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
                window.location.href = `paginaLogada.html`;
                return;
            }else if(email === usuario.email){
                alert('Senha errada!');
            }
        });
        })
    .catch(error => console.error('Erro:', error));
        
}



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



