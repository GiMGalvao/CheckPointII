let novaTarefa = document.getElementById("novaTarea");
let botaoNovaTarefa = document.getElementById("botaoNovaTarefa")

let criandoTarefas = {
         "description": "",
         "completed": false
         
    };

let urlCriarTarefa = `https://ctd-todo-api.herokuapp.com/v1/tasks`;    

botaoNovaTarefa.addEventListener('click', function(event){ 

    event.preventDefault();





})

















    // let criandoTarefas = {
    //      "description": "",
    //      "completed": false
         
    // };

//            let getLogin = {
//             method: 'GET',
//             headers: {
//                 'content-type': 'application/json'
//             },

//         }

//         let urlCriarTarefa = `https://ctd-todo-api.herokuapp.com/v1/tasks`;

//         fetch(urlCriarTarefa, getLogin)

//         .then(response => {
//             console.log(response);
//             if(response.status == 201){
//                 return response.json()
//             }
//             throw response;
            
//         })
//         .then(data => {
//             loginEfetuado(data.jwt)
//             console.log(data)

//         })
        
//         .catch(error => {
//             loginErro(error.status)
//             alert ("Erro, tente novamente")

//         });
        
        
//     } else {
//         evento.preventDefault();
        
//     }
    
    
//         function loginEfetuado (jwtRecebido){
//         console.log("Json Recebido");
//         console.log(jwtRecebido);
//         sessionStorage.setItem('jwt', jwtRecebido)
//         window.location.href = 'tarefas.html'
    
//         }



//     let usuarioObjetoJson = JSON.stringify(usuarioObjeto);

        
//         let postLogin = {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: usuarioObjetoJson
//         }
        
//         let urlLogin = `https://ctd-todo-api.herokuapp.com/v1/users/login`;
        
//         fetch(urlLogin, postLogin) 
//         .then(response => {
//             console.log(response);
//             if(response.status == 201){
//                 return response.json()
//             }
//             throw response;
            
//         })
//         .then(data => {
//             loginEfetuado(data.jwt)
//             console.log(data)

//         })
        
//         .catch(error => {
//             loginErro(error.status)
//             alert ("Erro, tente novamente")

//         });
        
        
//     } else {
//         evento.preventDefault();
        
//     }
    
    
//         function loginEfetuado (jwtRecebido){
//         console.log("Json Recebido");
//         console.log(jwtRecebido);
//         sessionStorage.setItem('jwt', jwtRecebido)
//         window.location.href = 'tarefas.html'
    
//         }
//