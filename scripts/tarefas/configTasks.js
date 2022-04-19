let finalizarPaginaTasks = document.getElementById('closeApp')
let nomeMaisSobrenomeUsuario = document.querySelector('.user-info p')
let urlDados = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe'

// Ao carregar pagina Tarefas já verifica o token e se ele for valido aparece o nome do usuario em tela
onload = function () {
  if (!tokenJwt) {
    location.href = 'index.html'
  } else {
    NomeSobrenomeUsuario(tokenJwt)
    localizaTarefasUsuario(tokenJwt)
  }
}
// extra caso seja da vontade do usuario clicar no botão para sair
finalizarPaginaTasks.addEventListener('click', function () {
  location.href = 'index.html'
})

// Função que junta nome e sobrenome do usuario para renderizar na tela ao entrar na pagina tarefas.html
function NomeSobrenomeUsuario() {
  let endPointTask = {
    method: 'GET',
    headers: {
      authorization: tokenJwt
    }
  }

  fetch(urlDados, endPointTask)
    .then(resposta => resposta.json())
    .then(resposta2 => {
      nomeMaisSobrenomeUsuario.innerHTML = `${resposta2.firstName} ${resposta2.lastName}`
    })
}


// Renderizando Tarefas Pendentes // Renderizando Tarefas Pendentes


function renderizaTarefasPendentes(tarefa) {
  let tarefasPendentesUl = document.querySelector('.tarefas-pendentes')
  let liTarefaPendente = document.createElement('li')
  liTarefaPendente.classList.add('tarefa')

  liTarefaPendente.innerHTML = `
  <div class="not-done" id="${tarefa.id}" onclick="capturaIdTarefa(${tarefa.id})"></div>
  <div class="descricao">
    <p class="idDaTarefa">${tarefa.id}</p>
    <p class="nome">${tarefa.description}</p>
    <p class="timestamp"><i class="far fa-calendar-alt"></i>${tarefa.createdAt}</p>
  </div>
  `
  tarefasPendentesUl.appendChild(liTarefaPendente)
}

function capturaIdTarefa(idTarefa) {
  console.log(idTarefa)
}

// Renderizando Tarefas Finalizadas // Renderizando Tarefas Finalizadas

function renderizaTarefasConcluidas(tarefa) {
  let tarefasConcluidasUl = document.querySelector('.tarefas-terminadas')
  let liTarefaConcluida = document.createElement('li')
  liTarefaConcluida.classList.add('tarefa')

  liTarefaConcluida.innerHTML = `
    <div class="done"></div>
    <div class="descricao">
      <p class="nome">${tarefa.description}</p>
      <div>
          <button><i id="${tarefa.id}" class="fas fa-undo-alt change"></i></button>
          <button><i id="${tarefa.id}" class="far fa-trash-alt"></i></button>
      </div>
    </div>
  `
  tarefasConcluidasUl.appendChild(liTarefaConcluida)
}

function localizaTarefasUsuario(tokenJwt) {
  let urlEndPointListTasks = 'https://ctd-todo-api.herokuapp.com/v1/tasks'
      let configDaRequisicao = {
        method: 'GET',
        headers: {
          'authorization': tokenJwt
        }}

        fetch(urlEndPointListTasks, configDaRequisicao)
        .then(resultado => {
          if (resultado.status == 200) {
            return resultado.json()
          }
          throw resultado.status
        })
        .then(resultado => {
          for(let tarefa of resultado) {
          if(tarefa.completed) {
            renderizaTarefasConcluidas(tarefa);
          } else {
          renderizaTarefasPendentes(tarefa);
          }}
        console.log(resultado)})
        .catch(erro => {
          console.log(erro)
        })
}





function capturaIdTarefa(idTarefa) {
  console.log(idTarefa)
}
