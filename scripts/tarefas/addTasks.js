let tokenJwt = sessionStorage.getItem('jwt')
//Executa ao clicar no botão de Acessar

// Novo Código

// CADASTRANDO UMA NOVA TAREFA PARA O USUARIO LOGADO
let btAddTask = document.getElementById('btAddTask')
let btPendente = document.getElementById('radio-1')
let btConcluido = document.getElementById('radio-2')

btPendente = false
btConcluido = true

btAddTask.addEventListener('click', evento => {

    evento.preventDefault();

    let descricaoTarefa = document.getElementById('novaTarefa');
    let radioGrupo = document.getElementsByName('radio-group');
    let radioSelecionado;
    if (descricaoTarefa.value != "") {

      //Verifica qual foi o radio selecionado e armazena em uma variavel
      if (radioGrupo[0].checked) {
        radioSelecionado = false;
      } else {
        radioSelecionado = true;
      }

      //Cria um objeto JS que sera convertido para JSON
      const objetoTarefa = {
        description: descricaoTarefa.value,
        completed: radioSelecionado
      }

      let objetoTarefaJson = JSON.stringify(objetoTarefa);
    

      let urlEndPointAddTask = 'https://ctd-todo-api.herokuapp.com/v1/tasks'
      let configDaRequisicao = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': tokenJwt
        },
        body: objetoTarefaJson
      }

      fetch(urlEndPointAddTask, configDaRequisicao)
        .then(resultado => {
          if (resultado.status == 201) {
            return resultado.json()
          }
          throw resultado.status
        })
        .then(resultado => {
          if(resultado.completed) {
            renderizaTarefasConcluidas(resultado);
          } else {
          renderizaTarefasPendentes(resultado);
          }
          
          console.log(resultado)
        })
        .catch(erro => {
          console.log(erro)
        })
    } else {
      evento.preventDefault();
      alert("É necessário informar uma descrição antes de enviar a atividade!")
    }
});