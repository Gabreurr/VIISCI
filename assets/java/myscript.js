function enviarFormulario() {
    // Obtém os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    // Exibe os dados no console
    console.log("Nome: " + nome);
    console.log("E-mail: " + email);

    // Limpa os campos após o envio
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}


const formulario = document.getElementById("contato-form");
const mensagemErro = document.getElementById("mensagem-erro");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
    } else {
        mensagemErro.textContent = "";

        // Aqui você pode enviar o formulário para um servidor ou realizar qualquer ação desejada
        alert("Formulário enviado com sucesso!");
        formulario.reset(); // Limpar o formulário após o envio
    }
});

function validarEmail() {
    // Obtém o valor do campo de e-mail
    var email = document.getElementById('email').value;

    // Expressão regular para validar um endereço de e-mail
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Testa o endereço de e-mail com a expressão regular
    if (regex.test(email)) {
      // E-mail válido
      document.getElementById('emailErro').textContent = '';
    } else {
      // E-mail inválido
      document.getElementById('emailErro').textContent = 'E-mail inválido';
    }
  }

  function salvarDados() {
    var inscritos = document.getElementById('nome1').value;
    localStorage.setItem('nome1', inscritos);
    alert('Inscrito');
  }

  function recuperarDados() {
    var inscritos = localStorage.getItem('nome1');
    if (inscritos) {
      alert('Inscrito recuperado do Local Storage: ' + inscritos);
    } else {
      alert('Nenhum Inscrito encontrado no Local Storage.');
    }
  }






