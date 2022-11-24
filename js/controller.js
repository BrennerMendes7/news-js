function cadastrar() {
    const nomeDigitado = document.getElementById("nome").value;
    const emailDigitado = document.getElementById("email").value;
    const nascimentoDigitado = document.getElementById("nascimento").value;
    const feedbackDigitado = document.getElementById("feedback").value;

    const pessoa = new Pessoa(nomeDigitado, emailDigitado, nascimentoDigitado, feedbackDigitado);

    const tabela = document.getElementById("dados");
    const tbody = tabela.getElementsByTagName("tbody")[0];
    const novaLinha = tbody.insertRow();

    // validar campos
    const campoNome = document.getElementById("nome");
    const campoEmail  = document.getElementById("email");
    const campoNascimento  = document.getElementById("nascimento");
    const campoFeedback = document.getElementById("feedback");
    const style = getComputedStyle(campoNome, campoEmail, campoNascimento, campoFeedback);
    const borderColor = style.getPropertyValue("border-color");

    if (campoNome.value == "" || campoEmail.value == "" || campoNascimento.value == "" || campoFeedback.value == "") {
        campoNome.style.borderColor = "red";
        campoEmail.style.borderColor = "red";
        campoNascimento.style.borderColor = "red";
        campoFeedback.style.borderColor = "red";
        alert("Todos os campos devem ser preenchidos");
    } else {
        // inserir nome
        const celulaNome = novaLinha.insertCell(0);
        const textoNome = document.createTextNode(pessoa.nome);
        celulaNome.appendChild(textoNome);
        campoNome.style.borderColor = "rgba(0, 0, 0, 0.2)";

        // inserir email
        const celulaEmail = novaLinha.insertCell(1);
        const textoEmail = document.createTextNode(pessoa.email);
        celulaEmail.appendChild(textoEmail);
        campoEmail.style.borderColor = "rgba(0, 0, 0, 0.2)";

        // inserir nascimento
        const celulaNascimento = novaLinha.insertCell(2);
        const dataFormatada = pessoa.getNascimento();
        const textoNascimento = document.createTextNode(dataFormatada);
        celulaNascimento.appendChild(textoNascimento);
        campoNascimento.style.borderColor = "rgba(0, 0, 0, 0.2)";

        // inserir idade
        const celulaIdade = novaLinha.insertCell(3);
        const idade = pessoa.getIdade();
        const textoIdade = document.createTextNode(idade);
        celulaIdade.appendChild(textoIdade);

        // inserir feedback
        const celulaFeedback = novaLinha.insertCell(4);
        const textoFeedback = document.createTextNode(pessoa.feedback);
        celulaFeedback.appendChild(textoFeedback);
        campoFeedback.style.borderColor = "rgba(0, 0, 0, 0.2)";

        limparFormulario();
    }

}

function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nascimento"). value = "";
    document.getElementById("feedback").value = "";
}