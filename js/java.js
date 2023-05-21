document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  let errorMessages = [];
  let isValid = false;

  while (!isValid) {
    // Lógica de validação dos campos do formulário
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let cep = document.getElementById("cep").value;

    errorMessages = [];

    // Verificação dos campos do formulário
    if (name.length < 5) {
      errorMessages.push("O nome deve ter pelo menos 5 letras.");
    }

    if (lastName.length < 5) {
      errorMessages.push("O sobrenome deve ter pelo menos 5 letras.");
    }

    if (!/^\d{11}$/.test(cpf)) {
      errorMessages.push("O CPF deve conter 11 números.");
    }

    if (email.length < 5 || !email.includes("@")) {
      errorMessages.push("O email deve conter pelo menos 5 letras e um '@'.");
    }

    if (!/^\d{8}$/.test(cep)) {
      errorMessages.push("O CEP deve conter 8 números.");
    }

    if (password !== confirmPassword) {
      errorMessages.push("As senhas não correspondem.");
    }

    // Verificação de erros
    if (errorMessages.length > 0) {
      // Exibir mensagens de erro
      document.getElementById("msgError").innerHTML = errorMessages.join("<br>");
      break; // Sai do loop se houver erros
    } else {
      isValid = true; // Define isValid como true para sair do loop
    }
  }

  if (isValid) {
    // Limpar mensagens de erro
    document.getElementById("msgError").innerHTML = "";

    // Exibir mensagem de sucesso
    document.getElementById("msgSuccess").innerHTML = "Cadastro realizado com sucesso!";

    // Reseta o formulário
    document.getElementById("registrationForm").reset();

    // Armazena os dados no localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('email', email);
    localStorage.setItem('cep', cep);

    console.log("Cadastro concluído");

    // Redireciona para a página principal
    window.location.replace("../index.html");
  }
});

