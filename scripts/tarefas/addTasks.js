// let tokenJwt = sessionStorage.getItem('jwt')
//Executa ao clicar no botão de Acessar

// Novo Código

// CADASTRANDO UMA NOVA TAREFA PARA O USUARIO LOGADO
let btAddTask = document.getElementById('botaoNovaTarefa')
let btPendente = document.getElementById('radio-1')
let btConcluido = document.getElementById('radio-2')

// btPendente = false
// btConcluido = true

btAddTask.addEventListener('click', evento => {

    evento.preventDefault();

    let descricaoTarefa = document.getElementById('novaTarea');
    let radioSelecionado;
    if (descricaoTarefa.value != "") {

      //Verifica qual foi o radio selecionado e armazena em uma variavel
      if (btPendente.checked) {
        // alert ("Pendente")
      } else {
        // alert ("Concluido")
      }

      //Cria um objeto JS que sera convertido para JSON
      const objetoTarefa = {
        description: "",
        completed: ""
      }


      let objetoTarefaJson = JSON.stringify(objetoTarefa);

     
      let configDaRequisicao = {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: objetoTarefaJson
      }

      let urlAddTask = 'https://ctd-todo-api.herokuapp.com/v1/tasks';

      fetch(urlAddTask, configDaRequisicao)
        .then(resultado => {
          console.log(resultado);
          if (resultado.status == 201) {
            return resultado.json()
          }
          throw resultado;
        })
        .then(data => {
          tarefaCriada(data.jwt)
          console.log(data)

      })
      
      // .catch(error => {
      //     loginErro(error.status)
      //     alert ("Erro, tente novamente")

      // });
      
      
  } else {
      evento.preventDefault();
      alert("É necessário informar uma descrição antes de enviar a atividade!")
    }

    function tarefaCriada (jwtRecebido){
      console.log("Json Recebido");
      console.log(jwtRecebido);
      sessionStorage.setItem('jwt', jwtRecebido)
      
  }


});

  