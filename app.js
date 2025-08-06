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
    
}
