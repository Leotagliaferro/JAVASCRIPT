let clientes = []

function adicionarCliente() {
    let nomeCliente = document.getElementById('name').value

if (nomeCliente === '') {
    alert("digite um nome");
    return;
}

    clientes.push(nomeCliente)
    renderizarClientes()
    console.log(clientes)

}


function renderizarClientes () {
    let listarClientes = document.getElementById('lista-clientes')
    listarClientes.innerHTML = ""
    for(let i =0; i< clientes.length; i++) {
        listarClientes.innerHTML += "<li>" + clientes[i] + "</li>"
    }

}


function pesquisaCliente() {
    let pesquisar = document.getElementById('pesquisa').value
    let listarClientes = document.getElementById('lista-clientes')
    listarClientes.innerHTML = ""
    for(let i = 0; i < clientes.length; i++) {
      if (pesquisar == clientes[i]) {
        listarClientes.innerHTML +="<li>" + clientes[i] + "</li>"
      }
    }


    
 
}