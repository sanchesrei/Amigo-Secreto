let amigos = [];

function adicionarAmigo() {
    let campoNome = document.getElementById('amigo');
    let nomeAmigo =campoNome.value;

    if (nomeAmigo.trim()=== '') {
        alert('Por favor insira um nome valido');

        return;
    }
    amigos.push(nomeAmigo);
    campoNome.value = '';
    
    ExibirAmigos();
    
}
 function ExibirAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

for (let amigo of amigos) {
    lista.innerHTML += `<li>${amigo}</li>`;

}
    
 }

