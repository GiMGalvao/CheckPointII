

function delTask(id, tokenJwt){
  let urlEndPointDelTask = 'https://ctd-todo-api.herokuapp.com/v1/tasks/${id}'
  let configDaRequisicao = {
    method: 'DELETE',
    headers: {
      'authorization': tokenJwt
    }
  }

  fetch(urlEndPointDelTask, configDaRequisicao)
  .then(resultado => {
    if (resultado.status == 200) {
      return resultado.json()
    } else {
     throw resultado.status
    }
  })
  .then()
}
