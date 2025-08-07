let amigos = [];

function adicionarAmigo() {
    let campoNome = document.getElementById('amigo');
    let nomeAmigo =campoNome.value;

    if (nomeAmigo.trim()=== '') {
        alert('Por favor insira um nome valido');

        return;
    }
    let regex = /^[A-Za-z]+$/;
    if (!regex.test(nomeAmigo)) {
        alert('Por favor, insira apenas letras.');
        return;
    }
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        return;
    }
    amigos.push(nomeAmigo);
    campoNome.value = '';

    exibirAmigos();
    
}
 function exibirAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

for (let amigo of amigos) {
    lista.innerHTML += `<li>${amigo}</li>`;

}
    
 }

 function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione mais de uma pessoa pra realizar o sorteio');
        return;
        
    }
    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteado];

    exibirSorteio(amigoSorteado);

  
 }

 function exibirSorteio(amigoSorteado) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    resultado.innerHTML += `<li>${amigoSorteado}</li>`;

 }



