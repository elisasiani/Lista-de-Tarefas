let tarefas = []

function adicionarTarefa() {

    //recebe o valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    if (tarefa == ""){
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista"
        mensagem.textContent = mensagemErro
    } else {
        //mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        tarefas.push(tarefa)
        renderizarTarefa()
    }

    //limpa o input do usuário
    inputTarefa.value = ""
}

function renderizarTarefa() {
    //cria novo item (li) e insere na lista (ul)
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    for (let i = 0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i] //passa por cada elemento

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefa()
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite sua tarefa:")
    if (tarefaEditada.trim !== "") {
        tarefas[i] = tarefaEditada
        renderizarTarefa()
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefa()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}