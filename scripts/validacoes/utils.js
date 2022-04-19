function retiraEspacosDeUmValorInformado (recebeValor) {
    return recebeValor.trim();
}

function converteValorRecebidoEmMinusculo(recebeValor) {
    return recebeValor.toLowerCase();
}

// var form = document.getElementById('form-cadastro');
// if(form.addEventListener){
//   form.addEventListener("submit", validaCadastro);
  

// }

// let formulario = document.querySelector("form");
//   formulario.addEventListener("submit", function(event) {
//      event.preventDefault()
//   });

// function validaCadastro(){
//   var nome = document.getElementById('nome');
//   var apelido = document.getElementById('apelido');
//   var email = document.getElementById('email');
//   var senha = document.getElementById('senha');
//   var senha2 = document.getElementById('senha2');

//   var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	
  
//    campo_nome = document.querySelector('.msg-nome')
//    if(nome.value == ""){
//      campo_nome.innerHTML = 'Favor preencher o nome';
//      campo_nome.style.display = 'block';
     

//    }else{
//      campo_nome.style.display ="none";
//    }

//    campo_apelido = document.querySelector('.msg-apelido')
//    if(apelido.value == ""){
//      campo_apelido.innerHTML = 'Favor preencher o apelido';
//      campo_apelido.style.display = 'block';
     
//     }else{
//       campo_apelido.style.display ="none";
//    }

//    campo_email = document.querySelector('.msg-email')
//    if(email.value == ""){
//    campo_email.innerHTML = "Campo e-mail não pode estar vazio";
//    campo_email.style.display = 'block';
   
//   } else if(filtro.test(email.value)){
//     campo_email.style.display = 'none';

//   } else {
//      campo_email.innerHTML = 'Formato de e-emal Inválido';
//      campo_email.display= "block";
//      contErro += 1;

//   }
//   /* Validação do campo senha */
// 	campo_senha = document.querySelector('.msg-senha');
// 	if(senha.value == ""){
// 		campo_senha.innerHTML = "Favor preencher a Senha";
// 		campo_senha.style.display = 'block';
	
// 	}else if(senha.value.length < 6){
// 		campo_senha.innerHTML = "Favor preencher a Senha com o mínimo de 6 caracteres";
// 		campo_senha.style.display = 'block';
		
// 	}else{
// 		campo_senha.style.display = 'none';
// 	}
 
// 	/* Validação do campo repita a senha */
// 	campo_senha2 = document.querySelector('.msg-repetir-senha');
// 	if(senha2.value == ""){
// 		campo_senha2.innerHTML = "Favor preencher o campo Repita a Senha";
// 		campo_senha2.style.display = 'block';
		
// 	}else if(senha2.value.length < 6){
// 		campo_senha2.innerHTML = "Favor preencher o campo Repetir Senha com o mínimo de 6 caracteres";
// 		campo_senha2.style.display = 'block';
		
// 	}else{
// 		campo_senha2.style.display = 'none';
// 	}
 
// 	/* Valida se a senha é igual ao campo repita a senha */
// 	if(senha.value != "" && senha2.value != "" && senha.value != senha2.value){
// 		campo_senha2.innerHTML = "O campo Repita a Senha é diferente do campo Senha";
// 		campo_senha2.style.display = 'block';
		
// 	  }
//    if(senha.value != "" && campo_senha2.value != "" && senha.value != campo_senha2.value){
//     campo_senha2.innerHTML = 'Campo repetir senha é diferente do campo senha';
    
//   }
  
// }




