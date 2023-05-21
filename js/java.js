document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  // Lógica de validação dos campos do formulário
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var cpfCnpj = document.getElementById("cpfCnpj").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var cep = document.getElementById("cep").value;

  var errorMessages = [];

  if (name.length < 5) {
    errorMessages.push("O nome deve ter pelo menos 5 letras.");
  }

  if (lastName.length < 5) {
    errorMessages.push("O sobrenome deve ter pelo menos 5 letras.");
  }

  if (!/^\d{11}$|^\d{14}$/.test(cpfCnpj)) {
    errorMessages.push("O CPF/CNPJ deve conter 11 ou 14 números.");
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

  if (errorMessages.length > 0) {
    document.getElementById("msgError").innerHTML = errorMessages.join("<br>");
  } else {
    document.getElementById("msgError").innerHTML = ""; // Limpa a mensagem de erro
    document.getElementById("msgSuccess").innerHTML = "Cadastro realizado com sucesso!"; // Exibe mensagem de sucesso
    document.getElementById("registrationForm").reset(); // Reseta o formulário
    
    // Armazena os dados no localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('cpfCnpj', cpfCnpj);
    localStorage.setItem('email', email);
    localStorage.setItem('cep', cep);
  }
});
