let botaoAdcTarefa = document.getElementById('botaoNovaTarefa');
let novaTarefa = document.getElementById('novaTarefa');

const novaTarefaObjeto = {
    description: "",
    completed : ""
}

botaoAdcTarefa.addEventListener('click', function(event) {

    if(novaTarefa.value == ""){

        let novaTarefaObjetoJson = JSON.stringify(novaTarefaObjeto);
        
        let postNovaTarefa = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: novaTarefaObjetoJson
        }

        let urlAdcTarefa = `https://ctd-todo-api.herokuapp.com/v1/tasks`;

        fetch(urlAdcTarefa, postNovaTarefa) 
        .then(response => {
            console.log(response);
            if(response.status == 201){
                return response.json()
               
            }

            throw response;

        })

        .then(resposta => {
            tarefaCriada(resposta.jwt)
            console.log(data)

        })

        .catch(error => {
            cadastroErro(error)
        });

      

    } else {
        event.preventDefault();
        alert("É necessário informar uma descrição antes de enviar a atividade!")
      }

      function tarefaCriada (jwtRecebido){
        console.log("Json Recebido");
        console.log(jwtRecebido);
        alert("Tarefa cadastrada com sucesso")
        
      };

      function cadastroErro(statusRecebido){
        console.log("Erro ao cadastrar");
        console.log(statusRecebido);
        }
        





















})


    