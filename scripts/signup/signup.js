let nomeCriarConta = document.getElementById("nome");
let apelidoCriarConta = document.getElementById("apelido");
let emailCriarConta = document.getElementById("email");
let senhaCriarConta = document.getElementById("senha");
//let repetirSenhaCriarConta = getElementById("repetirSenha");

let botaoCadastro = document.getElementById("botaoCadastro")

const userObjCadastro = {
firstName: "",
lastName: "",
email: "",
password: ""
};

botaoCadastro.addEventListener('click', function(event) {

event.preventDefault();

if(nomeCriarConta.value !="" && apelidoCriarConta.value != "" && 
emailCriarConta.value != "" && senhaCriarConta.value != "") {
userObjCadastro.firstName = nomeCriarConta.value;
userObjCadastro.lastName = apelidoCriarConta.value;
userObjCadastro.email = emailCriarConta.value;
userObjCadastro.password = senhaCriarConta.value;

let objetoUserJson = JSON.stringify(userObjCadastro);

let configurRequisicao = {
method: 'POST',
body: objetoUserJson ,
headers: {
'content-type':'application/json'
},
};


fetch("https://ctd-todo-api.herokuapp.com/v1/users", configurRequisicao)
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

