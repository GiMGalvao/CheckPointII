const user = {
    firstName:  document.getElementById("nome").value,
    lastName:document.getElementById("apelido").value,
    email: document.getElementById("email").value,
    password:document.getElementById("senha").value
    };
    
    let nomeCriarConta = document.getElementById("nome");
    let apelidoCriarConta = document.getElementById("apelido");
    let emailCriarConta = document.getElementById("email");
    let senhaCriarConta = document.getElementById("senha");
    //let repetirSenhaCriarConta = getElementById("repetirSenha");
    
    let botaoCadastro = document.getElementById("botaoCadastro")
    
    
    botaoCadastro.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    
    const validator = (user) => {
        Object.keys(user).every(key => !isEmpty(user[key]))
        return Object.keys(user)
    }
    
    const isEmpty = (target) =>{
        return target == "" || target == " "
       
    }
    
    if(validator (user !=""))  {
    user.firstName = nomeCriarConta.value;
    user.lastName = apelidoCriarConta.value;
    user.email = emailCriarConta.value;
    user.password = senhaCriarConta.value;
    
    const requisicao = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
    'content-type':'application/json'
    },
    };
    
    
    fetch("https://ctd-todo-api.herokuapp.com/v1/users", requisicao)
    . then((response) => {
    if(response.status == 201) {
    return response.json()
    }
    throw response;
    
    }).then(function (resposta) {
    cadastroSucesso(resposta.jwt)
    })
    .catch(error => {
    cadastroErro(error)
    });
    } 
    else {
    alert("Preencha todos os campos para prosseguir.") }
    
    });
    
    function cadastroSucesso(jsonRecebido) {
    
    console.log("Json recebido ao cadastrar");
    console.log(jsonRecebido);
    alert("Usuário cadastrado com sucesso")
    }
    
    function cadastroErro(statusRecebido){
    console.log("Erro ao cadastrar");
    console.log(statusRecebido);
    }
    
    