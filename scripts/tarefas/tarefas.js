let novaTarefa = document.getElementById("novaTarea");
let botaoNovaTarefa = document.getElementById("botaoNovaTarefa")

botaoNovaTarefa.addEventListener('click', function(event){

    event.preventDefault();

    let criandoTarefas = {
         "description": novaTarefa.value,
         "completed": false
         
    };

    fetch(`https://ctd-todo-api.herokuapp.com/v1/tasks`, {

        method: 'POST',
        headers: “Authorization” : {
            
            "Content-type" : 'application/json'
        
        }

        body: JSON.stringify(criandoTarefas)

    })

    .then(response => response.json())   

console.log(criandoTarefas);

})

onload = function(){
    let tokenJwt = this.sessionStorage.getItem("jwt");

        if (!tokenJwt) {
            //alert("Você não tem permissão para acessar essa pagina...")
            location.href = "index.html"
        } else {
            console.log(tokenJwt);
        }

}