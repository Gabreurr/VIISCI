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

function validarCPF() {
    const cpf = document.getElementById("cpf").value.replace(/[^\d]/g, ""); // Remover caracteres não numéricos
    const cpfArray = cpf.split("").map(Number); // Transformar o CPF em um array de números

    if (cpfArray.length !== 11 || new Set(cpfArray).size === 1) {
        exibirErro("CPF inválido");
        return;
    }

    // Validar o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += cpfArray[i] * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10) {
        resto = 0;
    }
    if (resto !== cpfArray[9]) {
        exibirErro("CPF inválido");
        return;
    }

    // Validar o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += cpfArray[i] * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10) {
        resto = 0;
    }
    if (resto !== cpfArray[10]) {
        exibirErro("CPF inválido");
        return;
    }

    exibirErro("CPF válido");
}

function exibirErro(mensagem) {
    const cpfError = document.getElementById("cpf-error");
    cpfError.textContent = mensagem;
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


