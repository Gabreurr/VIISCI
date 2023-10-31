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






